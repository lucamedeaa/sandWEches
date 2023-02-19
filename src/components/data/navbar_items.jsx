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
        sx={{ color: "rgb(47, 55, 58)", strokeWidth: 0.1 }}
      />
    ),
    activeIcon: (
      <LocalMallOutlinedIcon
        sx={{ color: "white", strokeWidth: 0.1 }}
        style={{ fontSize: "500%" }}
      />
    ),
    path: "/",
  },
  {
    id: 2,
    icon: (
      <LunchDiningOutlinedIcon
        style={{ fontSize: "500%" }}
        sx={{ color: "rgb(47, 55, 58)", strokeWidth: 0.1 }}
      />
    ),
    activeIcon: (
      <LunchDiningOutlinedIcon
        sx={{ color: "white", strokeWidth: 0.1 }}
        style={{ fontSize: "500%" }}
      />
    ),
    path: "/products",
  },
  {
    id: 3,
    icon: (
      <GroupsOutlinedIcon
        style={{ fontSize: "500%" }}
        sx={{ color: "rgb(47, 55, 58)", strokeWidth: 0.1 }}
      />
    ),
    activeIcon: (
      <GroupsOutlinedIcon
        sx={{ color: "white", strokeWidth: 0.1 }}
        style={{ fontSize: "500%" }}
      />
    ),
    path: "/accounts",
  },
  {
    id: 4,
    icon: (
      <MonetizationOnOutlinedIcon
        style={{ fontSize: "500%" }}
        sx={{ color: "rgb(47, 55, 58)", strokeWidth: 0.1 }}
      />
    ),
    activeIcon: (
      <MonetizationOnOutlinedIcon
        sx={{ color: "white", strokeWidth: 0.1 }}
        style={{ fontSize: "500%" }}
      />
    ),
    path: "/offers",
  },
];

export default NavBarItems;
