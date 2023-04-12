import React from "react";
import ReactDOM from "react-dom/client";
import "@/assets/sass/index.scss";
import App from "@/App";
import { store } from "@/stores";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
