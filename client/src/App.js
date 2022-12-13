import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./Pages/Start";
import User from "./User";
import "./App.css";

const App = () => {
  return (
    <main className="App">
      <article className="frame">
        <Router>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/*" element={<User />} />
          </Routes>
        </Router>
      </article>
    </main>
  );
};

export default App;
