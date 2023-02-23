import React from "react";
import NavBarItems from "./data/navbar_items";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src="/../../logo.png" draggable={false} id="logo" role="button" />
      <ul className="item-container">
        {NavBarItems.map((item) => {
          return (
            <li
              key={item.id}
              id={
                window.location.pathname == item.path && item.background
                  ? "active"
                  : ""
              }
              onClick={() => {
                window.location.pathname = item.path;
              }}
            >
              <Link to={item.path}>
                {window.location.pathname == item.path
                  ? item.activeIcon
                  : item.icon}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
