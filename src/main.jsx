import React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
