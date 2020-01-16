import React from "react";

function CharacterCard(props) {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={props.character.image}
        alt={props.character.name}
      />
      <div className="card-body">
        <p className="card-text">{props.character.name}</p>
      </div>
    </div>
  );
}

export default CharacterCard;
