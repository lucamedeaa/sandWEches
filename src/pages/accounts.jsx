import React, { useState } from "react";
import YellowButton from "../components/yellow_button";
import Table from "../components/table";
import { Grid } from "@nextui-org/react";
import { useQuery } from "react-query";
import SearchBar from "../components/searchbar";
import ReactLoading from "react-loading";
import { getAccounts, deleteAccount } from "../data/api";
import AddAccount from "../components/modal/addNewAccount";

const filterAccounts = (accounts, searchQuery) => {
  if (!searchQuery) return accounts;

  return accounts.filter((item) => {
    const name = item.email.toLowerCase();
    return name.includes(searchQuery);
  });
};

const Accounts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState();
  const [showAdd, setShowAdd] = useState(false);

  const accountQuery = useQuery({
    queryKey: ["account"],
    queryFn: getAccounts,
    staleTime: 3000,
    refetchInterval: 1000,
  });

  if (accountQuery.status === "loading")
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

  if (accountQuery.status === "error")
    return JSON.stringify(accountQuery.error);

  const column = [
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
    {
      key: "type",
      label: "Type",
    },
    {
      key: "active",
      label: "Active",
    },
  ];

  const filteredAccounts = filterAccounts(accountQuery.data, searchQuery);
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
        <Grid xs={5}>
          <h1
            style={{
              marginLeft: "3.5vw",
            }}
          >
            Customers
          </h1>
        </Grid>
        <Grid
          xs={3}
          style={{
            paddingLeft: "5vw",
          }}
        >
          <SearchBar
            width="250px"
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </Grid>
        <Grid
          xs={2}
          style={{
            paddingLeft: "4.5vw",
          }}
        >
          <YellowButton
            text="Add"
            height="55px"
            width="160px"
            textSize="18px"
            onPress={() => setShowAdd(true)}
          />
          <AddAccount
            close={() => setShowAdd(false)}
            show={showAdd}
            height="1000px"
            width="1000px"
          />
        </Grid>
        <Grid
          xs={2}
          style={{
            paddingRight: "4.5vw",
          }}
        >
          <YellowButton
            text="Delete"
            height="55px"
            width="160px"
            textSize="18px"
            onPress={() => deleteAccount(selectedIndex)}
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
              rows={filteredAccounts}
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

export default Accounts;
