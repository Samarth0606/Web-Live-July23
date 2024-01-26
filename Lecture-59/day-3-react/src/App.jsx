import Bhai from "./Components/Bhai";
import Hello from "./Components/Hello";
import Homie from "./Components/Homie";
import Baba from "./Components/sam";

function App() {
  // -------upper part - 1 -> statements ✅ ->fn , if-else , for , while , -----
  let a = 100;

  // --------lower part-2 -> expression ✅ -> map , ternary ------
  return (
    <div>
      <Bhai />
      {/* <Homie /> */}
      {/* <Baba /> */}
      {/* <Hello /> */}

      {/* <div>
        <h1>hello from App bhai</h1>
      </div>
      <h1>hello again</h1>
      <h1>hello again </h1>
      <h1>hello again {a} </h1> */}
    </div>
  );
}

export default App;
//default export ✅
//named export ❌
