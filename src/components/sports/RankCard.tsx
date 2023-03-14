import { teamRank } from "../../api/sports/soccer";
import { Recently } from "./Recently";

interface RankCardProps {
  teamInfo: teamRank;
}

export const RankCard = ({ teamInfo }: RankCardProps) => {
  console.log(teamInfo);

  return (
    <div className="flex max-w-sm flex-col items-center rounded-md px-10 py-2 text-xl shadow-xl">
      <img
        src={
          teamInfo?.img
            ? `https://secure.cache.images.core.optasports.com/soccer/teams/75x75/uuid_${teamInfo?.img}.png`
            : ""
        }
        alt="teamlogo"
        className="-mt-12 aspect-square w-32 rounded-full border-2 p-2"
      ></img>
      <h1 className="mt-2 whitespace-nowrap text-2xl font-bold">
        {teamInfo.name}
      </h1>
      <div className="flex w-full items-center justify-between border-b-2 py-4 font-bold">
        <div className="flex flex-col items-center justify-center capitalize">
          <div>Rank</div>
          {+teamInfo?.rank === 1 && (
            <img src="/sports/gold.png" className="h-10 w-10" alt="1st" />
          )}
          {+teamInfo?.rank === 2 && (
            <img src="/sports/silver.png" className="h-10 w-10" alt="1st" />
          )}
          {+teamInfo?.rank === 3 && (
            <img src="/sports/bronze.png" className="h-10 w-10" alt="1st" />
          )}
        </div>
        <div className="flex flex-col items-center justify-center gap-3 capitalize">
          <div>Matches</div>
          <div>{teamInfo?.play}</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 capitalize">
          <div>Points</div>
          <div>{teamInfo.point}</div>
        </div>
      </div>
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
            <div className="flex-1 rounded-sm bg-green-500 p-[1px]">W</div>
            <div className="flex-1 rounded-sm bg-green-500 p-[1px]">W</div>
            <div className="flex-1 rounded-sm bg-red-500 px-[6px] py-[1px]">
              L
            </div>
            <div className="flex-1 rounded-sm bg-blue-500 py-[1px] px-[4px]">
              D
            </div>
            <div className="flex-1 rounded-sm bg-green-500 p-[1px]">W</div>
            {teamInfo?.form?.split(" ").map((data: string, i: number) => (
              <Recently kind="card" word={data} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
