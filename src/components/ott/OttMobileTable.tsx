import React from "react";
import { OttRank } from "../../api/ott/ott";
import { v4 as uuidv4 } from "uuid";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface OttMobileTableProps {
  className: string;
  ottArr: OttRank[];
}

const tr = "mb-10 flex flex-row flex-wrap bg-white";
const td =
  "relative block w-full border border-b p-3 text-center text-sm text-gray-800";
const th =
  "absolute top-0 left-0 bg-blue-300 px-2 py-1 text-xs font-bold uppercase";
const tdimg = `${td} flex flex-col gap-2 items-center justfy-center`;
const img = "w-12 h-20";

export const OttMobileTable = ({ ottArr, className }: OttMobileTableProps) => {
  return (
    <div className={className}>
      <table className="mt-5 w-full border-collapse lg:hidden">
        <tbody>
          {ottArr?.map((el, i: number) => (
            <tr className={tr} key={uuidv4()}>
              <td className={td}>
                <span className={th}>Rank</span>
                {i + 1}
              </td>
              <td className={tdimg}>
                <LazyLoadImage
                  src={el.img}
                  alt="logo"
                  className={img}
                  effect="blur"
                />
                <span className={th}>name</span>
                {el.name}
              </td>
              <td className={td}>
                <span className={th}>points</span>
                {el.point}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
