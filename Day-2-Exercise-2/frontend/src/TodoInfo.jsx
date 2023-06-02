import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pb from "./connector/pocketbase.js";
import TodoHeader from "./TodoHeader.jsx";
import DisplayTodoItems from "./DisplayTodoItems.jsx";
import EditingTodo from "./EditingTodo.jsx";

function TodoInfo() {
  const { id } = useParams(); // ดึงค่า ID จาก URL param

  const [todo, setTodo] = useState({
    title: "Todo Title",
    description: "Todo Description",
  }); // Todo ที่จะแสดง
  const [isEditing, setIsEditing] = useState(false); // กำลัง Edit อยู่หรือไม่
  const todoItems = [];

  const dataQueruy = () => {
    pb.collection("todo").getOne(id).then(
      (data) => {
        setTodo({
          title : data.title,
          description : data.description
        })
      }
    )
  }

  useEffect(()=>{
    dataQueruy()
    },[])

  // แก้ไข Todo
  const updateTodo = async (todo) => {
    pb.collection('todo').update(id, todo);
    dataQueruy()
    setIsEditing(!isEditing)
  };

  // ดึงข้อมูล Todo จาก Pocketbase โดยใช้ ID ที่ได้จาก URL param
  useEffect(() => {
    const getTodo = async () => {
      console.log("get todo", id);
    };
    getTodo();
  }, [id]);

  return (
    <div className="w-full flex justify-center p-4">
      <div className="w-96 space-y-2">
        <h1 className="text-3xl">Todo App</h1>
        {!isEditing ? (
          <TodoHeader todo={todo} editTodo={() => setIsEditing(!isEditing)} />
        ) : (
          <EditingTodo todo={todo} updateTodo={updateTodo} />
        )}
        <hr />
        <div className="flex w-ful gap-2">
          <input type="text" className="border shadow rounded w-full p-1" />
          <button className="p-2 rounded bg-green-500 hover:bg-green-400 active:bg-green-500 active:scale-95 text-white transition">
            Add
          </button>
        </div>
        <hr />
        <DisplayTodoItems todoItem={todoItems} />
      </div>
    </div>
  );
}

export default TodoInfo;
