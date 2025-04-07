/**
 * Index File
 *
 * This is the entry point of the React application. It initializes the React application
 * and renders the root component (`App`) into the DOM.
 *
 * Features:
 * - Uses ReactDOM to create a root and render the application.
 * - Wraps the `App` component in `React.StrictMode` to highlight potential issues in development.
 * - Imports global styles from `index.scss`.
 * - Includes `reportWebVitals` for measuring application performance.
 *
 * Key Components:
 * - App: The main component of the application.
 * - reportWebVitals: A utility for logging performance metrics (optional).
 */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();