import "./App.css";
import CreateProject from "./components/CreateProject";
import NoProject from "./components/NoProject";
import Sidebar from "./components/Sidebar";

function App() {
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
            <Sidebar />
          </div>
          <div className="flex flex-col justify-center p-8">
            {/* <NoProject /> */}
            <CreateProject />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
