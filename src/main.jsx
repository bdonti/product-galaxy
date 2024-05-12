import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./layouts/Root";
import Home from "./pages/Home/Home";
import Queries from "./pages/Queries/Queries";
import Recommendations from "./pages/Recommendations/Recommendations";
import MyRecommendations from "./pages/MyRecommendations/MyRecommendations";
import MyQueries from "./pages/MyQueries/MyQueries";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/queries",
        element: <Queries></Queries>,
      },
      {
        path: "/recommendations",
        element: <Recommendations></Recommendations>,
      },
      {
        path: "/myRecommendations",
        element: <MyRecommendations></MyRecommendations>,
      },
      {
        path: "/myQueries",
        element: <MyQueries></MyQueries>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
