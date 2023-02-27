import React from "react";
import "./navbar.css";
import NavBarItems from "./data/navbar_items";
import { Grid, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  var click = 0;
  return (
    <Grid.Container
      style={{
        width: "12vw",
        height: "100vh",
        background: "#e85d22",
      }}
    >
      <Grid
        xs={12}
        justify="center"
        style={{ marginTop: "10vh", marginBottom: "7vh" }}
      >
        <img
          src="/../../logo.png"
          draggable={false}
          height="130vh"
          onClick={() => {
            click < 9
              ? click++
              : window.location.replace(
                  "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                );
          }}
        />
      </Grid>
      {NavBarItems.map((item, index) => {
        return (
          <Grid
            key={index}
            xs={12}
            justify="center"
            style={item.text === "Settings" ? { marginBottom: "25vh" } : {}}
          >
            <Link to={item.path}>
              <Button
                className="Button"
                icon={item.icon}
                style={{
                  height: "5vh",
                  background: "#e85d22",
                }}
                id={window.location.pathname == item.path ? "active" : ""}
              >
                {item.text}
              </Button>
            </Link>
          </Grid>
        );
      })}
    </Grid.Container>
  );
};

export default NavBar;
