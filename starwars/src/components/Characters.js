import React from 'react';
import Card from './Info';
import "./StarWars.css"

const Characters = props => {
  return (
    <div className="infoCard">
      {props.starwarsChars.map(character => {
        return <Card key={character.created} characterInfo={character} />;
    })}
    </div>
  );
};

export default Characters;