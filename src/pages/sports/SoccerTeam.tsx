import React from "react";
import { Link } from "react-router-dom";
import { RankCard } from "../../components/sports/RankCard";
import { RankTable } from "../../components/sports/RankTable";
import { SoccerLayout } from "../../components/sports/SoccerLayout";
import useSoccer from "../../hooks/sports/useSoccer";

export default function SoccerTeam() {
  const { soccerTeamQuery } = useSoccer();
  return (
    <SoccerLayout>
      <div className="mt-3 text-xl">
        Are you looking for the best players?{" "}
        <Link to={"/sports/soccer/player"} className="ml-3 font-bold underline">
          click here
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-3 gap-10">
        <RankCard />
        <RankCard />
        <RankCard />
      </div>
      <RankTable />
    </SoccerLayout>
  );
}
