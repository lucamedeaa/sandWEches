import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider, QueryClient } from "react-query";
import App from "./App";
import "./index.css";

const clientQuery = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={clientQuery}>
       <App/>
    </QueryClientProvider>
  </React.StrictMode>
);
