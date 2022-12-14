import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./assets/styles/index.css";
import "./assets/styles/mobile.css";

const root = createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
