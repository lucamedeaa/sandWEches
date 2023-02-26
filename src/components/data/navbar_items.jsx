import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import SettingsIcon from "@mui/icons-material/Settings";

const NavBarItems = [
  {
    id: 1,
    icon: <LocalMallOutlinedIcon />,
    text: "Dashboard",
    path: "/",
  },
  {
    id: 2,
    icon: <LunchDiningOutlinedIcon />,
    text: "Products",
    path: "/products",
  },
  {
    id: 3,
    icon: <GroupsOutlinedIcon />,
    text: "Customers",
    path: "/customers",
  },
  {
    id: 4,
    icon: <MonetizationOnOutlinedIcon />,
    text: "Offers",
    path: "/offers",
  },
  {
    id: 5,
    icon: <SettingsIcon />,
    text: "Settings",
    path: "/settings",
  },
];

export default NavBarItems;
