import { headers } from "@/data/helpers";
import axios from "axios";

export const getLeague = async () => {
  const leagues = await axios.get("/api/leagues");

  console.log(leagues.data);
};
export const getTeams = async () => {
  const teams = await axios.get("/api/teams");

  console.log(teams.data);
};
