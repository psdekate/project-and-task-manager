import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="rounded-sm p-4 shadow-sm backdrop:bg-stone-900/90"
    >
      {children}
      <form method="dialog">
        <button className="cursor-pointer rounded-sm bg-stone-700 px-4 py-2 text-white">
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("root"),
  );
});

export default Modal;
