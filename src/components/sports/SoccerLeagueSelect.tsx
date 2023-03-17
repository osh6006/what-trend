import React, { ChangeEvent, FC } from "react";

interface SelectProps {
  handleOptionChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const SoccerLeagueSelect: FC<SelectProps> = ({ handleOptionChange }) => {
  return (
    <>
      <select
        onChange={handleOptionChange}
        className="mx-auto mt-3 block rounded-md border border-gray-300 bg-gray-50 px-2 py-3 text-lg focus:border-gray-500 focus:outline-none focus:ring-gray-500 lg:mx-0  "
      >
        <option value="all">All</option>
        <option value="premier">PREMIER LEAGUE</option>
        <option value="primera">PRIMERA LEAGUE</option>
        <option value="seriea">SERIE A LEAGUE</option>
        <option value="bundesliga">BUNDESLIGA LEAGUE</option>
        <option value="ligue1">LIGUE 1 LEAGUE</option>
      </select>
    </>
  );
};
