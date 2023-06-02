import { Link } from "react-router-dom"
function TodoItem({todo, index, deleteTodo, checkTodo}) {
  return (
    <>
      <Link to={"/"+index} className="flex items-center gap-2">
        <span className={todo.completed ? "line-through" : ""}>
          {todo.title}
        </span>
      </Link>
      <button
        onClick={() => deleteTodo(index)}
        className="p-2 rounded bg-red-500 hover:bg-red-400 active:bg-red-500 active:scale-95 text-white transition"
      >
        Delete
      </button>
    </>
  );
}

export default TodoItem;
