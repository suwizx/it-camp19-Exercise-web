import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TodoInfo from "./TodoInfo.jsx"
import { RouterProvider , createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path:"/:id",
    element:<TodoInfo/>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={routes} />

);
