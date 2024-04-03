import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import FilterProvider from "./Context/filterContext.jsx";
import MenuStateProvider from "./Context/MenuStateContext.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <FilterProvider>
          <MenuStateProvider>
            <App />
          </MenuStateProvider>
        </FilterProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
