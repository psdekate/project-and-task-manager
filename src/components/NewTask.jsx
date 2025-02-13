import { useState } from "react";

export default function NewTask({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    setEnteredTask("");
    onAddTask(enteredTask);
  }

  return (
    <div className="flex items-center justify-between">
      <input
        type="text"
        onChange={handleChange}
        value={enteredTask}
        className="w-[40rem] rounded-[4px] border-2 border-stone-700 bg-stone-700 px-5 py-3 focus:border-stone-500 focus:outline-none"
      />
      <button
        onClick={handleClick}
        className="flex cursor-pointer items-center rounded-[4px] bg-blue-500 px-4 py-3 hover:bg-stone-700 focus:outline-none"
      >
        Add task
      </button>
    </div>
  );
}
