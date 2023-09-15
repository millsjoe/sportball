import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import React from "react";

const Team = () => {
  const router = useRouter();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/team/${router.query.team}`, {});
        console.log(response.data); // Assuming the response contains data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (router.query.team) {
      fetchData();
    }
  }, [router.query.team]);
};

export default Team;
