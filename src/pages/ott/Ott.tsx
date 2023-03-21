import { useNavigate, useParams } from "react-router-dom";
import { OttLayout } from "../../components/ott/OttLayout";
import { OttNav } from "../../components/ott/OttNav";
import { useEffect } from "react";
import { OttRank } from "../../components/ott/OttRank";
import { OttProvider } from "../../context/OttContext";

export default function Ott() {
  const params = useParams();
  const navigate = useNavigate();

  // path init
  useEffect(() => {
    if (Object.keys(params).length === 0) {
      navigate("/ott/netflix");
    }
  }, [navigate, params]);

  return (
    <OttProvider>
      <OttLayout>
        <div className="flex-1">
          <h1 className="text-2xl font-bold">OTT Trends</h1>
          <OttNav />
          <OttRank />
        </div>
        <div className="basis-1/3 bg-black"></div>
      </OttLayout>
    </OttProvider>
  );
}
