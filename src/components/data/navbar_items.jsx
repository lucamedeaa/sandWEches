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
    background: true,
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
    background: true,
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
    background: true,
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
    background: true,
  },
  {
    id: 5,
    icon: <img src="/../../settings.png" draggable={false} id="settings" />,
    activeIcon: (
      <img
        src="/../../settings.png"
        draggable={false}
        id="settings"
        style={{ background: "rgb(47, 55, 58)", borderRadius: "50%" }}
      />
    ),
    path: "/settings",
    background: false,
  },
];

export default NavBarItems;
