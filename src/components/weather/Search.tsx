import { HiOutlineSearch } from "react-icons/hi";
import { useState } from "react";
import useWeather from "../../hooks/useWeather";
import { useNavigate } from "react-router-dom";
import { Loading } from "../common/Loading";

export const Search = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const { searchLocation } = useWeather();
  const handlechange = (e: React.FormEvent<HTMLInputElement>): void => {
    setSearch(e.currentTarget.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (search !== "") {
      // search start!
      searchLocation.mutate(search, {
        onSuccess: (data: any) => {
          console.log(data[0].name);
          navigate(`/weather/${data[0]?.name}`, {
            state: { latitude: data[0]?.lat, longitude: data[0]?.lon },
          });
        },
      });
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="relative mx-auto flex items-center gap-2 pt-2 text-xl text-gray-400"
    >
      <input
        type="text"
        name="search"
        id="search"
        onChange={handlechange}
        placeholder="Search new place"
        className="rounded-xl px-9"
      ></input>
      <HiOutlineSearch className="absolute left-1 top-3 mt-5 h-5 text-4xl" />
      <button
        type="submit"
        className="relative flex h-full min-h-[50px] min-w-[50px] items-center justify-center rounded-lg bg-black transition-colors hover:bg-secondaryBg sm:px-3 sm:py-2 "
      >
        {searchLocation.isLoading && <Loading size="sm" />}
        {searchLocation.isLoading || (
          <>
            <div className="hidden sm:block">Search</div>
            <div className="sm:hidden">
              <HiOutlineSearch />
            </div>
          </>
        )}
      </button>
    </form>
  );
};
