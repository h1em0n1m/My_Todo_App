import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Today from "./Pages/Today";
import TodoList from "./Pages/TodoList";
import PlayWithCat from "./Pages/PlayWithCat";
import Dev from "./Pages/Dev";
import "./App.css";

const User = () => {
  return (
    <>
      <section className="view">
        <Routes>
          <Route path="/today" element={<Today />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/playwithcat" element={<PlayWithCat />} />
          <Route path="/Dev" element={<Dev />} />
        </Routes>
      </section>
      <Nav />
    </>
  );
};

export default User;
