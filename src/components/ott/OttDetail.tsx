import { OttDetailObj } from "../../api/ott/ott";
import { GiTomato } from "react-icons/gi";
import { FaImdb } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface OttDetailProps {
  ottDetail: OttDetailObj;
}

export const OttDetail = ({ ottDetail }: OttDetailProps) => {
  return (
    <div className="ml-5 hidden h-full pb-5 sm:block lg:px-2 xl:ml-0 xl:pb-10">
      <h1 className="text-xl font-bold sm:text-2xl">Ott Detail</h1>
      <div
        className={`mt-4 flex w-full items-center justify-center gap-10 rounded-lg bg-white px-5 py-10 shadow-md xl:mt-[4.5rem] `}
      >
        <LazyLoadImage
          alt="ott Detail img"
          className="h-60 w-60 rounded-lg"
          effect="blur"
          src={`https://flixpatrol.com/${ottDetail?.img}`}
        ></LazyLoadImage>
        <div className="flex h-full w-full flex-col justify-between ">
          <h1 className="text-2xl font-bold">{ottDetail?.name}</h1>
          <p className="mt-2 font-medium">{`${ottDetail?.country} | ${ottDetail?.weather} | ${ottDetail?.genre}`}</p>
          <p className="mt-2 whitespace-pre-line">{ottDetail?.desc}</p>
          <p className="mt-2 font-medium">{`DIRECTED BY : ${ottDetail?.director}`}</p>
        </div>
      </div>

      <div className="mt-7 w-full space-y-2 rounded-lg bg-white px-5 py-5 shadow-md">
        <h1 className="text-lg font-bold uppercase">Strring</h1>
        <p>{ottDetail?.starring}</p>
      </div>

      <div className="mt-7 w-full rounded-lg bg-white px-5 py-10 shadow-md">
        <div className="mt-4 flex items-center justify-around">
          <div className="flex flex-col items-center justify-center text-lg font-medium">
            <FaImdb className="text-3xl text-blue-900" />
            <p>{ottDetail?.imdb}</p>
          </div>
          <div className="h-full w-5 rounded-full border-2 border-black"></div>
          <div className="flex flex-col items-center justify-center text-lg font-medium">
            <GiTomato className="text-3xl text-red-600" />
            <p>{ottDetail?.rotten}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
