import { headers } from "@/data/helpers";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const response = await axios.get("https://v3.football.api-sports.io/teams", {
  //   headers: headers,
  //   params: {
  //     league: "39",
  //     season: "2023",
  //   },
  // });
  // res.status(200).json(response.data);

  // res.status(200).json({ message: "Hello from Next.js!" });
}
