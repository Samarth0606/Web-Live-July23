import React from "react";

function Person(props) {
  console.log(props);
  return (
    <div>
      <h1>Naam: {props.name} </h1>
      <h1>Umar: {props.age} </h1>
      <h1>Fav Color: {props.fav} </h1>
    </div>
  );
}

export default Person;
