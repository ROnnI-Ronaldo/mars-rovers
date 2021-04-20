import React from "react";

import "./Card.scss";

const Card = ({ state, name }) => (
  <div className='card'>
    <h1 className='card__name'>{name}</h1>
    <div className='card-state__container'>
      <h2 className='card__state'>{state}</h2>
    </div>
  </div>
);

export default Card;
