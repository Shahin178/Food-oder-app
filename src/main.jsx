import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { appRouter } from "./App";
import { RouterProvider } from "react-router-dom";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
