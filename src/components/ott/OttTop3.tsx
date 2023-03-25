import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { OttRank } from "../../api/ott/ott";
import useOtt from "../../hooks/ott/useOtt";
interface OttTop3Props {
  ottArr?: OttRank[];
}
const wrapper =
  "flex flex-col items-center justify-center flex-1 hover:scale-110 transition-all cursor-pointer";
const no1 = `${wrapper} sm:-translate-y-7 `;
const img =
  "relative w-20 sm:w-32 sm:rounded-full sm:rounded-md shadow-md flex-1";
const no1Img = `${img} sm:w-40`;
const h1 = "flex-1 mt-2 text-sm sm:text-lg text-center";
const p = "flex-1 text-xs sm:text-base text-gray-500";

export const OttTop3 = ({ ottArr }: OttTop3Props) => {
  const { changeOttDetail } = useOtt();
  return (
    <div className="mt-5 hidden w-full flex-col items-center justify-around gap-3 sm:mt-12 sm:flex sm:flex-row sm:gap-20">
      <div
        className={wrapper}
        onClick={() => {
          changeOttDetail.mutate(ottArr && ottArr[1].id);
        }}
      >
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
      <div
        className={no1}
        onClick={() => {
          changeOttDetail.mutate(ottArr && ottArr[0].id);
        }}
      >
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
      <div
        className={wrapper}
        onClick={() => {
          changeOttDetail.mutate(ottArr && ottArr[2].id);
        }}
      >
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
