import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pb from "./connector/pocketbase.js";
import TodoHeader from "./TodoHeader.jsx";
import DisplayTodoItems from "./DisplayTodoItems.jsx";
import EditingTodoHeader from "./EditingTodo.jsx";

function TodoInfo() {
  const { id } = useParams(); // ดึงค่า ID จาก URL param

  const [todo, setTodo] = useState({}); // Todo ที่จะแสดง
  const [isEditing, setIsEditing] = useState(false); // กำลัง Edit อยู่หรือไม่
  const [title, setTitle] = useState(""); // ชื่อ Todo ที่จะเพิ่มเข้าภายในรายการย่อย

  const getTodo = async () => {
    try {
       // ทำการ Fetch Todo ที่มี ID ตามที่ระบุ
      const fetchedTodo = await pb.collection("todo").getOne(id, {
        expand: "todoItem",
      });
      setTodo(fetchedTodo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Fetch รายการ todo เมื่อทำการ Render ครั้งแรก
    getTodo();
  }, []);

  useEffect(() => {
    // สังเกตการเปลี่ยนแปลงของ todo
    console.log(todo);
  }, [todo]);

  // แก้ไขชื่อหัวข้อของ todo
  const updateTodoHeader = async (todo) => {
    try {
      const updatedTodo = await pb.collection("todo").update(id, todo, {
        expand: "todoItem",
      });

      // ทำการแก้ไข State เพื่อให้แสดงผลใหม่
      setTodo(updatedTodo);
      setIsEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  // เพิ่ม todoItem ลงใน Collection todoItem ใน Pocketbase
  const addTodoItem = async () => {
    try {
      // ทำการสร้างรายการ todoItem ใหม่
      // ...
      // ทำการอัปเดตรายการ todo โดยการเพิ่มรายการ todoItem ที่สร้างใหม่ข้างต้นเข้าไปในรายการ todo
      setTitle("");
    } catch (error) {
      console.log(error);
    }
  };

  // ลบ todoItem ออกจาก Collection todoItem ใน Pocketbase
  const deleteTodoItem = async (todoItemId) => {
    try {
      // ทำการลบรายการ todoItem ออกจาก Colelction todoItem โดยลบ todoItem ที่มี id = todoItemId
      // ...
      // ทำการ Fetch todo ใหม่เพื่อให้แสดงผลใหม่
      // ...
    } catch (error) {
      console.log(error);
    }
  };

  // อัพเดท todoItem ใน Collection todoItem ใน Pocketbase
  const checkTodoItem = async (todoItemId) => {
    try {
      const toChangeTodoItem = todo.expand.todoItem.find((item) => item.id === todoItemId); // object ของ todoItem ที่จะเปลี่ยนแปลง
      const updatedTodoItem = await pb
        .collection("todoItem")
        .update(todoItemId, { ...toChangeTodoItem, completed: !toChangeTodoItem.completed });

      // ทำการ Fetch todo ใหม่เพื่อให้แสดงผลใหม่
      getTodo();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex justify-center p-4">
      <div className="w-96 space-y-2">
        <h1 className="text-3xl">Todo App</h1>
        {!isEditing ? (
          <TodoHeader todo={todo} editTodo={() => setIsEditing(!isEditing)} />
        ) : (
          <EditingTodoHeader todo={todo} updateTodoHeader={updateTodoHeader} />
        )}
        <hr />
        <div className="flex w-ful gap-2">
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            className="border shadow rounded w-full p-1"
          />
          <button
            onClick={addTodoItem}
            className="p-2 rounded bg-green-500 hover:bg-green-400 active:bg-green-500 active:scale-95 text-white transition"
          >
            Add
          </button>
        </div>
        <hr />
        <DisplayTodoItems
          todoItems={todo?.expand?.todoItem || []}
          deleteTodoItem={deleteTodoItem}
          checkTodoItem={checkTodoItem}
        />
      </div>
    </div>
  );
}

export default TodoInfo;
