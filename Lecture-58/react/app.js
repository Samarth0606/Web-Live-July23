// DOM -> operationally heavy
// let rootEl = document.getElementById("root");

// let h1 = document.createElement("h1");

// h1.innerHTML = "hello h1 from DOM";

// rootEl.append(h1);

// ---------------------------

// REACT -> virtual dom -> efficient -> 17

// let rootEl = document.getElementById("root");

// // let h1 = React.createElement('h1' , null , 'hello h1 from React')
// let h1 = React.createElement(
//   "h1",
//   { id: "sam", className: "vohra" },
//   "hello h1 from React"
// );

// ReactDOM.render(h1, rootEl);
// --------------------------

// REACT -> virtual dom -> efficient -> 18

// let h1 = React.createElement('h1' , null , 'hello h1 from React')
// let h1 = React.createElement(
//   "h1",
//   { id: "sam", className: "vohra" },
//   "hello h1 from React 18"
// );

// // let rootEl = document.getElementById("root");
// // let root = ReactDOM.createRoot(rootEl);

// // or

// let root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(h1);

// -----------------------------------

// let h1 = React.createElement('h1' , null , 'hello h1 from React')
// let h1 = React.createElement(
//   "h1",
//   { id: "sam", className: "vohra" },
//   "hello h1 from React 18"
// );
// let h2 = React.createElement("h2", null, "hello h2 from React 18");

// // let rootEl = document.getElementById("root");
// // let root = ReactDOM.createRoot(rootEl);

// // or

// let root = ReactDOM.createRoot(document.getElementById("root"));

// root.render([h1, h2]); //wromg

// --------------------------------------

// let div = React.createElement("div", null, [
//   React.createElement("h1", null, "hi i am div ke andar h1"),
//   React.createElement("p", null, "hi i am div ke andar p"),
// ]);

// let root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(div);

// -------------------------------------

// JSX SYNTAX -> TAREEKA

// let div = (
//   <div>
//     <h1 id="sam">hello from h1 jsx</h1>
//     <p className="vohra">hello from p jsx</p>
//   </div>
// );

// let root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(div);
