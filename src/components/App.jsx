import React from "react";
import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import FriendList from "./friendList/FriendList";
import TransactionHistory from "./transactions/Transactions"
import user from "../components/data/user.json";
import data from "../components/data/data.json";
import friends from "./data/friends.json";
import trs from "./data/transactions.json";

const { username, avatar, tag, location, stats, } = user;

export const App = () => {
  return (
    <>
      <Profile username={username} avatar={avatar} tag={tag} location={location} stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory trns={trs}/>
    </>
  );
};
