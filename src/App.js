import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Todo from "./Todo";
import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc
} from "firebase/firestore";

const style = {
  bg: "h-screen w-screen p-4 bg-gradient-to-r from-blue-500 to-blue-200",
  container:
    "bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4",
  heading: "text-3xl font-bold text-center text-gray-800 p-2",
  form: "flex justify-between",
  input: " border p-2 w-full text-xl",
  button: " border p-4 ml-2 bg-red-200",
  count: "text-center text-lg",
};

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //create todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("please");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput('')
  };
  //read todo
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });

      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  //Update todo
  const toggleComplete = async (todo) => {
    console.log("HIII", todo.id);
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };
  //Delete todo
  const deleteTodo = async (id)=>{
    await deleteDoc(doc(db,'todos',id))
  }

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h1 className={style.heading}>Todo List</h1>

        <form className={style.form} onSubmit={createTodo}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            type="text"
            placeholder="Add Todo"
          ></input>
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
            />
          ))}
        </ul>
        {todos.length < 1 ? null : (
          <p className={style.count}>{`you have ${todos.length} todo(s)`}</p>
        )}
      </div>
    </div>
  );
}

export default App;
