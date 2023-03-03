import React, { useState } from "react";
import YellowButton from "../components/yellow_button";
import Table from "../components/table";
import { Grid } from "@nextui-org/react";
import { useQuery } from "react-query";
import { getOrders, setDoneOrder } from "../data/api";
import SearchBar from "../components/searchbar";
import ReactLoading from "react-loading";

const filterOrders = (orders, searchQuery) => {
  if (!searchQuery) return orders;

  return orders.filter((item) => {
    const name = item.user.toLowerCase();
    return name.includes(searchQuery);
  });
};

const Orders = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState();

  const ordersQuery = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
    staleTime: 3000,
    refetchInterval: 1000,
  });

  if (ordersQuery.status === "loading")
    return (
      <ReactLoading
        type="spinningBubbles"
        color="#E9642C"
        width={100}
        height={50}
        style={{
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
        }}
      />
    );

  if (ordersQuery.status === "error") return JSON.stringify(ordersQuery.error);

  const filteredOrders = filterOrders(ordersQuery.data, searchQuery);

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

  return (
    <Grid.Container
      style={{
        marginTop: "4.5vh",
        height: "95vh",
        width: "87vw",
        display: "flex",
      }}
      justify="center"
    >
      <Grid.Container
        style={{
          background: "white",
          padding: "2vh",
          height: "15vh",
          borderRadius: "20px",
          boxShadow: "1px 1px 2px 2px white",
          marginLeft: "2vw",
          marginRight: "2vw",
          alignItems: "center",
          marginTop: "10vh",
        }}
        gap={3}
      >
        <Grid xs={6}>
          <h1
            style={{
              marginLeft: "3.5vw",
            }}
          >
            Orders
          </h1>
        </Grid>
        <Grid
          xs={4}
          style={{
            paddingLeft: "5vw",
          }}
        >
          <SearchBar
            width="275px"
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </Grid>
        <Grid
          xs={2}
          style={{
            paddingRight: "4.5vw",
          }}
        >
          <YellowButton
            text="Set to done"
            height="55px"
            width="160px"
            textSize="18px"
            onPress={() => setDoneOrder(selectedIndex)}
          />
        </Grid>
      </Grid.Container>
      <Grid>
        <Grid.Container
          style={{
            marginBottom: "9vh",
            background: "white",
            width: "83vw",
            borderRadius: "20px",
            boxShadow: "1px 1px 2px 2px white",
          }}
          justify="center"
        >
          <Grid
            style={{
              height: "55vh",
              paddingTop: "2vh",
            }}
          >
            <Table
              rows={filteredOrders}
              columns={column}
              width="80vw"
              rowsPerPage="7"
              setSelectedIndex={setSelectedIndex}
            />
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
};

export default Orders;
