import React from "react";
import "./UserCard.css";

const UserCard = (props) => {
  return (
    <div className="container" style={props.style}>
      <p id="title">{props.name}</p>
      <img id="user-img" src={props.pic} alt="love" />
      <p id="user-desc">
        {props.name} {props.description}
      </p>
    </div>
  );
};

export default UserCard;
