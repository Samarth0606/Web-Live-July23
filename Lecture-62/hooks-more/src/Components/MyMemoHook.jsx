import React, { useMemo, useState } from "react";

function MyMemoHook() {
  let [count, setCount] = useState(0);
  let [inp, setInp] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  function handleChange(e) {
    setInp(e.target.value);
  }
  let loopp = useMemo(
    function () {
      let ans = 0;
      for (let i = 1; i <= inp; i++) {
        ans = ans + i;
        console.log("loop");
      }
      return ans;
    },
    [inp]
  );
  return (
    <div>
      <input onChange={handleChange} type="number" value={inp} />
      <h1>Sum till that mumber: {loopp} </h1>
      <button onClick={handleClick}>Counnter - {count}</button>
    </div>
  );
}

export default MyMemoHook;
