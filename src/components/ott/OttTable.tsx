import { LazyLoadImage } from "react-lazy-load-image-component";
import { OttRank } from "../../api/ott/ott";
import useOtt from "../../hooks/ott/useOtt";

const th = "py-4 px-6 sticky top-0 bg-gray-200 z-20";
const td = "whitespace-nowrap py-3 px-6 ";
const tdimg = `${td} flex items-center gap-3 text-center`;
const thimg = `${th} text-left`;

interface OttOttTableProps {
  ottArr: OttRank[];
}

export const OttTable = ({ ottArr }: OttOttTableProps) => {
  const { changeOttDetail } = useOtt();
  return (
    <>
      {ottArr && (
        <div className="hidden overflow-y-scroll pb-10 sm:block sm:h-[350px] sm:max-w-5xl">
          <table className=" w-full table-auto text-center font-bold ">
            <thead>
              <tr className="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
                <th className={th}>Rank</th>
                <th className={thimg}>name</th>
                <th className={th}>points</th>
              </tr>
            </thead>
            <tbody>
              {ottArr?.map(
                (el, i) =>
                  i >= 3 && (
                    <tr
                      key={el.id}
                      className="cursor-pointer border-b border-gray-200 text-base hover:bg-gray-100"
                      onClick={() => {
                        changeOttDetail.mutate(el.id);
                      }}
                    >
                      <td className={td}>{i + 1}</td>
                      <td className={tdimg}>
                        <LazyLoadImage
                          src={el.img}
                          alt={"logo"}
                          className="w-8"
                        />
                        <span>{el.name}</span>
                      </td>
                      <td className={td}>{el.point}</td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
