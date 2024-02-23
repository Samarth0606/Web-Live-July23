import React, { useContext, useState } from "react";
import { CountContext } from "./Context";

function PropDrilling() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={count}>
        <Counter setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}
function Counter({ setCount }) {
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  );
}
function CountRenderer() {
  let count = useContext(CountContext);
  return (
    <div>
      <h1>Count : {count}</h1>
    </div>
  );
}
function Buttons({ setCount }) {
  let count = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
    </div>
  );
}

export default PropDrilling;
