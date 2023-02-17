import React from "react";
import YellowButton from "../components/yellow_button";
import Table from "../components/table";
import TextField from "../components/textfield";
import { Grid, Text } from "@nextui-org/react";

const Orders = () => {
  const row = [
    {
      id: "1",
      name: "Giulio",
      surname: "Chiozzi",
      email: "chiozzi.giulio@iisviolamarchesini.edu.it",
    },
    {
      id: "2",
      name: "Nicolò",
      surname: "Ciancaglia",
      email: "ciancaglia.nicolo@iisviolamarchesini.edu.it",
    },
    {
      id: "3",
      name: "Luca",
      surname: "Medea",
      email: "medea.luca@iisviolamarchesini.edu.it",
    },
    {
      id: "4",
      name: "Francesco",
      surname: "Pirra",
      email: "pirra.francesco@iisviolamarchesini.edu.it",
    },
    {
      id: "5",
      name: "Leonardo",
      surname: "Secchiero",
      email: "secchiero.leonardo@iisviolamarchesini.edu.it",
    },
    {
      id: "6",
      name: "Riccardo",
      surname: "Barchi",
      email: "barchi.riccardo@iisviolamarchesini.edu.it",
    },
    {
      id: "7",
      name: "Matteo",
      surname: "Formenton",
      email: "formenton.matteo@iisviolamarchesini.edu.it",
    },
    {
      id: "8",
      name: "Simon",
      surname: "Temporin",
      email: "temporin.simon@iisviolamarchesini.edu.it",
    },
    {
      id: "9",
      name: "Antonio",
      surname: "Borsetto",
      email: "borsetto.antonio@iisviolamarchesini.edu.it",
    },
  ];

  const column = [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "name",
      label: "Name",
    },
    {
      key: "surname",
      label: "Surname",
    },
    {
      key: "email",
      label: "Email",
    },
  ];
  return (
    <Grid.Container
      style={{
        background: "#FFECD9",
        height: "100vh",
        width: "85vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid.Container style={{ paddingLeft: "5.5vw" }}>
        <Grid xs={12} style={{ height: "5vh" }}>
          <p style={{ paddingTop: "5vh", fontSize: "20px", color: "rgb(47, 55, 58)", fontWeight: "lighter"}}><span style={{fontSize: "25px"}}>12:12 AM</span><br />Monday, December 12, 2012</p>
        </Grid>
        <Grid xs={12} style={{ height: "5vh", paddingTop: "4.5vh" }}>
          <Text size={35} style={{ color: "rgb(47, 55, 58)" }}>Orders</Text>
        </Grid>
      </Grid.Container>
      <Grid.Container
        style={{
          background: "white",
          height: "67vh",
          width: "75vw",
          borderRadius: "20px",
          paddingTop: "5vh",
        }}
        justify="center"
      >
        <Grid style={{ paddingRight: "500px" }}>
          <TextField width="470px" placeholder="Search..."/>
        </Grid>
        <Grid>
          <YellowButton text="Set to done"/>
        </Grid>
        <Grid>
          <Table rows={row} columns={column} width="70vw" rowsPerPage="8" />
        </Grid>
      </Grid.Container>
    </Grid.Container>
  );
};

export default Orders;
