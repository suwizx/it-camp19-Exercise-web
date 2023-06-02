import { useParams } from "react-router-dom";
import { useState } from "react";
import EditingTodo from "./EditingTodo";
import TodoHeader from "./TodoHeader";

// สำหรับหน้านี้น้อง ๆ อาจจะไม่ต้องทำอะไรก็ได้ครับ แต่ถ้าหากมีเวลาเหลือ สามารถแก้ไขให้สามารถกด Edit title, description ได้ครับ 😜
function TodoInfo() {
  /*
    id ตรงนี้น้อง ๆ จะสามารถนำไปใช้ต่อได้ในการเรียนบทถัด ๆ ไป
    เราสามารถนำค่า id หรือ ค่าที่ส่งผ่านทาง URL parameter ไปใช้งานได้เป็นดั่งตัวแปรหนึ่ง
    เช่น อาจจะนำไปใช้ในการดึงข้อมูลจากฐานข้อมูลก็ได้ ✨
  */
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [todo, setTodo] = useState({
    title: "Todo title : todo number " + id,
    description: "Todo description",
  });

  // TodoItems เป็น Static mock data สำหรับทดสอบการ Loop แสดงผล ไม่ใช่ state ที่เปลี่ยนแปลงได้
  const todoItems = [
    {
      title: "Todo Title",
      completed: false,
    },
    {
      title: "Todo Title",
      completed: false,
    },
  ];

  return (
    <div className="w-full flex justify-center p-4">
      <div className="w-96 space-y-2">
        <h1 className="text-3xl">Todo App</h1>
        {isEditing ? (
          <EditingTodo todo={todo} updateTodo={() => setIsEditing(!isEditing)} />
        ) : (
          <TodoHeader todo={todo} editTodo={() => setIsEditing(!isEditing)} />
        )}
        <hr />
        <div className="flex w-ful gap-2">
          <input type="text" className="border shadow rounded w-full p-1" />
          <button className="p-2 rounded bg-green-500 hover:bg-green-400 active:bg-green-500 active:scale-95 text-white transition">
            Add
          </button>
        </div>

        <hr />

        {todoItems.length === 0 && <div className="text-center text-gray-500">No todo found</div>}

        <div className="space-y-2">
          {todoItems.map((todo, index) => (
            <div key={index} className="flex justify-between items-center border shadow rounded p-2">
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
      </div>
    </div>
  );
}

export default TodoInfo;
