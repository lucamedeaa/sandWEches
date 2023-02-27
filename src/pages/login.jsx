import { Grid, Text } from "@nextui-org/react";
import React, { useState } from "react";
import logo from "/logo.png";
import TextField from "./../components/textfield";
import OrangeButton from "./../components/orange_button";
import { Login } from "../data/api";

const LoginPage = ({ setToken }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async () => {
    const user = await Login(email, password);
    console.log(user);
    setToken(user.token);
    localStorage.setItem("id", user.id);
    localStorage.setItem("name", user.name);
    localStorage.setItem("surname", user.surname);
    localStorage.setItem("email", user.email);
    window.location.reload();
  };

  return (
    <Grid.Container
      style={{
        background: "white",
        height: "96vh",
        width: "74vw",
        borderRadius: "20px",

        marginTop: "2vh",
        marginBottom: "2vh",
        marginLeft: "13vw",
        marginRight: "13vw",
      }}
      gap={0}
    >
      <Grid
        justify="center"
        xs={12}
        style={{
          marginTop: "15vh",
        }}
      >
        <img src={logo} alt="logo" height={200} />
      </Grid>
      <Grid justify="center" xs={12}>
        <Text
          style={{
            font: "menu",
            color: "#E9642C",
            fontSize: "21px",
            fontWeight: "500",
            height: "0px",
          }}
        >
          E-mail
        </Text>
      </Grid>
      <Grid justify="center" xs={12}>
        <TextField
          width="250px"
          handleChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid justify="center" xs={12}>
        <Text
          style={{
            font: "menu",
            color: "#E9642C",
            fontSize: "21px",
            fontWeight: "500",
            height: "0px",
          }}
        >
          Password
        </Text>
      </Grid>
      <Grid justify="center" xs={12}>
        <TextField
          width="250px"
          handleChange={(e) => setPassword(e.target.value)}
        />
      </Grid>
      <Grid justify="center" xs={12}>
        <a
          href="#"
          style={{
            textDecoration: "none",
          }}
        >
          <Text
            style={{
              font: "menu",
              color: "#F19C78",
              fontSize: "22px",
              fontWeight: "500",
            }}
          >
            Forgot your password?
          </Text>
        </a>
      </Grid>
      <Grid
        justify="center"
        xs={12}
        style={{
          marginBottom: "15vh",
        }}
      >
        <OrangeButton
          height="70px"
          width="200px"
          text="Login"
          textSize={20}
          onPress={handleSubmit}
        />
      </Grid>
    </Grid.Container>
  );
};

export default LoginPage;
