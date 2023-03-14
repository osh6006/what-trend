import { Link } from "react-router-dom";
import { RankCard } from "../../components/sports/RankCard";
import { RankTable } from "../../components/sports/RankTable";
import { SoccerLayout } from "../../components/sports/SoccerLayout";
import useSoccer from "../../hooks/sports/useSoccer";
import { v4 as uuidv4 } from "uuid";
import { teamRank } from "../../api/sports/soccer";

export default function SoccerTeam() {
  const { soccerTeamQuery } = useSoccer();
  const top3 = soccerTeamQuery?.data?.top3;
  const rest = soccerTeamQuery?.data?.rest;

  console.log(soccerTeamQuery);

  return (
    <SoccerLayout>
      <div className="mt-3 text-xl">
        Are you looking for the best players?{" "}
        <Link to={"/sports/soccer/player"} className="ml-3 font-bold underline">
          click here
        </Link>
      </div>
      <div className="mt-12 flex items-center justify-between gap-10">
        {top3?.map((data: teamRank, i: number) => (
          <RankCard key={uuidv4()} teamInfo={data} />
        ))}
      </div>
      <RankTable teamInfo={rest && rest} />
    </SoccerLayout>
  );
}
