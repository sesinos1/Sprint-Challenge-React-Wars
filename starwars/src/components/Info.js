import React from 'react';
import "./StarWars.css"

const Info = props => {
  return (
    <div className="card">
    <h2>{props.characterInfo.name}</h2>
    <h4>Basic Info</h4>
    <p>Year of Birth: {props.characterInfo.birth_year}</p>
    <p>Gender: {props.characterInfo.gender}</p>
    <p>Height: {props.characterInfo.height} cm</p>
    <p>Mass: {props.characterInfo.mass}kg</p>
    <p>Skin Color: {props.characterInfo.skin_color}</p>
    <p>Hair Color: {props.characterInfo.hair_color}</p>
    <p>Eye Color: {props.characterInfo.eye_color}</p>
</div>
);
};

export default Info;