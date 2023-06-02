function TodoHeader({ todo, editTodo }) {
  return (
    <>
      <div className="flex justify-between items-center gap-2">
        <h2 className="text-2xl">{todo.title}</h2>
        <button
          onClick={editTodo}
          className="p-2 rounded bg-green-500 hover:bg-green-400 active:bg-green-500 active:scale-95 text-white transition"
        >
          Edit
        </button>
      </div>
      <p>{todo.description}</p>
    </>
  );
}

export default TodoHeader;
