import React, { useState } from "react";
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
  console.log(searchQuery);
  return products.filter((item) => {
    const name = item.name.toLowerCase();
    return name.includes(searchQuery);
  });
};

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showModify, setShowModify] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();

  const productQuery = useQuery({
    queryKey: ["product"],
    queryFn: getProducts,
    staleTime: 3000,
    refetchInterval: 1000,
  });

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
            Products
          </h1>
        </Grid>
        <Grid
          xs={3}
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
            paddingLeft: "4.5vw",
          }}
        >
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
            productId={selectedIndex}
          />
        </Grid>
        <Grid
          xs={2}
          style={{
            paddingRight: "4.5vw",
          }}
        >
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
              rows={filteredProducts}
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

export default Products;
