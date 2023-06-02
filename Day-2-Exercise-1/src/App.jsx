import { useEffect, useState } from "react";
import Todos from "./Todos.jsx";

function App() {
  // เมื่อโหลดเว็บไซต์มา จะทำการ Initialize state โดยการไปดึงข้อมูลจากที่บันทึกใน localStorage ทำให้เรามีข้อมูลตั้งต้น ✨
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // จัดการการเปลี่ยนแปลงของ title
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // เปลี่ยนสถานะ completed ของ todo เป็นสถานะตรงข้าม
  const checkTodo = (e, index) => {
    const newTodos = [...todos];
    newTodos[index].completed = e.target.checked;
    setTodos(newTodos);
  };

  // ลบรายการ todo
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // เพิ่มรายการ todo
  const addTodo = () => {
    const newTodo = {
      title,
      description,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  // เมื่อ Render เสร็จครั้งแรก หรือ มีการเปลี่ยนแปลงของ todos ให้ทำการบันทึกค่า todos ลงใน localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="w-full flex justify-center p-4">
      <div className="w-96 space-y-2">
        <h1 className="text-3xl">Todo App</h1>
        <label>
          Title
          <input
            className="border shadow rounded w-full p-1"
            type="text"
            placeholder="Hit the sack."
            onChange={handleTitleChange}
            value={title}
          />
          คำอธิบาย
          <textarea
            placeholder="Hewkhawwwww"
            value={description}
            className="bg-gray-50 border shadow rounded w-full p-1"
            rows={6}
            onChange={handleDescriptionChange}
          ></textarea>
        </label>
        <div className="flex justify-end">
          <button
            onClick={addTodo}
            className="p-2 rounded bg-green-500 hover:bg-green-400 active:bg-green-500 active:scale-95 text-white transition"
          >
            Add
          </button>
        </div>

        <hr />

        <Todos todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo}></Todos>
      </div>
    </div>
  );
}

export default App;
