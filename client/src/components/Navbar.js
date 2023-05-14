import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="navbar__logo">
          <Logo />
        </div>

        <ul className="navbar__list">
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
            <Link to="/auth">User</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

// const Link = (props) => {
//   return <a href={props.to}>{props.children}</a>;
// };
