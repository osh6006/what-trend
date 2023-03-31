import { teamRank } from "../../api/sports/soccerTeam";
import { v4 as uuidv4 } from "uuid";
import { Recently } from "./Recently";
import { SoccerPlayerRank } from "../../api/sports/soccerPlayer";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface RankTableProps {
  teamInfo?: teamRank[];
  playerInfo?: SoccerPlayerRank[];
  goalkeeper?: boolean;
}

const tr = "mb-10 flex flex-row flex-wrap bg-white";
const td =
  "relative block w-full border border-b p-3 text-center text-gray-800";
const th =
  "absolute top-0 left-0 bg-blue-300 px-2 py-1 text-xs font-bold uppercase";
const tdimg = `${td} flex flex-col items-center justfy-center`;
const img = "h-10 w-10 rounded-full border-2 border-gray-500 p-1";

export const RankMobile = ({
  teamInfo,
  playerInfo,
  goalkeeper,
}: RankTableProps) => {
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
                    <Recently kind="table" word={el} key={uuidv4()} />
                  ))}
                </div>
              </td>
            </tr>
          ))}
          {playerInfo?.map(
            (el: SoccerPlayerRank, i: number) =>
              i >= 3 && (
                <tr className={tr} key={uuidv4()}>
                  <td className={td}>
                    <span className={th}>Rank</span>
                    {i + 1}
                  </td>
                  <td className={tdimg}>
                    <LazyLoadImage
                      effect="blur"
                      src={el.img}
                      alt="logo"
                      className={img}
                    />
                    <span className={th}>name</span>
                    {el.name}
                  </td>
                  <td className={tdimg}>
                    <LazyLoadImage
                      effect="blur"
                      src={el.teamImg}
                      alt="logo"
                      className={img}
                    />
                    <span className={th}>team</span>
                    {el.team}
                  </td>
                  <td className={tdimg}>
                    <LazyLoadImage
                      effect="blur"
                      src={el.countryImg}
                      alt="logo"
                      className={img}
                    />
                    <span className={th}>country</span>
                    {el.country}
                  </td>
                  <td className={td}>
                    <span className={th}>Matches</span>
                    {el.allPlay}
                  </td>
                  <td className={td}>
                    <span className={th}>{!goalkeeper ? "Goals" : "Save"}</span>
                    {!goalkeeper ? el.goal : el.save}
                  </td>
                  <td className={td}>
                    <span className={th}>
                      {!goalkeeper ? "Assists" : "cleanSheets"}
                    </span>
                    {!goalkeeper ? el.assist : el.cleanSheets}
                  </td>
                  <td className={td}>
                    <span className={th}>elo</span>
                    {el.elo}
                  </td>
                  <td className={td}>
                    <span className={th}>value</span>
                    {el.value} M&#8364;
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};
