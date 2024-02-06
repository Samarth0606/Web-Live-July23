import React from "react";
import MainNav from "./components/MainNav";
import { Route, Routes } from "react-router-dom";
import AllQuotes from "./components/AllQuotes";
import NewQuotes from "./components/NewQuotes";

function App() {
  return (
    <div>
      <MainNav />

      <main>
        <Routes>
          <Route path="/" element={<AllQuotes />} />
          <Route path="/new" element={<NewQuotes />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
