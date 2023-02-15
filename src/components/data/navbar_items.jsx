import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const NavBarItems = [
  {
    id: 1,
    icon: (
      <LocalMallOutlinedIcon
        style={{ fontSize: "500%" }}
        sx={{ color: "black" }}
      />
    ),
    activeIcon: (
      <LocalMallOutlinedIcon
        sx={{ color: "white" }}
        style={{ fontSize: "600%" }}
      />
    ),
    path: "/",
  },
  {
    id: 2,
    icon: (
      <LunchDiningOutlinedIcon
        style={{ fontSize: "500%" }}
        sx={{ color: "black" }}
      />
    ),
    activeIcon: (
      <LunchDiningOutlinedIcon
        sx={{ color: "white" }}
        style={{ fontSize: "600%" }}
      />
    ),
    path: "/products",
  },
  {
    id: 3,
    icon: (
      <GroupsOutlinedIcon
        style={{ fontSize: "500%" }}
        sx={{ color: "black" }}
      />
    ),
    activeIcon: (
      <GroupsOutlinedIcon
        sx={{ color: "white" }}
        style={{ fontSize: "600%" }}
      />
    ),
    path: "/accounts",
  },
  {
    id: 4,
    icon: (
      <MonetizationOnOutlinedIcon
        style={{ fontSize: "500%" }}
        sx={{ color: "black" }}
      />
    ),
    activeIcon: (
      <MonetizationOnOutlinedIcon
        sx={{ color: "white" }}
        style={{ fontSize: "600%" }}
      />
    ),
    path: "/offers",
  },
];

export default NavBarItems;
