import React from "react";
import { useNavigate } from "react-router-dom";
import useHumor from "../../hooks/useHumor";
import { Button } from "../Button";

export const HumorRank = () => {
  const nav = useNavigate();
  const handleClick = (e: React.MouseEvent): void => {
    nav("/humor");
  };
  const { homeHumorQuery } = useHumor();

  return (
    <>
      <div className="mt-10 flex w-full items-center justify-between">
        <div className="text-xl font-medium">Humor Trends</div>
        <Button title="more view" onClick={handleClick} />
      </div>
      <div className="mt-5 space-y-3">
        {homeHumorQuery?.data?.map((el: any, i: number) => (
          <div className="flex w-full justify-between rounded-md border p-5 text-lg">
            <p>{el.rank}</p>
            <p>{el.title}</p>
            <p>{el.visitor}</p>
          </div>
        ))}
      </div>
    </>
  );
};
