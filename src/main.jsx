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
import Login from "./pages/Login/Login";
import PrivateRoute from "./routes/PrivateRoute";
import AddQuery from "./pages/AddQuery/AddQuery";
import QueryDetail from "./pages/QueryDetail/QueryDetail";

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
        loader: () => fetch("http://localhost:5000/recommendations/"),
      },
      {
        path: "/myRecommendations",
        element: (
          <PrivateRoute>
            <MyRecommendations></MyRecommendations>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/recommendations/"),
      },
      {
        path: "/myQueries",
        element: (
          <PrivateRoute>
            <MyQueries></MyQueries>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addQuery",
        element: <AddQuery></AddQuery>,
      },
      {
        path: "/queryDetail/:id",
        element: <QueryDetail></QueryDetail>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/queries/${params.id}`),
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
