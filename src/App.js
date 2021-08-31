import React from "react";
import Address from "./components/Address";
import Fullname from "./components/Fullname";
import Profilephoto from "./components/Profilephoto";

const App = () => {
  return (
    <div>
      <Address/>
      <Fullname/>
      <center><Profilephoto/></center>
    </div>
  );
};

export default App;
