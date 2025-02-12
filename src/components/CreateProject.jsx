import Input from "./Input";

export default function CreateProject() {
  return (
    <>
      <div className="mx-auto flex w-[50rem] flex-col justify-center gap-6">
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
        <div className="flex justify-end gap-6">
          <button className="cursor-pointer rounded-[4px]">Cancel</button>
          <button className="cursor-pointer rounded-[4px] bg-stone-600 px-5 py-3 hover:bg-stone-700">
            Save
          </button>
        </div>
      </div>
    </>
  );
}
