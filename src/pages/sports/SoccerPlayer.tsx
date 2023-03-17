import { Link } from "react-router-dom";
import { SoccerLayout } from "../../components/sports/SoccerLayout";
import { useState } from "react";
import { SoccerLeagueSelect } from "../../components/sports/SoccerLeagueSelect";
import { SoccerPlayerRank } from "../../api/sports/soccerPlayer";
import { v4 as uuidv4 } from "uuid";
import { RankCard } from "../../components/sports/RankCard";
import useSoccerPlayer from "../../hooks/sports/useSoccerPlayer";

export default function SoccerPlayer() {
  const [selectedOption, setSelectedOption] =
    useState<string>("premirePlayerQuery");
  const player = useSoccerPlayer(selectedOption);
  console.log(player);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value !== "") {
      setSelectedOption(event.target.value);
    }
  };

  return (
    <SoccerLayout>
      <div className="text-center text-xl transition-all lg:mt-3 lg:text-left lg:text-xl">
        Are you looking for the best teams?{" "}
        <Link
          to={"/sports/soccer/team"}
          className="ml-3 block font-bold underline lg:inline"
        >
          click here
        </Link>
        <div>
          <SoccerLeagueSelect handleOptionChange={handleOptionChange} />
        </div>
        <div className="mt-12 flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:justify-between">
          {player?.data?.player.map(
            (data: SoccerPlayerRank, i: number) =>
              i <= 2 && (
                <>
                  <RankCard key={uuidv4()} rank={i + 1} playerInfo={data} />
                </>
              )
          )}
        </div>
      </div>
    </SoccerLayout>
  );
}
