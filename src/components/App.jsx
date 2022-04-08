import Profile from "./profile/Profile";
// import user from "../";
// console.log(user);

const data = {
  "username": "Jacques Gluke",
  "tag": "jgluke",
  "location": "Ocho Rios, Jamaica",
  "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  "stats": {
    "followers": 5603,
    "views": 4827,
    "likes": 1308
  }
}

const json = JSON.stringify(data);
const user = JSON.parse(json);

export const App = () => {
  return (
    <div>
      <Profile username={user.username} avatar={user.avatar} tag={user.tag} location={user.location} stats={user.stats}/>
    </div>
  );
};
