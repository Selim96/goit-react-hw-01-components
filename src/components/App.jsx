import React from "react";
import Profile from "./profile/Profile";
import user from "../user.json";

const { username, avatar, tag, location, stats, } = user;

export const App = () => {
  return (
    <>
      <Profile username={username} avatar={avatar} tag={tag} location={location} stats={stats}
      />
    </>
  );
};
