import { useParams } from "react-router-dom";
import { useOttContext } from "../../context/OttContext";
import useOtt from "../../hooks/ott/useOtt";
import { getWeek } from "../../util/weather";
import OttSwitch from "./OttSwitch";
import { OttTable } from "./OttTable";
import { OttTop3 } from "./OttTop3";

export const OttRank = () => {
  const { isMovie } = useOttContext();
  const params = useParams();
  const ottData = useOtt(params.id, "world");
  const top3 =
    (isMovie && ottData?.ottQuery?.data?.movie.filter((el, i) => i <= 2)) ||
    ottData?.ottQuery?.data?.serise.filter((el, i) => i <= 2);
  const rest =
    (isMovie && ottData?.ottQuery?.data?.movie.filter((el, i) => i >= 2)) ||
    ottData?.ottQuery?.data?.serise.filter((el, i) => i >= 2);

  console.log(ottData);

  return (
    <section className="mx-5 mt-5 p-5 text-xl font-medium shadow-lg">
      <header className="flex items-center justify-between pr-5">
        <h1 className="text-2xl">{getWeek()}</h1>
        <OttSwitch />
      </header>
      <OttTop3 ottArr={top3} />
      <OttTable ottArr={rest} />
    </section>
  );
};
