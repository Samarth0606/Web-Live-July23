import React from "react";

// function Student(props) {
function Student({ name, favColor, num }) {
  //object -> destructure
  //   console.log(props);
  return (
    <div>
      {/* <h1>Name: {props.name}</h1> */}
      <h1>Name: {name}</h1>
      {/* <h1>FavColor: {props.favColor}</h1> */}
      <h1>FavColor: {favColor}</h1>
      {/* <h1>Number: {props.num}</h1> */}
      <h1>Number: {num}</h1>
    </div>
  );
}

export default Student;
