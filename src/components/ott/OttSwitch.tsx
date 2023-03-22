import { useOttContext } from "../../context/OttContext";

const common =
  "absolute top-[2px] flex h-8 w-1/2 items-center justify-center rounded-md bg-black text-white shadow transition-all whitespace-nowrap";
const select = `${common} left-1`;
const notSelect = `${common} left-[80px]`;

export default function OttSwitch() {
  const { isMovie, toggleOttSwitch } = useOttContext();
  return (
    <div
      className="relative flex h-10 cursor-pointer items-center gap-5 overflow-hidden rounded-md border-2 bg-transparent py-2 px-3"
      onClick={toggleOttSwitch}
    >
      <div className="flex w-full justify-center">
        <button>Movie</button>
      </div>
      <div className="flex w-full justify-center">
        <button>Series</button>
      </div>
      {isMovie ? (
        <span className={select}>Movie</span>
      ) : (
        <span className={notSelect}>Series</span>
      )}
    </div>
  );
}
