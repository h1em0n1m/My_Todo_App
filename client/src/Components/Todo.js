import { useState } from "react";
import { Icon } from "@iconify/react";

const Todo = ({ name, done, onToggle, onTrash, onRename }) => {
  const [editMode, setEditMode] = useState(false);
  const [newName, setnewName] = useState(name);

  return (
    <div className="todo_frame">
      <Icon
        className={"checkbox" + (done ? "checked" : "unchecked")}
        icon={"ph:cat" + (done ? "-fill" : "")}
        onClick={() => onToggle(!done)}
      />
      {editMode ? (
        <form
          className="edit_form"
          onSubmit={(ev) => {
            ev.preventDefault();
            onRename(newName);
            setEditMode(false);
          }}
        >
          <input
            className="edit_input"
            type="text"
            value={newName}
            onChange={(ev) => setnewName(ev.target.value)}
          />
        </form>
      ) : (
        <div
          className={`${done ? "checked" : "unchecked"}_task`}
          onClick={() => setEditMode(true)}
        >
          {name}
        </div>
      )}
      <Icon icon="bi:trash" className="trash" onClick={onTrash} />
    </div>
  );
};

export default Todo;
