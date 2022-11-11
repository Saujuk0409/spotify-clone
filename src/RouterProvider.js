import React from "react";
import { createBrowserRouter, RouterProvider,Route } from "react-router-dom";
import Home from "./pages/Home";
import Body from "./components/Body"
import Library from "./pages/Library";
import Search from "./pages/Search";
import Login from "./pages/login";
import Createplaylist from "./pages/Createplaylist"
import LikedSongs from "./pages/likedsongs";
import SignUp from "./pages/signup/signup";
import Playlist1 from './pages/Playlist-card/playlist1'
import Navbar from "./components/Navbar";
const routes = [
  // {
  //   path: "/",
  //   element: <Navbar />,
  // },
  {
    path: "/",
    element: <Body/>,
  },
  {
    path:"/home",
    element:<Body/>
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
    path:"/signup",
    element:<SignUp/>
  },
  {
    path: "pages/library",
    element: <Library />,
  },
  {
    path: "playlist/songs",
    element: <Playlist1 />,
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
