import { OttRankObj } from "../../api/ott/ott";
import { getWeek } from "../../util/weather";
import OttSwitch from "./OttSwitch";
import { OttTable } from "./OttTable";
import { OttTop3 } from "./OttTop3";

interface OttRankProps {
  ottArr: OttRankObj;
  isMovie: boolean;
}

export const OttRank = ({ ottArr, isMovie }: OttRankProps) => {
  return (
    <section className="relative mx-5 mt-5 min-h-[500px] rounded-lg bg-white p-5 text-xl font-medium shadow-lg">
      <>
        <header className="flex items-center justify-between sm:pr-5">
          <h1 className="text-lg sm:text-2xl">{getWeek()}</h1>
          <OttSwitch />
        </header>
        {isMovie && (
          <>
            <OttTop3 ottArr={ottArr?.movie} />
            <OttTable ottArr={ottArr?.movie} />
          </>
        )}
        {!isMovie && (
          <>
            <OttTop3 ottArr={ottArr?.serise} />
            <OttTable ottArr={ottArr?.serise} />
          </>
        )}
      </>
    </section>
  );
};
