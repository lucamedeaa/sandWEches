import NavBar from "./components/navbar";
import Orders from "./pages/orders";
import Products from "./pages/products";
import Accounts from "./pages/accounts";
import Offers from "./pages/offers";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
