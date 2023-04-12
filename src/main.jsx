import React from "react";
import ReactDOM from "react-dom/client";
import "@/assets/sass/index.scss";
import App from "@/App";
import {persistor, store} from '@/stores';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App/>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
