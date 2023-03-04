import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineSearch } from "react-icons/hi";

export const Search = () => {
  return (
    <div className="relative mx-auto pt-2 text-xl text-gray-400">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search new place"
        className="rounded-xl px-9"
      ></input>
      <HiOutlineSearch className="absolute left-1 top-3 mt-5 h-5 text-4xl" />
    </div>
  );
};
