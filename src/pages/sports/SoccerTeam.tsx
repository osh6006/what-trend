import { Link } from "react-router-dom";
import { RankCard } from "../../components/sports/RankCard";
import { RankTable } from "../../components/sports/RankTable";
import { SoccerLayout } from "../../components/sports/SoccerLayout";
import useSoccer from "../../hooks/sports/useSoccerTeam";
import { v4 as uuidv4 } from "uuid";
import { teamRank } from "../../api/sports/soccerTeam";
import { RankMobile } from "../../components/sports/RankMobile";
import { useState } from "react";
import { Loading } from "../../components/common/Loading";
import { SoccerLeagueSelect } from "../../components/sports/SoccerLeagueSelect";

export default function SoccerTeam() {
  const [selectedOption, setSelectedOption] = useState<string>("all");
  const team = useSoccer(selectedOption);
  const top3 = team?.data?.top3;
  const rest = team?.data?.rest;

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value !== "") {
      setSelectedOption(event.target.value);
    }
  };

  return (
    <>
      {team?.isLoading && <Loading />}
      {!team?.isLoading && (
        <SoccerLayout>
          <div className="text-center text-xl transition-all lg:mt-3 lg:text-left lg:text-xl">
            Are you looking for the best players?{" "}
            <Link
              to={"/sports/soccer/player"}
              className="ml-3 block font-bold underline lg:inline"
            >
              click here
            </Link>
            <div>
              <SoccerLeagueSelect handleOptionChange={handleOptionChange} />
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            {top3?.map((data: teamRank, i: number) => (
              <RankCard key={uuidv4()} rank={i + 1} teamInfo={data} />
            ))}
          </div>
          <RankTable teamInfo={rest && rest} />
          <RankMobile teamInfo={rest && rest} />
        </SoccerLayout>
      )}
    </>
  );
}
