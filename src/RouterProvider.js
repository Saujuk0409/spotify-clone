import React from "react";
import { createBrowserRouter, RouterProvider,Route } from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Search from "./pages/Search";
import Login from "./pages/login";
import Createplaylist from "./pages/Createplaylist"
import LikedSongs from "./pages/likedsongs";
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/search",
    element:<Search/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path: "pages/library",
    element: <Library />,
  },
  {
    path:"/createplaylist",
    element:<Createplaylist/>,
  },
  {
    path:"/likedsongs",
    element:<LikedSongs/>
  }
];

const Router = () => {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default Router;
