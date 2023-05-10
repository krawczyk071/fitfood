import React from "react";

const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="navbar__logo">FitFood</div>

        <ul className="navbar__list">
          <li className="navbar__list__item">
            <Link smooth to="/">
              Home
            </Link>
          </li>
          <li className="navbar__list__item">
            <Link smooth to="/#about">
              One
            </Link>
          </li>

          <li className="navbar__list__item">
            <Link smooth to="/#projects">
              Two
            </Link>
          </li>
          <li className="navbar__list__item">
            <Link smooth to="/#contact">
              Three
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
