import { teamRank } from "../../api/sports/soccer";

interface RankTableProps {
  teamInfo?: teamRank[];
}
const th = "py-4 px-6";
const td = "whitespace-nowrap py-3 px-6";

export const RankTable = ({ teamInfo }: RankTableProps) => {
  console.log(teamInfo);

  return (
    <div className="mt-8 overflow-x-auto rounded-md">
      <table className="w-full table-auto text-center font-bold">
        <thead>
          <tr className="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
            <th className={th}>Rank</th>
            <th className={th}>name</th>
            <th className={th}>Matches</th>
            <th className={th}>Win</th>
            <th className={th}>Draw</th>
            <th className={th}>GD</th>
            <th className={th}>Points</th>
            <th className={th}>Recently</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className={td}>1</td>
            <td className={td}>NAPOLI</td>
            <td className={td}>26</td>
            <td className={td}>22</td>
            <td className={td}>2</td>
            <td className={td}>2</td>
            <td className={td}>68</td>
            <td className="flex items-center justify-center gap-2 py-3 px-6 text-white">
              <div className=" rounded-sm bg-green-500 p-[1px]">W</div>
              <div className=" rounded-sm bg-green-500 p-[1px]">W</div>
              <div className=" rounded-sm bg-red-500 px-[6px] py-[1px]">L</div>
              <div className="rounded-sm bg-blue-500 py-[1px] px-[4px]">D</div>
              <div className=" rounded-sm bg-green-500 p-[1px]">W</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
