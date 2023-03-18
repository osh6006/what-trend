import { Link } from "react-router-dom";
import { SoccerLayout } from "../../components/sports/SoccerLayout";
import { useState } from "react";
import { SoccerLeagueSelect } from "../../components/sports/SoccerLeagueSelect";
import { SoccerPlayerRank } from "../../api/sports/soccerPlayer";
import { v4 as uuidv4 } from "uuid";
import { RankCard } from "../../components/sports/RankCard";
import useSoccerPlayer from "../../hooks/sports/useSoccerPlayer";
import { RankTable } from "../../components/sports/RankTable";
import { RankMobile } from "../../components/sports/RankMobile";
import React, { ChangeEvent } from "react";
import { Loading } from "../../components/common/Loading";

export default function SoccerPlayer() {
  const [selectedOption, setSelectedOption] = useState<string>("all");
  const [isChecked, setIsChecked] = useState(false);
  const player = useSoccerPlayer(selectedOption);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value !== "") {
      setSelectedOption(event.target.value);
    }
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      {player?.isLoading && <Loading />}
      {player?.isSuccess && (
        <SoccerLayout>
          <div className="text-center text-xl transition-all lg:mt-3 lg:text-left lg:text-xl">
            Are you looking for the best teams?{" "}
            <Link
              to={"/sports/soccer/team"}
              className="ml-3 block font-bold underline lg:inline"
            >
              click here
            </Link>
            <div className="mt-3 flex flex-col items-center gap-2 lg:flex-row">
              <SoccerLeagueSelect handleOptionChange={handleOptionChange} />
              <div className="flex items-center rounded border-2 border-gray-200 px-2 py-3 dark:border-gray-700">
                <input
                  id="test"
                  type="checkbox"
                  value=""
                  name="test"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="h-6 w-6 rounded border-gray-300 bg-gray-100 text-black"
                />
                <label
                  htmlFor="test"
                  className="ml-2 w-full text-lg font-medium text-gray-900 dark:text-gray-300"
                >
                  Goalkeeper
                </label>
              </div>
            </div>
            <div className="mt-12 flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:justify-between">
              {!isChecked &&
                player?.data?.player.map(
                  (data: SoccerPlayerRank, i: number) =>
                    i <= 2 && (
                      <RankCard key={uuidv4()} rank={i + 1} playerInfo={data} />
                    )
                )}
              {isChecked &&
                player?.data?.goalkeeper.map(
                  (data: SoccerPlayerRank, i: number) =>
                    i <= 2 && (
                      <RankCard
                        key={uuidv4()}
                        rank={i + 1}
                        playerInfo={data}
                        goalkeeper={isChecked}
                      />
                    )
                )}
            </div>
          </div>
          <RankTable
            playerInfo={
              !isChecked ? player?.data?.player : player?.data?.goalkeeper
            }
            goalkeeper={isChecked}
          />
          <RankMobile
            playerInfo={
              !isChecked ? player?.data?.player : player?.data?.goalkeeper
            }
            goalkeeper={isChecked}
          />
        </SoccerLayout>
      )}
    </>
  );
}
