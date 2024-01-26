import React from "react";

function Homie() {
  let a = undefined;
  let b = false;
  let el;
  //   let rm = Math.floor(Math.random() * 10);
  //   if (rm == 7) {
  //     el = a;
  //   } else {
  //     el = b;
  //   }

  return (
    <div>
      <h1>{a}</h1>
      <h1>{JSON.stringify(a)}</h1>
    </div>
  );
}

export default Homie;
