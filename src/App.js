import React from "react";
import Address from "./components/Address";
import Fullname from "./components/Fullname";
import Profile from "./components/profile/Profile";
import Profilephoto from "./components/Profilephoto";

const App = () => {
  const person = {
    name: "alaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    bio: "Sike",
    number: 5246555,
  };
  return (
    <div>
      <Address />
      <Fullname />
      <center>
        <Profilephoto />
      </center>
      <Profile person={person} />
    </div>
  );
};

export default App;
