import React, { Fragment, useState } from "react";

function counter() {
  let [count, setCount] = useState(0);

  function hadleIncrement() {
    setCount(count + 1);
  }

  return (
    //jsx
    <Fragment>
      <div>
        <button onClick={hadleIncrement}>Increase - {count} </button>
      </div>
      <h1>hello</h1>
    </Fragment>
  );
}

export default counter;
