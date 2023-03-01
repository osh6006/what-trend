import React from "react";
import { Item } from "./Item";

const MoreTrend = () => {
  return (
    <div className="mt-3">
      <h1 className="text-xl font-medium">More trends?</h1>
      <div className="mt-3 flex w-full items-center justify-around">
        <Item text="sns" icon="SNS" />
        <Item text="shopping" icon="shopping" color="text-green-400" />
        <Item text="sport" icon="sports" color="text-orange-400" />
        <Item text="music" icon="music" color="text-red-400" />
      </div>
    </div>
  );
};

export default MoreTrend;
