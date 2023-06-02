import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import TodoInfo from "./TodoInfo.jsx";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:id",
    element: <TodoInfo />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
