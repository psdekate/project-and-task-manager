import NewTask from "./NewTask";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-medium">Tasks</h2>
        <NewTask onAddTask={onAddTask} />
      </div>
      {tasks.length === 0 && (
        <p className="text-stone-400">This project does not have any task</p>
      )}
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between border-b-1 border-stone-700 px-1 py-5"
            >
              <span>{task.text}</span>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="hover:text-red-400"
              >
                clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
