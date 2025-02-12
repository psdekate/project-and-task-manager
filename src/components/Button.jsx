export default function Button({ children, ...props }) {
  return (
    <button
      className="cursor-pointer rounded-[4px] bg-stone-600 px-5 py-3 text-white hover:bg-stone-800"
      {...props}
    >
      {children}
    </button>
  );
}
