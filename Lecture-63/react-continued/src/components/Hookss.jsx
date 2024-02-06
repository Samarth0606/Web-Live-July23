import React, { useEffect, useRef } from "react";

function Hookss() {
  let salary = 50000; //variable , not a state (state will also show the same beh.)

  let spanEl = useRef(); //initialise

  useEffect(() => {
    setTimeout(() => {
      //   document.getElementById("sal").innerHTML = "33000"; //way-1
      spanEl.current.innerHTML = "33000";
    }, 3000);
  }, []);

  return (
    <div>
      {/* Salary is : <span id="sal"> {salary} </span> -> way-1*/}
      Salary is : <span ref={spanEl}> {salary} </span>
    </div>
  );
}

export default Hookss;
