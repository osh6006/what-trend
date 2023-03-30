import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { Loading } from "../common/Loading";

export const ShoppingSearch = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const handlechange = (e: React.FormEvent<HTMLInputElement>): void => {
    setSearch(e.currentTarget.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (search !== "") {
      // search start!
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative mt-2 flex w-full items-center justify-center pt-2 text-xl text-gray-400"
    >
      <div className="relative w-1/2">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <HiOutlineSearch />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full rounded-lg border-2 border-gray-300 p-4 pl-10 text-base text-gray-900 focus:border-gray-500 focus:ring-gray-500"
          placeholder="Search new Something"
          onChange={handlechange}
          required
        />
        <button
          type="submit"
          className="absolute right-3.5 bottom-3.5  rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-secondaryBg focus:outline-none focus:ring-4 focus:ring-gray-600"
        >
          Search
        </button>
      </div>
    </form>
  );
};
