"use client"; // This ensures that the component is treated as a client-side component

import React from "react";
import { useAppSelector } from "../redux/store";
import LogIn from "./auth/log-in";

function Home() {
  const username = useAppSelector((state) => state.authReducer.value.username);
  const isModerator = useAppSelector(
    (state) => state.authReducer.value.isModerator
  );
  return (
    <main>
      <LogIn />
      <h1> Username: {username}</h1>
      {isModerator && <h1>This user is a moderator</h1>}
    </main>
  );
}

export default Home;
