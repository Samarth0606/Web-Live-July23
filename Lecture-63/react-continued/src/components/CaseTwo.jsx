import React, { useRef, useState } from "react";

function CaseTwo() {
  const [count, setCount] = useState(0);
  let countRef = useRef(0);

  function handleIncrement() {
    setCount(count + 1); // 0 + 1 = 1 //next render-2
    console.log("state: ", count); // 0 //render-1
  }

  function handleIncrement2() {
    // console.log(countRef.current);
    countRef.current += 1;
    console.log("refer: ", countRef.current);
  }

  return (
    <div>
      Count-1: {count}
      <br />
      Count-2: {countRef.current}
      <br />
      <button onClick={handleIncrement}>CLICK-1</button>
      <br />
      <button onClick={handleIncrement2}>CLICK-2</button>
    </div>
  );
}

export default CaseTwo;
