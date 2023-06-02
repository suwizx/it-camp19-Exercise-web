import { useState } from "react";
import "./index.css"
function App() {

  const [ title , setTitle ] = useState("")
  const [ todos , setTodos ] = useState([])

  // function สำหรับเพิ่ม todo เมื่อปุ่ม Add ถูกกด
  const addTodo = () => {
    const item = {
      title: title,
      completed: false
   }
    console.log(title)
   const items = [...todos,item]
   setTodos(items)
  }

  const titleChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <div className="container">
      <div className="app">
        <h1>Todo App</h1>
        <label>
          Title
          <input
          onChange={titleChange}
            className="textField"
            type="text"
            placeholder="Hit the sack."
            value={title}
          />
        </label>
        <div className="toolbar">
          <button onClick={addTodo} className="button button-add">
            Add
          </button>
        </div>
        <hr />

        {/* เมื่อ todos มีค่าเท่ากับ 0 ให้แสดงผลว่า No todos found */}  
        {todos.length === 0 ? (<h1>No todos found</h1>) : (
        <div>
          {todos.map((data,i) => 
          <div className="item" key={i}>
            <div style={{display:"flex",alignItems:"center"}}>
              <input className="checkbox" type="checkbox" />
              <h1>{data.title}</h1>
            </div>
            <button className="button-delete button">Delete</button>
          </div> 
          )}
        </div>
        )}
        {/* นำ todos มา loop โดยใช้ method map ที่เป็น built-in method มาแสดงผลตามรูป Exercise 1.3 ข้อ 4 */}
        
      </div>
    </div>
  );
}

export default App;
