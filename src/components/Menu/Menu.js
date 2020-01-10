import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const style = { fontWeight: "bold" };
  return (
    <div>
      Menu
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={style}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about" activeStyle={style}>
            AboutPage
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" activeStyle={style}>
            ContactPage
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/movieList" activeStyle={style}>
            MovieListPage
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
