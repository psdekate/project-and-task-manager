import Button from "../components/Button";

export default function Sidebar({
  onProjectSelect,
  projects,
  onSelectProject,
  selectProjectID,
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-semibold">Your Projects</h2>
      <div>
        <Button onClick={onProjectSelect}>+ Add project</Button>
      </div>
      <div className="flex flex-col gap-3">
        {projects.map((project) => {
          let cssClasses =
            "w-full cursor-pointer rounded-[4px] px-6 py-5 text-left hover:bg-stone-800";

          if (project.id === selectProjectID) {
            cssClasses += " bg-gray-900 text-white border-2 border-blue-500";
          } else {
            cssClasses += " bg-stone-600 text-stone-300";
          }

          return (
            <div key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
