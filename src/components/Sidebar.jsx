import Button from "../components/Button";

export default function Sidebar({ onProjectSelect, projects }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-semibold">Your Projects</h2>
      <div>
        <Button onClick={onProjectSelect}>+ Add project</Button>
      </div>
      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <div key={project.id}>
            <button className="w-full cursor-pointer rounded-[4px] bg-stone-500 px-6 py-5 text-left hover:bg-stone-800">
              {project.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
