import { OttLayout } from "../../components/ott/OttLayout";
import { OttNav } from "../../components/ott/OttNav";

export default function Ott() {
  return (
    <OttLayout>
      <h1 className="text-2xl font-bold">Ott Trends</h1>
      <OttNav />
    </OttLayout>
  );
}
