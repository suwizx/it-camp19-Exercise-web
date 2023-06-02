function DisplayTodoItems({ todoItem }) {
  if (todoItem.length === 0) {
    return (
      <div className="text-center text-gray-500">No todo found</div>
    );
  }

  return (
    <>
      <div className="space-y-2">
        {todoItem.map((todo, index) => (
          <div
            key={index}
            className="flex justify-between items-center border shadow rounded p-2"
          >
            <div className="flex w-full gap-2">
              <input type="checkbox" className="w-6 h-6" />
              <span className="w-full">{todo.title}</span>
            </div>
            <button className="p-2 rounded bg-red-500 hover:bg-red-400 active:bg-red-500 active:scale-95 text-white transition">
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default DisplayTodoItems;
