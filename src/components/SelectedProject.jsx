import Tasks from "./Tasks";

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    date: "numeric",
  });

  return (
    <div className="flex flex-col justify-center gap-6">
      <header className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-white">{project.title}</h1>
          <button
            onClick={onDelete}
            className="cursor-pointer rounded-[4px] bg-red-600 px-4 py-2 text-white"
          >
            delete
          </button>
        </div>
        <p className="text-[1.2rem] font-medium text-yellow-600">
          {formattedDate}
        </p>
        <p className="whitespace-pre-wrap text-stone-300">
          Description: <br />
          {project.desc}
        </p>
      </header>
      <Tasks onAddTask={onAddTask} onDeleteTask={onDeleteTask} tasks={tasks} />
    </div>
  );
}
