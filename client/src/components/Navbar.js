import React, { useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import LoginBtn from "./LoginBtn";

const Navbar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const toggleBurger = () => {
    setBurgerOpen((prev) => !prev);
  };
  return (
    <div className="header">
      <nav className="navbar">
        <div className="navbar__logo">
          <Logo />
        </div>

        <ul className={`navbar__list ${burgerOpen ? "open" : ""}`}>
          <li className="navbar__list__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar__list__item">
            <Link to="/add">AddRecipe</Link>
          </li>

          <li className="navbar__list__item">
            <Link to="/meals">Discover</Link>
          </li>
          <li className="navbar__list__item">
            <Link to="/menu">MyMenu</Link>
          </li>
          <li className="navbar__list__item">
            <Link to="/journal">MealJournal</Link>
          </li>
          <li className="navbar__list__item">
            <LoginBtn />
          </li>
        </ul>
        <button className="nobtn burger__btn" onClick={toggleBurger}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;

// const Link = (props) => {
//   return <a href={props.to}>{props.children}</a>;
// };
