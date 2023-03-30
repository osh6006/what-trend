import { useNavigate, useParams } from "react-router-dom";
import { OttLayout } from "../../components/ott/OttLayout";
import { OttNav } from "../../components/ott/OttNav";
import { useEffect } from "react";
import { OttRank } from "../../components/ott/OttRank";
import { useOttContext } from "../../context/OttContext";
import { OttDetail } from "../../components/ott/OttDetail";
import useOtt from "../../hooks/ott/useOtt";
import { Loading } from "../../components/common/Loading";

export default function Ott() {
  const navigate = useNavigate();
  const params = useParams();
  const { isMovie } = useOttContext();
  const { ottQuery } = useOtt(params.id, "world");
  const { ottObj, isOttObjLoading } = useOttContext();

  // path init
  useEffect(() => {
    if (Object.keys(params).length === 0) {
      navigate("/ott/netflix");
    }
  }, [navigate, params]);

  return (
    <OttLayout>
      <section className="h-full flex-1">
        <div className="mt-3 px-5">
          <h1 className="text-xl font-bold sm:text-2xl">OTT Trends</h1>
          <OttNav />
        </div>
        {ottQuery?.isLoading ? (
          <div className="relative mx-5 mt-5 min-h-[500px] p-5 text-xl font-medium shadow-lg">
            <Loading />
          </div>
        ) : (
          <OttRank ottArr={ottQuery.data} isMovie={isMovie} />
        )}
      </section>
      <section className="relative h-full xl:mt-5 xl:flex-none xl:basis-5/12">
        {!isOttObjLoading && ottObj ? (
          <OttDetail ottDetail={ottObj} />
        ) : (
          <div className="relative h-full min-h-screen ">
            <Loading />
          </div>
        )}
      </section>
    </OttLayout>
  );
}
