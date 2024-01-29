import React, { Fragment, memo, useState } from "react";

function Memo() {
  let [t, setT] = useState("hello memo");
  function handleClick() {
    setT(Math.floor(Math.random() * 10));
  }
  return (
    <div>
      <Mymemo titl={t} />
      <button onClick={handleClick}>Click</button>
      <Mymemo titl="bye memo" />
      <Mymemo titl="goodbye memo" />
      <Mymemo titl="bhagja memo" />
    </div>
  );
}

// function Mymemo({ titl }) {
//   return (
//     <div>
//       <h1>Title: {titl} </h1>
//     </div>
//   );
// }
// memoize
const Mymemo = memo(function ({ titl }) {
  return (
    <>
      <h1>Title: {titl} </h1>
    </>
  );
});

export default Memo;
