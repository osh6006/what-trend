import React from "react";
import { Item } from "../components/home/Item";

export default function Home() {
  return (
    <>
      <div className="mt-10 grid grid-cols-1 justify-items-center gap-10 rounded-3xl px-5 py-32 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
        <Item text="날씨" icon="weather" />
        <Item text="유머" icon="humor" color="text-yellow-500" />
        <Item text="OTT" icon="OTT" color="text-red-400" />
        <Item text="SNS" icon="SNS" color="text-violet-400" />
        <Item text="쇼핑" icon="shopping" color="text-pink-400" />
        <Item text="스포츠" icon="sports" color="text-orange-400" />
        <Item text="음악" icon="music" color="text-lime-400" />
      </div>
    </>
  );
}
