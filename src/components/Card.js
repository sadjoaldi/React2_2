import React from "react";

const Card = ({ countrys }) => {
  return (
    <li className="card">
      <img
        src={countrys.flags.svg}
        alt={"drapeau " + countrys.translations.fra.common}
      />
      <div className="infos">
        <h2>{countrys.translations.fra.common}</h2>
        <h4>{countrys.capital}</h4>
        <p>Pop. {countrys.population.toLocaleString()}</p>
      </div>
    </li>
  );
};

export default Card;
