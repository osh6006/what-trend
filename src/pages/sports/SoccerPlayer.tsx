import { Link } from "react-router-dom";
import { SoccerLayout } from "../../components/sports/SoccerLayout";
import useSoccerPlayer from "../../hooks/sports/useSoccerPlayer";
import { useState } from "react";
import { SoccerLeagueSelect } from "../../components/sports/SoccerLeagueSelect";

export default function SoccerPlayer() {
  const { premirePlayerQuery } = useSoccerPlayer();
  const [selectedOption, setSelectedOption] = useState<string>("all");

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value !== "") {
      setSelectedOption(event.target.value);
    }
  };

  return (
    <SoccerLayout>
      <div className="text-center text-xl transition-all lg:mt-3 lg:text-left lg:text-xl">
        Are you looking for the best teams?{" "}
        <Link
          to={"/sports/soccer/team"}
          className="ml-3 block font-bold underline lg:inline"
        >
          click here
        </Link>
        <div>
          <SoccerLeagueSelect handleOptionChange={handleOptionChange} />
        </div>
      </div>
    </SoccerLayout>
  );
}
