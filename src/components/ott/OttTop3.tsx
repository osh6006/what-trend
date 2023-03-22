import React from "react";

export const OttTop3 = () => {
  return (
    <div className="mt-12 flex w-full items-center justify-center gap-20">
      <div className="flex flex-col items-center justify-center">
        <div className="h-32 w-32 rounded-md bg-slate-600"></div>
        <h1 className="text-xl">title</h1>
        <p className="text-gray-500">444 points</p>
      </div>
      <div className="flex -translate-y-7 scale-110 flex-col items-center justify-center">
        <div className="h-32 w-32 rounded-md bg-slate-600"></div>
        <h1 className="text-xl">title</h1>
        <p className="text-gray-500">555 points</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="h-32 w-32 rounded-md bg-slate-600"></div>
        <h1 className="text-xl">title</h1>
        <p className="text-gray-500">123 points</p>
      </div>
    </div>
  );
};
