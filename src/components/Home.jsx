import React from "react";
import { Header } from "./Header";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="homeContainer">
        <div className="homeContainer-card">
          <Link to="/games/wordle">
            <h2>Wordle</h2>
            <img src="" alt="" />
          </Link>
          <div className="homeContainer-card--ranking">⭐⭐⭐⭐⭐</div>
        </div>
        <div className="homeContainer-card">
          <Link to="/games/sudoku">
            <h2>Sudoku</h2>
            <img src="" alt="" />
          </Link>
          <div className="homeContainer-card--ranking">⭐⭐⭐⭐</div>
        </div>
        <div className="homeContainer-card">
          <Link to="/games/buscaMinas">
            <h2>Busca Minas</h2>
            <img src="" alt="" />
          </Link>
          <div className="homeContainer-card--ranking">⭐⭐⭐⭐</div>
        </div>
        <div className="homeContainer-card">
          <Link to="/games/memory">
            <h2>Memory</h2>
            <img src="" alt="" />
          </Link>
          <div className="homeContainer-card--ranking">⭐⭐⭐</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
