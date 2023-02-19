import Orders from "./pages/orders";
import Products from "./pages/products";
import Accounts from "./pages/accounts";
import Offers from "./pages/offers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Grid } from "@nextui-org/react";
import { useState } from "react";
import Login from "./pages/login";
import "./App.css";

import NavBar from "./components/navbar";

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
      <BrowserRouter>
        <Grid.Container>
          <Grid>
            <NavBar />
          </Grid>
          <Grid>
            <Routes>
              <Route path="/" element={<Orders />} />
              <Route path="/products" element={<Products />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/offers" element={<Offers />} />
            </Routes>
          </Grid>
        </Grid.Container>
      </BrowserRouter>
    </>
  );
}

export default App;

/*

 */
