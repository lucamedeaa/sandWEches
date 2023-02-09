import React from "react";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src="/../../logo.png" draggable={false} id="logo" role="button" />
      <ul className="item-container">
        <li>
          <LocalMallOutlinedIcon
            sx={{ color: "black" }}
            style={{ fontSize: "500%" }}
          />
        </li>
        <li>
          <LunchDiningOutlinedIcon
            sx={{ color: "black" }}
            style={{ fontSize: "500%" }}
          />
        </li>
        <li>
          <GroupsOutlinedIcon
            sx={{ color: "black" }}
            style={{ fontSize: "500%" }}
          />
        </li>
        <li>
          <MonetizationOnOutlinedIcon
            sx={{ color: "black" }}
            style={{ fontSize: "500%" }}
          />
        </li>
      </ul>
      <img src="/../../settings.png" draggable={false} id="settings" />
    </div>
  );
};

export default NavBar;
