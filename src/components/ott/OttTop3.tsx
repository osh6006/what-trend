import React from "react";
import { OttRank } from "../../api/ott/ott";

interface OttTop3Props {
  ottArr?: OttRank[];
}
const wrapper = "flex flex-col items-center justify-center flex-1";
const no1 = `${wrapper} -translate-y-7 `;
const img = "w-32 rounded-md shadow-md ";
const no1Img = `${img} w-40`;
const h1 = "mt-2 text-lg text-center";
const p = "text-base text-gray-500";

export const OttTop3 = ({ ottArr }: OttTop3Props) => {
  const top1 = ottArr && ottArr[0];
  const top2 = ottArr && ottArr[1];
  const top3 = ottArr && ottArr[2];

  return (
    <div className="mt-12 flex w-full items-center justify-around gap-20 ">
      <div className={wrapper}>
        <img
          src={ottArr && `https://flixpatrol.com${top2?.img}`}
          alt="poster"
          className={img}
        ></img>
        <h1 className={h1}>{top2?.name}</h1>
        <p className={p}>{top2?.point} points</p>
      </div>
      <div className={no1}>
        <img
          src={ottArr && `https://flixpatrol.com${top1?.img}`}
          alt="poster"
          className={no1Img}
        ></img>
        <h1 className={h1}>{top1?.name}</h1>
        <p className={p}>{top1?.point} points</p>
      </div>
      <div className={wrapper}>
        <img
          src={ottArr && `https://flixpatrol.com${top3?.img}`}
          alt="poster"
          className={img}
        ></img>
        <h1 className={h1}>{top3?.name}</h1>
        <p className={p}>{top3?.point} points</p>
      </div>
    </div>
  );
};
