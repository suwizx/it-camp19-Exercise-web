import { Link } from "react-router-dom";

function Todos({ todos, deleteTodo }) {
  if (todos.length === 0) {
    return <div className="text-center text-gray-500">No todos found</div>;
  }

  return (
    <>
      <div className="space-y-2">
        {todos.map((todo) => (
          <div key={todo.id} className="flex cursor-pointer hover:bg-slate-50 justify-between items-center border shadow rounded p-2">
            <Link className="flex w-full items-center gap-2" to={`/${todo.id}`}>
              <span className="w-full">{todo.title}</span>
            </Link>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="p-2 rounded bg-red-500 hover:bg-red-400 active:bg-red-500 active:scale-95 text-white transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Todos;
