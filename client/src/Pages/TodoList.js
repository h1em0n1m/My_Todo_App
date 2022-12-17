import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import TodoForm from "../Components/TodoForm";
import Todo from "../Components/Todo";
import styled from "styled-components";

const TodoView = styled.section`
  .main_form {
    margin-left: 30px;
    margin-bottom: 30px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    font-family: "Gaegu", cursive;
  }

  .main_input {
    padding: 3px;
    padding-left: 10px;
    width: 230px;
    height: 25px;
    border: solid 3px;
    border-radius: 20px;
    font-size: 17px;
  }

  .edit_form {
    margin-bottom: 7px;
  }

  .edit_input {
    width: 165px;
    border: solid 2px;
    border-radius: 10px;
  }

  .submitBtn {
    font-size: 40px;
    margin-right: 10px;
  }

  .todos_frame {
    margin-left: 32px;
    width: 290px;
    height: 320px;
    border: 4px dashed black;
    border-radius: 10px;
    overflow-y: scroll;
  }

  .todos_frame::-webkit-scrollbar {
    width: 7px;
  }

  .todos_frame::-webkit-scrollbar-thumb {
    height: 30%;
    background: #b3b3b3;
    border-radius: 10px;
  }

  .todos_frame::-webkit-scrollbar-track {
    border-radius: 10px;
    background: white;
  }

  .todo_frame {
    margin: 7px;
    margin-left: 20px;
    margin-right: 15px;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px dashed black;
    font-size: 21px;
  }

  .todo_frame > div {
    width: 170px;
    text-align: left;
    font-size: 16px;
  }

  .checked_task {
    text-align: right;
    text-decoration: line-through;
    color: #b3b3b3;
  }
`;

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios.get("/api/todos");
      setTasks(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addTask = async (name) => {
    try {
      await axios.post("/api/todo", {
        id: uuid(),
        name,
        done: false,
      });
    } catch (error) {
      console.log(error);
    }
    getData();
  };

  const removeTask = async (id) => {
    try {
      await axios.delete(`api/delete/${id}`);
    } catch (error) {
      console.log(error);
    }
    getData();
  };

  const renameTask = async (id, newName) => {
    try {
      await axios.put(`api/update/name/${id}`, { id: id, name: newName });
    } catch (error) {
      console.log(error);
    }
    getData();
  };

  const updateTaskDone = async (id, newDone) => {
    try {
      await axios.put(`api/update/check/${id}`, { id: id, done: newDone });
    } catch (error) {
      console.log(error);
    }
    getData();
  };

  const numberComplete = tasks.filter((task) => task.done).length;
  const numberTotal = tasks.length;

  const getMessage = () => {
    const percentage = (numberComplete / numberTotal) * 100;
    if (percentage === 0 || numberTotal === 0) {
      return "하나라도 해 볼까요?";
    }
    if (percentage === 100) {
      return "오늘 하루는 완벽합니다!";
    }
    return "좀 더 힘을 내 봅시다!";
  };
  return (
    <TodoView>
      <h1>오늘 하루 고양이와 할 일은 {numberTotal - numberComplete}개!</h1>
      <h2>{getMessage()}</h2>
      <TodoForm onAdd={addTask} />
      <div className="todos_frame">
        {tasks.map((task) => (
          <Todo
            key={task.id}
            {...task}
            onRename={(newName) => renameTask(task.id, newName)}
            onTrash={() => removeTask(task.id)}
            onToggle={(newDone) => updateTaskDone(task.id, newDone)}
          />
        ))}
      </div>
    </TodoView>
  );
};

export default TodoList;
