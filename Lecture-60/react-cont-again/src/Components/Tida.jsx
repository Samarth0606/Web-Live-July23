import React, { useState } from "react";

function Tida() {
  return (
    <div>
      <Head task="do roll" />
      <Head task="do siff" />
      <Head task="do bark" />
      <BadaHead task="do jump" />
    </div>
  );
}

function Head(props) {
  return <h1>Title: {props.task} </h1>;
}

function BadaHead({ task }) {
  let [t, setT] = useState(task); //do jump
  function handleClick() {
    setT(Math.floor(Math.random() * 10));
  }
  return (
    <>
      <Head task={t} />
      <button onClick={handleClick}>Click</button>
    </>
  );
}

export default Tida;
