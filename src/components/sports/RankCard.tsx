import React from "react";

export const RankCard = () => {
  return (
    <div className="flex max-w-sm flex-col items-center rounded-md px-10 py-2 text-xl shadow-xl">
      <div className=" -mt-12 aspect-square h-28 w-28 rounded-full bg-slate-800 "></div>
      <h1 className="mt-2 text-2xl font-bold">Virat Khoil</h1>
      <div className="flex w-full items-center justify-between border-b-2 py-4 font-bold">
        <div className="flex flex-col items-center justify-center capitalize">
          <div>Rank</div>
          <img className="" src="" alt=""></img>
        </div>
        <div className="flex flex-col items-center justify-center capitalize">
          <div>Matches</div>
          <div>123</div>
        </div>
        <div className="flex flex-col items-center justify-center capitalize">
          <div>Points</div>
          <div>95</div>
        </div>
      </div>
      <div className="mt-3 flex w-full flex-col gap-3 py-3 text-base font-bold text-gray-600">
        <div className="grid grid-cols-3 ">
          <div className="uppercase">win</div>
          <div className="text-center">-</div>
          <div className="text-center">112</div>
        </div>
        <div className="grid grid-cols-3">
          <div className="uppercase">lose</div>
          <div className="text-center">-</div>
          <div className="text-center">132</div>
        </div>
        <div className="grid grid-cols-3">
          <div className="uppercase">draw</div>
          <div className="text-center">-</div>
          <div className="text-center">3</div>
        </div>
        <div className="grid grid-cols-3">
          <div className="uppercase">GD</div>
          <div className="text-center">-</div>
          <div className="text-center">42</div>
        </div>
        <div className="grid grid-cols-3">
          <div className="uppercase">Recently</div>
          <div className="text-center">-</div>
          <div className="flex items-center justify-center gap-1 text-center text-sm   text-white">
            <div className="flex-1 rounded-sm bg-green-500 p-[1px]">W</div>
            <div className="flex-1 rounded-sm bg-green-500 p-[1px]">W</div>
            <div className="flex-1 rounded-sm bg-red-500 px-[6px] py-[1px]">
              L
            </div>
            <div className="flex-1 rounded-sm bg-blue-500 py-[1px] px-[4px]">
              D
            </div>
            <div className="flex-1 rounded-sm bg-green-500 p-[1px]">W</div>
          </div>
        </div>
      </div>
    </div>
  );
};
