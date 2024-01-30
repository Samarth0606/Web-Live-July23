import React from "react";
import Todos from "./Components/Todos";
import Addd from "./Components/Addd";
import WrapperComponent, {
  ChildComponent,
  ChildComponent2,
} from "./Components/Wrapper";
import ActualWrapper, { ChotaWrapper } from "./Components/ActualWrapper";

function App() {
  return (
    <React.Fragment>
      {/* <Todos /> */}
      {/* <Addd /> */}

      {/* <WrapperComponent compo={<ChildComponent />} /> */}
      {/* <WrapperComponent compo={<ChildComponent2 />} /> */}

      {/* better approach ✅ */}
      <ActualWrapper>
        <ChotaWrapper>
          <h1>hello from h1</h1>
          <h2>hello from h1</h2>
        </ChotaWrapper>
      </ActualWrapper>
    </React.Fragment>
  );
}

export default App;
