import React, { useState } from "react";
import Address from "./components/Address";
import Fullname from "./components/Fullname";
import Profile from "./components/profile/Profile";
import Profilephoto from "./components/Profilephoto";

const App = () => {
  const [bio, setbio] = useState("FullName: ");
  const handlebio = () => {
    setbio(bio+ "ala ben cheikh");
  };

  
    const [Address, setAddress] = useState("Address: ");
    const handleAddress = () => {
      setAddress(Address+ "jaraa grand mosque");
    };

    const [profession, setprofession] = useState("profession: ");
    const handleprofessions = () => {
      setprofession(profession+ "nbi3 fel lagmi");
    };


  const person = {
    name: "alaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    bio: "Sike",
    number: 5246555,
  };
  return (
    <div>
      <button onClick={handlebio}>click</button>
      <h1>{bio}</h1>
      <button onClick={handleAddress}>click</button>
      <h1>{Address}</h1>
      <button onClick={handleprofessions}>click</button>
      <h1>{profession}</h1>
      
      
      <Profilephoto />
      <Profile person={person} />
    </div>
  );
};

export default App;
