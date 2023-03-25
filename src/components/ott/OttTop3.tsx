import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { OttRank } from "../../api/ott/ott";
interface OttTop3Props {
  ottArr?: OttRank[];
}
const wrapper = "flex flex-col items-center justify-center flex-1";
const no1 = `${wrapper} -translate-y-7 `;
const img = "relative rel w-32 rounded-md shadow-md ";
const no1Img = `${img} w-40`;
const h1 = "mt-2 text-lg text-center";
const p = "text-base text-gray-500";

export const OttTop3 = ({ ottArr }: OttTop3Props) => {
  return (
    <div className="mt-12 flex w-full items-center justify-around gap-20 ">
      <div className={wrapper}>
        {ottArr && (
          <LazyLoadImage
            className={img}
            src={`${ottArr[1].img?.replace("w72", "w350")}`}
            effect="blur"
            alt="poster"
          />
        )}
        <h1 className={h1}>{ottArr && ottArr[1]?.name}</h1>
        <p className={p}>{ottArr && ottArr[1]?.point} points</p>
      </div>
      <div className={no1}>
        {ottArr && (
          <LazyLoadImage
            className={no1Img}
            src={`${ottArr[0].img?.replace("w72", "w350")}`}
            effect="blur"
            alt="poster"
          />
        )}
        <h1 className={h1}>{ottArr && ottArr[0].name}</h1>
        <p className={p}>{ottArr && ottArr[0].point} points</p>
      </div>
      <div className={wrapper}>
        {ottArr && (
          <LazyLoadImage
            className={img}
            src={`${ottArr[2].img?.replace("w72", "w350")}`}
            effect="blur"
            alt="poster"
          />
        )}
        <h1 className={h1}>{ottArr && ottArr[2].name}</h1>
        <p className={p}>{ottArr && ottArr[2].point} points</p>
      </div>
    </div>
  );
};
