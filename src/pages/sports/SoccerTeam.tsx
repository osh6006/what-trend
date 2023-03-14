import { Link } from "react-router-dom";
import { RankCard } from "../../components/sports/RankCard";
import { RankTable } from "../../components/sports/RankTable";
import { SoccerLayout } from "../../components/sports/SoccerLayout";
import useSoccer from "../../hooks/sports/useSoccer";
import { v4 as uuidv4 } from "uuid";
import { teamRank } from "../../api/sports/soccer";
import { RankMobile } from "../../components/sports/RankMobile";

export default function SoccerTeam() {
  const { soccerTeamQuery } = useSoccer();
  const top3 = soccerTeamQuery?.data?.top3;
  const rest = soccerTeamQuery?.data?.rest;

  return (
    <SoccerLayout>
      <div className="text-center text-xl transition-all lg:mt-3 lg:text-left lg:text-xl">
        Are you looking for the best players?{" "}
        <Link
          to={"/sports/soccer/player"}
          className="ml-3 block font-bold underline lg:inline"
        >
          click here
        </Link>
      </div>
      <div className="mt-12 flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
        {top3?.map((data: teamRank, i: number) => (
          <RankCard key={uuidv4()} teamInfo={data} />
        ))}
      </div>
      <RankTable teamInfo={rest && rest} />
      <RankMobile teamInfo={rest && rest} />
    </SoccerLayout>
  );
}
