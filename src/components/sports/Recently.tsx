import React from "react";

interface RecentlyProps {
  kind: "table" | "card";
  word: string;
}

export const Recently = ({ word, kind }: RecentlyProps) => {
  return (
    <>
      {word === "W" && kind === "card" && (
        <div className="flex-1 rounded-sm bg-green-500 p-[1px]">W</div>
      )}
      {word === "L" && kind === "card" && (
        <div className=" rounded-sm bg-red-500 px-[6px] py-[1px]">L</div>
      )}
      {word === "D" && kind === "card" && (
        <div className="rounded-sm bg-blue-500 py-[1px] px-[4px]">D</div>
      )}
      {word === "W" && kind === "table" && (
        <div className=" rounded-sm bg-green-500 p-[1px]">W</div>
      )}
      {word === "L" && kind === "table" && (
        <div className=" rounded-sm bg-red-500 px-[6px] py-[1px]">L</div>
      )}
      {word === "D" && kind === "table" && (
        <div className="rounded-sm bg-blue-500 py-[1px] px-[4px]">D</div>
      )}
    </>
  );
};
