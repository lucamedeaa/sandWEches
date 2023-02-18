import React, { useState, useEffect } from "react";
import YellowButton from "../components/yellow_button";
import Table from "../components/table";
import TextField from "../components/textfield";
import { Grid, Text } from "@nextui-org/react";
import { useQuery } from "react-query";
import { getOrders } from "../data/api";

const Orders = () => {
  const [dateState, setDateState] = useState(new Date());

  const ordersQuery = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
    staleTime: 3000,
    refetchInterval: 1000,
  });

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  if (ordersQuery.status === "loading") return <h1>Loading...</h1>;
  if (ordersQuery.status === "error") return JSON.stringify(ordersQuery.error);

  const column = [
    {
      key: "user",
      label: "Client",
    },
    {
      key: "pickup",
      label: "Pickup",
    },
    {
      key: "break",
      label: "Break",
    },
    {
      key: "status",
      label: "Status",
    },
  ];

  console.log(ordersQuery);

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
          <p
            style={{
              paddingTop: "5vh",
              fontSize: "20px",
              color: "rgb(47, 55, 58)",
              fontWeight: "lighter",
            }}
          >
            <span style={{ fontSize: "30px" }}>
              {dateState.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </span>
            <br />
            {dateState.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </Grid>
        <Grid xs={12} style={{ height: "5vh", paddingTop: "4.5vh" }}>
          <Text size={35} style={{ color: "rgb(47, 55, 58)" }}>
            Orders
          </Text>
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
          <TextField width="470px" placeholder="Search..." />
        </Grid>
        <Grid>
          <YellowButton text="Set to done" />
        </Grid>
        <Grid>
          <Table
            rows={ordersQuery.data}
            columns={column}
            width="70vw"
            rowsPerPage="8"
          />
        </Grid>
      </Grid.Container>
    </Grid.Container>
  );
};

export default Orders;
