import React from "react";
import { SoccerLayout } from "../../components/sports/SoccerLayout";
import useSoccer from "../../hooks/sports/useSoccer";

export default function SoccerTeam() {
  const { soccerTeamQuery } = useSoccer();
  return <SoccerLayout>SoccerTeam</SoccerLayout>;
}
