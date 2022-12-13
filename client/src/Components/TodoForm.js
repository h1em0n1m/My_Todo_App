import { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");
  function handleSubmit(ev) {
    ev.preventDefault();
    onAdd(taskName);
    setTaskName("");
  }
  return (
    <form className="main_form" onSubmit={handleSubmit}>
      <input
        className="main_input"
        type="text"
        value={taskName}
        onChange={(ev) => setTaskName(ev.target.value)}
        placeholder="입력 후엔 엔터!"
        required
      />
    </form>
  );
};

export default TodoForm;
