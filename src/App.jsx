import "./App.css";
import CreateProject from "./components/CreateProject";
import NoProject from "./components/NoProject";
import SelectedProject from "./components/SelectedProject";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectProjectID: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectState((item) => {
      const taskID = Math.random();
      const newTask = {
        projectID: item.selectProjectID,
        text: text,
        id: taskID,
      };

      return {
        ...item,
        tasks: [...item.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((item) => {
      return {
        ...item,
        tasks: item.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleProjectSelect() {
    setProjectState((item) => {
      return {
        ...item,
        selectProjectID: null,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((item) => {
      return {
        ...item,
        selectProjectID: id,
      };
    });
  }

  function handleCancel() {
    setProjectState((item) => {
      return {
        ...item,
        selectProjectID: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((item) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...item,
        selectProjectID: undefined,
        projects: [...item.projects, newProject],
      };
    });
  }

  function handleDelete() {
    setProjectState((item) => {
      return {
        ...item,
        selectProjectID: undefined,
        projects: item.projects.filter(
          (project) => project.id !== item.selectProjectID,
        ),
      };
    });
  }

  console.log(projectState);

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectProjectID,
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDelete}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );

  if (projectState.selectProjectID === null) {
    content = (
      <CreateProject
        handleAddProject={handleAddProject}
        onCancel={handleCancel}
      />
    );
    // console.log("null, can create");
  } else if (projectState.selectProjectID === undefined) {
    content = <NoProject onProjectSelect={handleProjectSelect} />;
    // console.log("undefined, initial");
  }

  return (
    <>
      <div className="m-0 mx-auto box-border flex h-screen flex-col items-center justify-center gap-8 bg-[#242424] p-8 text-white">
        <div className="flex flex-col items-center gap-2 text-[1.2rem]">
          <h2 className="text-4xl font-semibold">Your daily project tracker</h2>
          <p className="text-gray-300">
            Have fun working and remember to follow the deadlines!
          </p>
        </div>
        <div className="grid h-full w-full grid-cols-[30%_1fr]">
          <div className="rounded-[6px] bg-stone-700 p-8">
            <Sidebar
              onProjectSelect={handleProjectSelect}
              projects={projectState.projects}
              onSelectProject={handleSelectProject}
              selectProjectID={projectState.selectProjectID}
            />
          </div>
          <div className="flex flex-col p-8">{content}</div>
        </div>
      </div>
    </>
  );
}

export default App;
