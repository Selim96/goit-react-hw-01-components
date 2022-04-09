import React from "react";
import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import user from "../user.json";
import data from "../data.json";

const { username, avatar, tag, location, stats, } = user;

export const App = () => {
  return (
    <>
      <Profile username={username} avatar={avatar} tag={tag} location={location} stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data}/>
    </>
  );
};
