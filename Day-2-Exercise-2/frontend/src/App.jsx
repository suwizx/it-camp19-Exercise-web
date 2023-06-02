import { useEffect, useState } from "react";
import Todos from "./Todos.jsx";
import pb from "./connector/pocketbase.js";
import { Link } from "react-router-dom"

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState(0)
  const [description, setDescription] = useState("");

  const getTodos = async () => {
    pb.collection('todo').getFullList()
      .then((datas) => {
        setTodos(datas)
      })
  }

  useEffect(() => {
    getTodos()
  }, [])

  useEffect(() => {
    pb.collection('todo').subscribe('*', function (e) {

      if (e.action === "create") {
        setTodos(prevTodos => [...prevTodos, e.record])
      }

      if (e.action === "delete") {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== e.record.id));
      }
    })

    return () => {
      pb.collection('todo').unsubscribe();
    }
  }, [])


  useEffect(() => {
    console.log(number);
  }, [number])


  const requeryTodos = () => {

  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // ลบรายการ todo
  const deleteTodo = async (id) => {
    await pb.collection("todo").delete(id)
  }

  // เพิ่มรายการ todo
  const addTodo = async () => {
    await pb.collection('todo').create({
      "title": title,
      "description": description
    })

  };

  // ดึงข้อมูล todo ทั้งหมด จาก Pocketbase
  useEffect(() => {
    const getTodos = async () => {
      console.log("get todos");
    };
    getTodos();
  }, []);

  return (
    <div className="w-full flex justify-center p-4">
      <div className="w-96 space-y-2">
        <Link to="/" className="text-3xl block">Todo App</Link>
        <label>
          Title
          <input
            className="border shadow rounded w-full p-1"
            type="text"
            placeholder="Hit the sack."
            onChange={handleTitleChange}
            value={title}
          />
        </label>
        <label>
          Description
          <textarea
            className="border shadow rounded w-full p-1"
            type="text"
            placeholder="I just want to sleep."
            onChange={handleDescriptionChange}
            value={description}
          />
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

        <Todos todos={todos} deleteTodo={deleteTodo}></Todos>
      </div>
    </div>
  );
}

export default App;
