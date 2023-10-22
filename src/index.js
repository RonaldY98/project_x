import React from "react";
import { createRoot } from "react-dom/client";

// CSS styling imports
// import "bootstrap/dist/css/bootstrap.css";
import "./main.css";

// Component imports
import Main from "./main.js";
const root = createRoot(document.getElementById("root"));

root.render(<Main />);
