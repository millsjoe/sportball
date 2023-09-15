"use client";
import { getLeague, getTeams } from "@/data/api/football/leagues";
import Head from "next/head";
import React from "react";

const Index = () => {
  React.useEffect(() => {
    getTeams();
  }, []);

  return (
    <div>
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      ;<p>hi</p>
    </div>
  );
};

export default Index;
