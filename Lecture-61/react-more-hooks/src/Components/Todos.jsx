import React, { Fragment, useState } from "react";

function Todos() {
  let arr = [
    { titl: "go to place-1", desc: "place-1 is amazing" },
    { titl: "go to place-2", desc: "place-2 is amazing" },
    { titl: "go to place-3", desc: "place-3 is amazing" },
  ];
  let [arrays, setArrays] = useState(arr);

  return (
    <Fragment>
      <SingleTodo todos={arrays} />
    </Fragment>
  );
  //   --------------------------------------------------------------
  //step-1
  //   return (
  //     <div>
  /* <SingleTodo titl="go to place-1" desc="place-1 is amazing" />
      <SingleTodo titl="go to place-2" desc="place-2 is amazing" />
      <SingleTodo titl="go to place-3" desc="place-3 is amazing" /> */
  //     </div>
  //   );
  // --------------------------------------------------------------
}
// --------------------------------------------
// function SingleTodo({ titl, desc }) {
//   return (
//     <Fragment>
//       <h1> Title: {titl} </h1>
//       <h1> Desc: {desc} </h1>
//     </Fragment>
//   );
// }
// --------------------------------------------

//way-2
function SingleTodo({ todos }) {
  //   console.log(todos);
  return (
    <Fragment>
      {todos.map((item, index) => {
        return (
          <div key={index}>
            <h1> {item.titl} </h1>
            <h1> {item.desc} </h1>
          </div>
        );
      })}
    </Fragment>
  );
}

export default Todos;
