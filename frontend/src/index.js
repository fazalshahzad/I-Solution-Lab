import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={Store}>
        {/* Your main application component */}
        <App />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
