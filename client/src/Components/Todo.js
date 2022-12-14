import { useState } from "react";
import { Icon } from "@iconify/react";

const Todo = ({ name, done, onToggle, onTrash, onRename }) => {
  const [editMode, setEditMode] = useState(false);
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
            setEditMode(false);
          }}
          onClick={() => setEditMode(false)}
        >
          <input
            className="edit_input"
            type="text"
            value={name}
            onChange={(ev) => onRename(ev.target.value)}
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
