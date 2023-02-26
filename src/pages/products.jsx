import React, { useState, useEffect } from "react";
import YellowButton from "../components/yellow_button";
import Table from "../components/table";
import { Grid } from "@nextui-org/react";
import { useQuery } from "react-query";
import SearchBar from "../components/searchbar";
import ReactLoading from "react-loading";
import { getProducts } from "../data/api";
import ModifyProduct from "../components/modal/modifyProduct";
import AddProduct from "../components/modal/addNewProduct";

const filterProducts = (products, searchQuery) => {
  if (!searchQuery) return products;

  return products.filter((item) => {
    const name = item.name.toLowerCase();
    return name.includes(searchQuery);
  });
};

const Products = () => {
  const [dateState, setDateState] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState("");
  const [showModify, setShowModify] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);

  const productQuery = useQuery({
    queryKey: ["product"],
    queryFn: getProducts,
    staleTime: 3000,
    refetchInterval: 1000,
  });

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  if (productQuery.status === "loading")
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

  if (productQuery.status === "error")
    return JSON.stringify(productQuery.error);

  const column = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "quantity",
      label: "Quantity",
    },
    {
      key: "price",
      label: "Price",
    },
    {
      key: "category",
      label: "Cateogry",
    },
  ];

  const filteredProducts = filterProducts(productQuery.data, searchQuery);
  return (
    <div
      style={{
        height: "100vh",
        width: "85vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid.Container
        style={{
          paddingTop: "12vh",
          height: "70vh",
          width: "80vw",
          display: "flex",
          justifyContent: "center",
        }}
        gap={8}
      >
        <Grid
          style={{
            background: "white",
            padding: "2vh",
            borderRadius: "20px",
            marginRight: "18vw",
            justifyContent: "center",
          }}
          xs={6}
        >
          <h1 style={{ color: "black" }}>Products</h1>
        </Grid>
        <Grid
          style={{ background: "white", padding: "2vh", borderRadius: "20px" }}
          xs={3}
        >
          <p
            style={{
              fontSize: "15px",
              color: "rgb(47, 55, 58)",
              fontWeight: "lighter",
            }}
          >
            <span style={{ fontSize: "21px", fontWeight: "normal" }}>
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
        <Grid>
          <Grid.Container
            style={{
              marginTop: "2vh",
              background: "white",
              height: "70vh",
              width: "80vw",
              borderRadius: "20px",
            }}
            justify="center"
            gap={4}
          >
            <Grid xs={6}>
              <SearchBar
                width="476px"
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </Grid>
            <Grid xs={2}>
              <YellowButton
                text="Modify"
                height="55px"
                width="160px"
                textSize="18px"
                onPress={() => setShowModify(true)}
              />
              <ModifyProduct
                width="1000px"
                show={showModify}
                close={() => setShowModify(false)}
              />
            </Grid>
            <Grid xs={2}>
              <YellowButton
                text="Add"
                height="55px"
                width="160px"
                textSize="18px"
                onPress={() => setShowAddProduct(true)}
              />
              <AddProduct 
                width="1000px"
                show={showAddProduct}
                close={() => setShowAddProduct(false)}
                />
            </Grid>
            <Grid xs={2}>
              <YellowButton
                text="Change Status"
                height="55px"
                width="160px"
                textSize="18px"
              />
            </Grid>
            <Grid>
              <Table
                rows={filteredProducts}
                columns={column}
                width="70vw"
                rowsPerPage="8"
              />
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default Products;
