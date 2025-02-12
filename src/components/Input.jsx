export default function Input({ textarea, label, ...props }) {
  const inputClasses =
    "rounded-[4px] border-2 border-stone-800 bg-stone-700 px-5 py-3 text-[1rem] focus:border-stone-500 focus:outline-none";
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[0.8rem] font-semibold text-gray-300 uppercase">
        {label}
      </label>
      {textarea ? (
        <textarea className={inputClasses} {...props} />
      ) : (
        <input className={inputClasses} {...props} />
      )}
    </div>
  );
}
