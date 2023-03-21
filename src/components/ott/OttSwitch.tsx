import { useOttContext } from "../../context/OttContext";

export default function OttSwitch() {
  const { isMovie, toggleOttSwitch } = useOttContext();
  return (
    <div>
      <div className="relative flex h-10 items-center rounded-full p-1 shadow">
        <div className="flex w-full justify-center">
          <button>Drama</button>
        </div>
        <div className="flex w-full justify-center">
          <button>Series</button>
        </div>
        <span className="elSwitch absolute top-[4px] left-1 flex h-8 w-1/2 items-center justify-center rounded-full bg-indigo-600 text-white shadow transition-all ">
          Text
        </span>
      </div>
    </div>
  );
}
