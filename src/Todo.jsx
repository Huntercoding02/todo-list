import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const style = {
  li: "text-lg flex justify-between bg-slate-200 p-4 my-2 capitalize",
  liComplete: "text-lg flex justify-between bg-slate-400 p-4 my-2 capitalize",
  rows: "flex",
  text: "ml-2 cursor-pointer",
  textComplete: "ml-2 cursor-pointer line-through",
  button: "cursor-pointer flex items-center",
};

export default function Todo({ todo, toggleComplete,deleteTodo }) {
  console.log(todo);

  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.rows}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={todo.completed ? style.textComplete : style.text}
        >
          {todo.text}
        </p>
      </div>
      <button onClick={()=>deleteTodo(todo.id)}>{<FaRegTrashAlt />}</button>
    </li>
  );
}
