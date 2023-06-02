import { useState } from "react";

function EditingTodo({ todo: todoProp, updateTodo }) {
  const [todo, setTodo] = useState(todoProp);

  const handleTitleChange = (e) => {
    setTodo({
      ...todo,
      title: e.target.value,
    });
  };

  const handleDescriptionChange = (e) => {
    setTodo({
      ...todo,
      description: e.target.value,
    });
  };

  return (
    <>
      <div className="flex justify-between items-center gap-2">
        <input
          type="text"
          className="border shadow rounded w-full p-1"
          onChange={handleTitleChange}
          defaultValue={todo.title}
        />
        <button
          onClick={() => updateTodo(todo)}
          className="p-2 rounded bg-green-500 hover:bg-green-400 active:bg-green-500 active:scale-95 text-white transition"
        >
          Save
        </button>
      </div>
      <textarea
        className="border shadow rounded w-full p-1"
        defaultValue={todo.description}
        onChange={handleDescriptionChange}
      />
    </>
  );
}

export default EditingTodo;
