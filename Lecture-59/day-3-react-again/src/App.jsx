import React from "react";
import Person from "./Components/Person";
import Eveents from "./Components/Eveents";
import Student from "./Components/Student";

function App() {
  return (
    <div>
      {/* <Person /> */}
      {/* <Eveents /> */}
      <Student name="mayank" favColor="green" num="1000" />
      <Student name="satvik" favColor="blue" num="4" />
      <Student name="ravi" favColor="orange" num="800" />
    </div>
  );
}

export default App;
