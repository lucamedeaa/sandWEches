import React from "react";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src="/../../logo.png" draggable={false} id="logo" />
      <ul className="item-container">
        <li>
          <LocalMallOutlinedIcon sx={{ color: "black" }} scale="24px"/>
        </li>
        <li>
          <LunchDiningOutlinedIcon sx={{ color: "black" }} />
        </li>
        <li>
          <GroupsOutlinedIcon sx={{ color: "black" }} />
        </li>
        <li>
          <MonetizationOnOutlinedIcon sx={{ color: "black" }} />
        </li>
      </ul>
      <img src="/../../settings.png" draggable={false} id="settings" />
    </div>
  );
};

export default NavBar;
