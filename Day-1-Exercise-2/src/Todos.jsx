import TodoItem from "./TodoItem";

function Todos({ todos, deleteTodo, checkTodo }) {
  // คำใบ้ก็คือ เราใช้ todos.map(todo => ...อะไรต่ออน้า)
  return (
    <div className="todos">
    {/* todos.map เป็นการ Loop ค่ามาแสดงผลโดยนำค่าในรายการ todos แต่ละรายการมาแสดง ✨ */}
    {todos.map((todo, index) => (
      <TodoItem key={index} todo={todo} index={index} deleteTodo={deleteTodo} checkTodo={checkTodo} />
    ))}
  </div>
  );
}

export default Todos;
