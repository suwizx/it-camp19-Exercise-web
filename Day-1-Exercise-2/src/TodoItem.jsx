function TodoItem({ todo, index, deleteTodo, checkTodo }) {
  return (
    <div className="todo">
        <div className="todo-title">
          <input
            className="todo-checkbox"
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => checkTodo(e, index)}
          />
          <span className={todo.completed ? "checked" : ""}>{todo.title}</span>
        </div>
        <button onClick={() => deleteTodo(index)} className="button button-delete">
          Delete
        </button>
      </div>
  );
}

export default TodoItem;
