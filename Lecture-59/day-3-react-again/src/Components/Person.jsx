import React from "react";

function Person() {
  let rn = Math.floor(Math.random() * 10);
  let luckyNum = 7;
  //   let el;
  //   if (rn === luckyNum) {
  //     el = <h1>lucky 7 !!</h1>;
  //   } else {
  //     el = <p>Better luck next time...</p>;
  //   }

  return (
    <div>
      <h1>
        {rn === luckyNum ? (
          <h1>lucky 7 !!</h1>
        ) : (
          <p>Better luck next time...</p>
        )}
      </h1>
    </div>
  );
}

export default Person;
