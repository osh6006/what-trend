import { teamRank } from "../../api/sports/soccer";
import { v4 as uuidv4 } from "uuid";
import { Recently } from "./Recently";

interface RankTableProps {
  teamInfo?: teamRank[];
}

const tr = "mb-10 flex flex-row flex-wrap bg-white";
const td =
  "relative block w-full border border-b p-3 text-center text-gray-800";
const th =
  "absolute top-0 left-0 bg-blue-300 px-2 py-1 text-xs font-bold uppercase";

export const RankMobile = ({ teamInfo }: RankTableProps) => {
  return (
    <div className="px-4">
      <table className="mt-7 w-full border-collapse lg:hidden">
        <tbody>
          {teamInfo?.map((el: teamRank, i: number) => (
            <tr className={tr} key={uuidv4()}>
              <td className={td}>
                <span className={th}>Rank</span>
                {el.rank}
              </td>
              <td className={td}>
                <span className={th}>name</span>
                {el.name}
              </td>
              <td className={td}>
                <span className={th}>play</span>
                {el.play}
              </td>
              <td className={td}>
                <span className={th}>win</span>
                {el.win}
              </td>
              <td className={td}>
                <span className={th}>draw</span>
                {el.draw}
              </td>
              <td className={td}>
                <span className={th}>lose</span>
                {el.lose}
              </td>
              <td className={td}>
                <span className={th}>point</span>
                {el.point}
              </td>
              <td className={td}>
                <span className={th}>gd</span>
                {el.gd}
              </td>
              <td className={td}>
                <span className={th}>form</span>
                <div className="flex items-center justify-center gap-1 font-bold text-white">
                  {el.form.split("").map((el: string, i: number) => (
                    <Recently kind="table" word={el} key={i} />
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
