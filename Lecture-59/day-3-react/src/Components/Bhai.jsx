import React from "react";

function Bhai() {
  let arr = [10, "sam", 30, 40];
  let obj = { a: 10 };

  let arr2 = [{ a: 10 }, { a: 200, b: 400 }, { a: 300 }];

  return (
    <div>
      {/* <h1>{arr}</h1> */}
      {/* <h1>{JSON.stringify(obj)}</h1> */}
      {/* <h1>{obj.a}</h1> */}
      {arr2.map((item, index) => {
        return Object.values(item).map((itm, indx) => {
          return <h1>{itm}</h1>;
        });
      })}
      {/* {arr2} */}
    </div>
  );
}

export default Bhai;
