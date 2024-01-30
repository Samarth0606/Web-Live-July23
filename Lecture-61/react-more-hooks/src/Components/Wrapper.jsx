import React from "react";

function WrapperComponent({ compo }) {
  return (
    <div style={{ border: "2px solid red", backgroundColor: "yellow" }}>
      {compo}
    </div>
  );
}

export function ChildComponent() {
  return (
    <div>
      <h1>CHILD HU MAI 1</h1>
    </div>
  );
}

export function ChildComponent2() {
  return (
    <div>
      <h1>CHILD HU MAI 2</h1>
    </div>
  );
}
export default WrapperComponent;
