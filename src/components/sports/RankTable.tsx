import { SoccerPlayerRank } from "../../api/sports/soccerPlayer";
import { teamRank } from "../../api/sports/soccerTeam";
import { Recently } from "./Recently";

interface RankTableProps {
  teamInfo?: teamRank[];
  playerInfo?: SoccerPlayerRank[];
  goalkeeper?: boolean;
}

const th = "py-4 px-6 sticky top-0 bg-gray-200";
const td = "whitespace-nowrap py-3 px-6 ";
const tdimg = `${td} flex items-center gap-3 text-center`;
const thimg = `${th} text-left`;

export const RankTable = ({
  teamInfo,
  playerInfo,
  goalkeeper,
}: RankTableProps) => {
  return (
    <div className="mt-8 hidden overflow-auto rounded-md lg:block ">
      {teamInfo && (
        <table className="w-full table-auto text-center font-bold">
          <thead>
            <tr className="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
              <th className={th}>Rank</th>
              <th className={thimg}>name</th>
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
              <tr
                key={i}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className={td}>{el.rank}</td>
                <td className={tdimg}>
                  <img
                    src={`https://secure.cache.images.core.optasports.com/soccer/teams/30x30/uuid_${el?.img}.png`}
                    alt="logo"
                  />
                  <span>{el.name}</span>
                </td>
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
      )}
      {playerInfo && (
        <table className="w-full table-auto text-center font-bold">
          <thead>
            <tr className="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
              <th className={th}>Rank</th>
              <th className={thimg}>name</th>
              <th className={th}>Matches</th>
              <th className={thimg}>team</th>
              <th className={thimg}>country</th>
              <th className={th}>{!goalkeeper ? "Goals" : "Save"}</th>
              <th className={th}>{!goalkeeper ? "Assists" : "cleanSheets"}</th>
              <th className={th}>elo</th>
              <th className={th}>value</th>
            </tr>
          </thead>
          <tbody>
            {playerInfo?.map((el: SoccerPlayerRank, i: number) => (
              <tr
                key={i}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className={td}>{i + 1}</td>
                <td className={tdimg}>
                  <img
                    src={el.img}
                    alt="logo"
                    className="h-14 w-14 rounded-full border-2 border-gray-500"
                  />
                  <span>{el.name}</span>
                </td>
                <td className={td}>{el.allPlay}</td>
                <td className={tdimg}>
                  <img
                    src={el.teamImg}
                    alt="logo"
                    className="h-10 w-10 rounded-full border-2 border-gray-500 p-1"
                  />
                  {el.team}
                </td>
                <td className="">
                  <div className={tdimg}>
                    <img
                      src={el.countryImg}
                      alt="logo"
                      className="h-10 w-10 rounded-full border-2 border-gray-500 p-1"
                    />
                    {el.country}
                  </div>
                </td>
                <td className={td}>{!goalkeeper ? el.goal : el.save}</td>
                <td className={td}>
                  {!goalkeeper ? el.assist : el.cleanSheets}
                </td>
                <td className={td}>{el.elo}</td>
                <td>{el.value} M&#8364;</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
