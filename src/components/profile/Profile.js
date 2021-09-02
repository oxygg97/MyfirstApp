import React from "react";
import propTypes from "prop-types";

const Profile = ({ person }) => {
  return (
    <div style={{ Color: "grey" }}>
      <h3>FullName: {person.name} </h3>
      <h3>Bio: {person.bio} </h3>
      <h3>profession: {person.number}</h3>
    </div>
  );
};
Profile.propTypes = {
  fullName: propTypes.string,
  bio: propTypes.string,
  profession: propTypes.string,
};
export default Profile;
