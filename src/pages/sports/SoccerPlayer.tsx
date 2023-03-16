import useSoccerPlayer from "../../hooks/sports/useSoccerPlayer";

export default function SoccerPlayer() {
  const { testQuery } = useSoccerPlayer();
  console.log(testQuery);

  return <div>SoccerPlayer</div>;
}
