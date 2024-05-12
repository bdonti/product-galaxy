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
import Register from "./pages/Register/Register";
import AuthProvider from "./providers/AuthProvider";

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
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
