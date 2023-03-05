export const SelectCity = () => {
  return (
    <div className="mt-10">
      <ul className="flex h-[160px] items-center justify-around">
        {[1, 2, 3].map((el: number) => (
          <li
            className="flex h-full w-10 basis-32 cursor-pointer flex-col items-center justify-center rounded-xl border bg-emerald-900 font-bold text-white transition-all hover:scale-110"
            key={el}
          >
            title
          </li>
        ))}
        <button className="flex h-full flex-col items-center justify-center rounded-xl border-2 px-6 py-5 text-gray-400 transition-colors hover:border-gray-700 hover:text-gray-700">
          <div className="text-3xl">+</div>
          <div>Add City</div>
        </button>
      </ul>
    </div>
  );
};
