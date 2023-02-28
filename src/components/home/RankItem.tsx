import React from "react";
import { Interface } from "readline";

interface RankItemProps {
  title: string;
  rank: string;
  point: string;
}

export const RankItem = ({ title, rank, point }: RankItemProps) => {
  return (
    <li className="flex w-full gap-5 px-5 py-3">
      <div>{rank}</div>
      <div className="flex-1 text-center">{title}</div>
      <div>{point}</div>
    </li>
  );
};
