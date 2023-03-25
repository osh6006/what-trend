import { OttDetailObj } from "../../api/ott/ott";

interface OttDetailProps {
  ottDetail: OttDetailObj;
}

export const OttDetail = ({ ottDetail }: OttDetailProps) => {
  console.log(ottDetail);
  return (
    <>
      <div
        className={`flex w-full items-center justify-center gap-10 rounded-lg bg-white px-5 py-10 shadow-md `}
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
        <p>
          STARRING : Idris Elba, Dermot Crowley, Cynthia Erivo, Andy Serkis,
          Jess Liaudin, Einar Kuusk
        </p>
      </div>
    </>
  );
};
