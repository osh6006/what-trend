import { teamRank } from "../../api/sports/soccerTeam";
import { Recently } from "./Recently";

interface RankTableProps {
  teamInfo?: teamRank[];
}

const th = "py-4 px-6 sticky top-0 bg-gray-200";
const td = "whitespace-nowrap py-3 px-6 ";

export const RankTable = ({ teamInfo }: RankTableProps) => {
  return (
    <div className="mt-8 hidden overflow-auto rounded-md lg:block ">
      <table className="w-full table-auto text-center font-bold">
        <thead>
          <tr className="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
            <th className={th}>Rank</th>
            <th className={th}>name</th>
            <th className={th}>Matches</th>
            <th className={th}>Win</th>
            <th className={th}>Draw</th>
            <th className={th}>Lose</th>
            <th className={th}>GD</th>
            <th className={th}>Points</th>
            <th className={th}>Recently</th>
          </tr>
        </thead>
        <tbody>
          {teamInfo?.map((el: teamRank, i: number) => (
            <tr key={i} className="border-b border-gray-200 hover:bg-gray-100">
              <td className={td}>{el.rank}</td>
              <td className={td}>{el.name}</td>
              <td className={td}>{el.play}</td>
              <td className={td}>{el.win}</td>
              <td className={td}>{el.draw}</td>
              <td className={td}>{el.lose}</td>
              <td className={td}>{el.gd}</td>
              <td className={td}>{el.point}</td>
              <td className="flex items-center justify-center gap-2 py-3 px-6 text-white">
                {el.form.split("").map((data: string, idx: number) => (
                  <Recently kind="table" word={data} key={idx} />
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
