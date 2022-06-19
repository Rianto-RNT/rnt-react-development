import React from "react";
import "./card.style.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.karakter.id}?set=set2&size=180x180`}
      alt="karakter"
    />
    <h4>{props.karakter.name}</h4>
    <p>{props.karakter.email}</p>
  </div>
);
