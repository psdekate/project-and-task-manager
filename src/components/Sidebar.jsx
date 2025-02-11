export default function Sidebar() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-bold">Your Projects</h2>
      <div>
        <button className="cursor-pointer rounded-[4px] bg-stone-600 px-5 py-3 text-white hover:bg-stone-800">
          + Add project
        </button>
      </div>
    </div>
  );
}
