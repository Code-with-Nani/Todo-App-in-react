import React from "react";
import not_tick from "../assets/images/not_tick.png";
import tick from "../assets/images/tick.png";
import delete_icon from "../assets/images/delete.png";

const Todo = ({ title, id, isComplete, handleDelete, toggleFnc }) => {
  return (
    <div className="main flex items-center gap-2 select-none my-3">
      <div className="left flex flex-1 items-center gap-2 ">
        <img
          onClick={() => {
            toggleFnc(id);
          }}
          className="w-7 cursor-pointer"
          src={isComplete ? tick : not_tick}
          alt=""
        />
        <p
          className={`text-[17px] leading-none pl-2 translate-y-1 sm:translate-y-0 ${
            isComplete && "line-through"
          }`}
        >
          {title}{" "}
        </p>
      </div>
      <div className="right">
        <img
          onClick={() => {
            handleDelete(id);
          }}
          className="w-4 cursor-pointer"
          src={delete_icon}
          alt=""
        />
      </div>
    </div>
  );
};

export default Todo;
