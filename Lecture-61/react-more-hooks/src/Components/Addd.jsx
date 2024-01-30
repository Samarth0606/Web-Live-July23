import React, { useState } from "react";

function Addd() {
  let arr = [
    { titl: "go to place-1", desc: "place-1 is amazing" },
    { titl: "go to place-2", desc: "place-2 is amazing" },
    { titl: "go to place-3", desc: "place-3 is amazing" },
  ];
  let [arrays, setArrays] = useState(arr);

  return (
    <div>
      <AddTodo array={arrays} setArray={setArrays} />
      <Todo todos={arrays} />
      <Todo todos={arrays} />
    </div>
  );
}

function AddTodo({ array, setArray }) {
  let [inp1, setInp1] = useState("");
  let [inp2, setInp2] = useState("");

  function handleAddTodo() {
    setArray([...array, { titl: inp1, desc: inp2 }]);
  }

  function changeInp1(e) {
    setInp1(e.target.value);
  }
  function changeInp2(e) {
    setInp2(e.target.value);
  }

  return (
    <div>
      <input onChange={changeInp1} type="text" value={inp1} />
      <input onChange={changeInp2} type="text" value={inp2} />

      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

function Todo({ todos }) {
  return (
    <div>
      {todos.map((item, index) => {
        return (
          <div key={index}>
            <h1>Title: {item.titl}</h1>
            <h1>Desc: {item.desc}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Addd;
