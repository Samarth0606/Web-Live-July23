import React, { useState } from "react";
import Person from "./Person";

function Logout() {
  //   let username = "mohit";

  //   function handleClick() {
  //     console.log(username);
  //     username = "anonymous";
  //     console.log(username);
  //   }
  // state/variable , function
  let [username, setUsername] = useState("mohit");

  function handleClick() {
    setUsername("anonymous");
  }

  return (
    <div>
      <h1>logout page</h1>
      <Person name={username} age="21" fav="blue" />
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default Logout;
