import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="navbar__logo">
          <Logo />
        </div>

        <ul className="navbar__list">
          <li className="navbar__list__item">
            <Link smooth to="/">
              Home
            </Link>
          </li>
          <li className="navbar__list__item">
            <Link smooth to="/#about">
              AddRecipe
            </Link>
          </li>

          <li className="navbar__list__item">
            <Link smooth to="/#projects">
              Discover
            </Link>
          </li>
          <li className="navbar__list__item">
            <Link smooth to="/#contact">
              MyMenu
            </Link>
          </li>
          <li className="navbar__list__item">
            <Link smooth to="/#contact">
              MealJournal
            </Link>
          </li>
          <li className="navbar__list__item">
            <Link smooth to="/#contact">
              User
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

const Link = (props) => {
  return <a href={props.to}>{props.children}</a>;
};
