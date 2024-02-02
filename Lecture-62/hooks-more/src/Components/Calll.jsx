import React, { memo, useCallback, useState } from "react";

function Calll() {
  let [count, setCount] = useState(0);

  //   let a = 1; //same referencially ✅

  //   function a() {
  //     //not same referencially
  //     console.log("hi frnds i am useCallback()");
  //   }

  let a = useCallback(function () {
    console.log("hi frnds i am useCallback()");
  }, []); //state/prop

  return (
    <div>
      <Demo b={a} />
      {/* <Demo b={count} /> */}
      <button onClick={() => setCount(count + 1)}>Click {count} </button>
    </div>
  );
}

let Demo = memo(function ({ b }) {
  return (
    <div>
      {/* <h1>hi = {b}</h1>  */}
      <h1>hi = {b()}</h1> {/*case-2*/}
    </div>
  );
});

// function Demo({ b }) {
//   return (
//     <div>
//       <h1>hi = {b}</h1>
//     </div>
//   );
// }

export default Calll;
