import React from "react";

function Eveents() {
  function handleClick() {
    console.log("hello from samarth bhaiya ka event");
  }
  function deletee(id) {
    console.log(id, "deleted");
  }

  return (
    <div>
      <button onClick={handleClick}>Click me!!</button>

      <button onClick={() => deletee(101)}>Delete</button>
    </div>
  );
}

export default Eveents;
