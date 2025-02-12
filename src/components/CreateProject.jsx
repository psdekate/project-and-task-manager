import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function CreateProject({ handleAddProject }) {
  const modal = useRef();
  const title = useRef();
  const desc = useRef();
  const dueDate = useRef();

  function handleSave() {
    const newTitle = title.current.value;
    const newDesc = desc.current.value;
    const newdueDate = dueDate.current.value;

    if (
      newTitle.trim() === "" ||
      newDesc.trim() === "" ||
      newdueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    handleAddProject({
      title: newTitle,
      desc: newDesc,
      dueDate: newdueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2>Invalid Input</h2>
        <p>Oops... you forgot to add in some value</p>
        <p>Make sure to provide a valid value</p>
      </Modal>
      <div className="flex w-[50rem] flex-col justify-center gap-6">
        <Input ref={title} label="Title" />
        <Input ref={desc} label="Description" textarea />
        <Input ref={dueDate} label="Due Date" type="date" />
        <div className="flex justify-end gap-6">
          <button className="cursor-pointer rounded-[4px]">Cancel</button>
          <button
            className="cursor-pointer rounded-[4px] bg-stone-600 px-5 py-3 hover:bg-stone-700"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}
