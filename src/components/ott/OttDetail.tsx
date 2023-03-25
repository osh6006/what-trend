import { OttDetailObj } from "../../api/ott/ott";
import { GiTomato } from "react-icons/gi";
import { FaImdb } from "react-icons/fa";

interface OttDetailProps {
  ottDetail: OttDetailObj;
}

export const OttDetail = ({ ottDetail }: OttDetailProps) => {
  return (
    <div className="hidden sm:block">
      <div
        className={` flex w-full items-center justify-center gap-10 rounded-lg bg-white px-5 py-10 shadow-md `}
      >
        <div
          style={{
            backgroundImage: `url(https://flixpatrol.com/${ottDetail?.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="h-80 w-80 rounded-lg"
        ></div>
        <div className="flex h-full w-full flex-col justify-between ">
          <h1 className="text-2xl font-bold">{ottDetail?.name}</h1>
          <p className="mt-2 font-medium">{`${ottDetail?.country} | ${ottDetail?.weather} | ${ottDetail?.genre}`}</p>
          <p className="mt-2 whitespace-pre-line">{ottDetail?.desc}</p>
          <p className="mt-2 font-medium">{`DIRECTED BY : ${ottDetail?.director}`}</p>
        </div>
      </div>
      <div className="my-10 w-full rounded-lg bg-white px-5 py-10 shadow-md">
        <div className="mt-4 flex items-center justify-around">
          <div className="flex flex-col items-center justify-center text-lg font-medium">
            <FaImdb className="text-3xl text-blue-900" />
            <p>{ottDetail?.imdb}</p>
          </div>
          <div className="h-full rounded-full border-2 border-black"></div>
          <div className="flex flex-col items-center justify-center text-lg font-medium">
            <GiTomato className="text-3xl text-red-600" />
            <p>{ottDetail?.rotten}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
