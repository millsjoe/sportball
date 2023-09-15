import { headers } from "@/data/helpers";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
//   const response = await axios.get(
//     "https://v3.football.api-sports.io/leagues",
//     {
//       headers: headers,
//       params: {
//           'id': '39'
//       }
//     }
//   );
//   res.status(200).json(response.data);

  res.status(200).json({ message: "Hello from Next.js!" });
}
