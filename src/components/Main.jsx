import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/images/todo_icon.png";
import Todo from "./Todo";

const Main = () => {
  const inputRef = useRef();
  const [todos, setTodos] = useState(
    localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : []
  );

  const handleAdd = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    } else {
      const newTodo = {
        id: Date.now(),
        text: inputText,
        isComplete: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      inputRef.current.value = "";
    }
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggleFnc = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="place-self-center min-h-[540px] bg-zinc-100 w-[90%] max-w-md rounded-xl p-7">
      <div className="title flex items-center gap-2 select-none cursor-default mt-5">
        <img className="w-8" src={logo} alt="" />
        <h1 className="heading text-3xl translate-y-1 tracking-tight">
          To-Do List
        </h1>
      </div>
      <div className="inputBox flex items-center my-7 bg-gray-300 rounded-full select-none">
        <input
          ref={inputRef}
          className="outline-none bg-transparent flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600 "
          type="text"
          name=""
          id=""
          placeholder="Enter your task"
        />
        <button
          onClick={handleAdd}
          className="bg-orange-600 rounded-full h-14 w-28 text-lg font-medium text-zinc-100"
        >
          Add <span className="text-xl heading">+</span>
        </button>
      </div>
      <div className="todos">
        {todos.map((elem, i) => (
          <Todo
            key={i}
            title={elem.text}
            id={elem.id}
            isComplete={elem.isComplete}
            handleDelete={handleDelete}
            toggleFnc={toggleFnc}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
