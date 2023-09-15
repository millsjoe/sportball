import { headers } from "@/data/helpers";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await axios.get("https://v3.football.api-sports.io/teams", {
    headers: headers,
    params: {
      code: req.query.team
    },
  });
  res.status(200).json(response.data);

  // res.status(200).json({ message: req.query.team });
}
