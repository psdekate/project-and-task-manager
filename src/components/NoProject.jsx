import work from "../assets/work.svg";
import Button from "../components/Button";

export default function NoProject({ onProjectSelect }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <img src={work} alt="" className="w-[30rem]" />
      <div className="flex flex-col items-center gap-1">
        <h2 className="text-3xl font-semibold">
          You have not created any projects yet
        </h2>
        <p className="text-gray-300">
          Click on the button below to create your first project
        </p>
      </div>
      <Button onClick={onProjectSelect}>Add Project</Button>
    </div>
  );
}
