import React from "react";

import ReactDOM from "react-dom/client";

import "@mantine/core/styles.css";

import App from "./app/App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
