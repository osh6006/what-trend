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
  const { ottQuery, ottDetailQuery } = useOtt(params.id, "world");

  // path init
  useEffect(() => {
    if (Object.keys(params).length === 0) {
      navigate("/ott/netflix");
    }
  }, [navigate, params]);

  return (
    <OttLayout>
      <div className="flex-1">
        <div className="px-5">
          <h1 className="text-xl font-bold sm:text-2xl">OTT Trends</h1>
          <OttNav />
        </div>
        {ottQuery?.isLoading ? (
          <section className="relative mx-5 mt-5 min-h-[500px] p-5 text-xl font-medium shadow-lg">
            <Loading />
          </section>
        ) : (
          <OttRank ottArr={ottQuery.data} isMovie={isMovie} />
        )}
      </div>
      <div className="flex basis-5/12 flex-col items-center justify-center p-5">
        <OttDetail ottDetail={ottDetailQuery.data} />
      </div>
    </OttLayout>
  );
}
