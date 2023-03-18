import { SoccerPlayerRank } from "../../api/sports/soccerPlayer";
import { teamRank } from "../../api/sports/soccerTeam";
import { Recently } from "./Recently";

interface RankCardProps {
  teamInfo?: teamRank;
  playerInfo?: SoccerPlayerRank;
  rank?: number;
  goalkeeper?: boolean;
}

export const RankCard = ({
  teamInfo,
  playerInfo,
  rank,
  goalkeeper,
}: RankCardProps) => {
  return (
    <div className="flex min-w-[375px] max-w-sm flex-col items-center rounded-md px-10 py-2 text-xl shadow-xl">
      {teamInfo?.img && (
        <img
          src={
            teamInfo?.img &&
            `https://secure.cache.images.core.optasports.com/soccer/teams/75x75/uuid_${teamInfo?.img}.png`
          }
          alt="teamlogo"
          className="-mt-12 aspect-square w-32 rounded-full border-2 p-2"
        />
      )}
      {playerInfo?.img && (
        <img
          src={playerInfo?.img}
          alt="teamlogo"
          className="-mt-12 aspect-square w-32 rounded-full border-2 p-2"
        />
      )}
      <h1 className="mt-2 whitespace-nowrap text-2xl font-bold">
        {teamInfo?.name}
        {playerInfo?.name}
      </h1>
      {playerInfo?.value && (
        <h3 className="mt-2 whitespace-nowrap text-lg font-bold">
          {playerInfo?.value}M&#8364;
        </h3>
      )}
      <div className="flex w-full items-center justify-between border-b-2 py-4 font-bold">
        <div className="flex flex-col items-center justify-center capitalize">
          <div>Rank</div>
          {rank && rank === 1 && (
            <img src="/sports/gold.png" className="h-10 w-10" alt="1st" />
          )}
          {rank && rank === 2 && (
            <img src="/sports/silver.png" className="h-10 w-10" alt="1st" />
          )}
          {rank && rank === 3 && (
            <img src="/sports/bronze.png" className="h-10 w-10" alt="1st" />
          )}
        </div>
        <div className="flex flex-col items-center justify-center gap-3 capitalize">
          <div>Matches</div>
          <div>
            {teamInfo?.play}
            {playerInfo?.allPlay}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 capitalize">
          <div>{teamInfo ? "Points" : !goalkeeper ? "Goals" : "Save"}</div>
          <div>
            {teamInfo?.point}
            {!goalkeeper ? playerInfo?.goal : playerInfo?.cleanSheets}
          </div>
        </div>
      </div>
      {teamInfo && (
        <>
          <div className="mt-3 flex w-full flex-col gap-3 py-3 text-base font-bold text-gray-600">
            <div className="grid grid-cols-3 ">
              <div className="uppercase">win</div>
              <div className="text-center">-</div>
              <div className="text-center">{teamInfo?.win}</div>
            </div>
            <div className="grid grid-cols-3">
              <div className="uppercase">lose</div>
              <div className="text-center">-</div>
              <div className="text-center">{teamInfo?.lose}</div>
            </div>
            <div className="grid grid-cols-3">
              <div className="uppercase">draw</div>
              <div className="text-center">-</div>
              <div className="text-center">{teamInfo?.draw}</div>
            </div>
            <div className="grid grid-cols-3">
              <div className="uppercase">GD</div>
              <div className="text-center">-</div>
              <div className="text-center">{teamInfo?.gd}</div>
            </div>
            <div className="grid grid-cols-3">
              <div className="uppercase">Recently</div>
              <div className="text-center">-</div>
              <div className="flex items-center justify-center gap-1 text-center text-sm   text-white">
                {teamInfo?.form?.split("").map((data: string, i: number) => (
                  <Recently kind="card" word={data} key={i} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      {playerInfo && (
        <>
          <div className="mt-3 flex w-full flex-col gap-3 py-3 text-base font-bold text-gray-600">
            <div className="grid grid-cols-3 ">
              <div className="uppercase">{!goalkeeper ? "goal" : "save"}</div>
              <div className="text-center">-</div>
              <div className="text-center">
                {!goalkeeper ? playerInfo?.goal : playerInfo?.save}
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="uppercase">
                {!goalkeeper ? "assist" : "cleanSheets"}
              </div>
              <div className="text-center">-</div>
              <div className="text-center">
                {!goalkeeper ? playerInfo?.assist : playerInfo?.cleanSheets}
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="uppercase">coef</div>
              <div className="text-center">-</div>
              <div className="text-center">{playerInfo?.coef}</div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center justify-center">
                <div className="overflow-hidden rounded-full border-2 border-gray-500 p-1 text-xs">
                  <img
                    src={playerInfo?.teamImg}
                    alt="team"
                    className="h-8 w-8"
                  />
                </div>
                <div className="overflow-ellipsis whitespace-nowrap">
                  {playerInfo?.team?.split(" ")[0]}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="overflow-hidden rounded-full border-2 border-gray-500 p-1 text-xs">
                  <img
                    src={playerInfo?.countryImg}
                    alt="team"
                    className="h-8 w-8"
                  />
                </div>
                <div className="overflow-ellipsis">
                  {playerInfo?.country?.split(" ")[0]}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border-2 border-gray-500 bg-black p-1 text-white">
                  {playerInfo?.shirtnum}
                </div>
                <div className="overflow-ellipsis">Shirts</div>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="flex flex-col items-center justify-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border-2 border-gray-500 bg-black p-1 text-white">
                  {playerInfo?.height}
                </div>
                <div className="overflow-ellipsis">Height</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border-2 border-gray-500 bg-black p-1 text-white">
                  {playerInfo?.weight}
                </div>
                <div className="overflow-ellipsis">Weight</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border-2 border-gray-500 bg-black p-1 text-white">
                  {playerInfo?.elo}
                </div>
                <div className="overflow-ellipsis">ELO</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
