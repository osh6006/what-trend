import { useOttContext } from "../../context/OttContext";

const common =
  "absolute top-[2px] flex h-8 w-1/2 items-center justify-center rounded-md bg-black text-white shadow transition-all whitespace-nowrap";
const select = `${common} left-1 text-sm sm:text-base`;
const notSelect = `${common} left-[55px] sm:left-[68px] text-sm sm:text-base`;

export default function OttSwitch() {
  const { isMovie, toggleOttSwitch } = useOttContext();
  return (
    <div
      className="relative flex h-10 cursor-pointer items-center justify-around gap-4 overflow-hidden rounded-md border-2 bg-transparent px-3 sm:gap-5 sm:py-2 sm:px-3"
      onClick={toggleOttSwitch}
    >
      <div className="flex w-full justify-center ">
        <button className="text-sm sm:text-base">Movie</button>
      </div>
      <div className="flex w-full justify-center">
        <button className="text-sm sm:text-base">Series</button>
      </div>
      {isMovie ? (
        <span className={select}>Movie</span>
      ) : (
        <span className={notSelect}>Series</span>
      )}
    </div>
  );
}
