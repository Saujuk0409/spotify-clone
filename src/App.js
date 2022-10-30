// import './App.css';
import "./styles/body.css";
import "./styles/topNavBar.css";
import React from "react";
import topNavBar from "./components/topNavBar";
import "./styles/topNavBar.css";
import Navbar from "./components/Navbar.js";
import Body from "./components/Body";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";
import RouterProvider from "./RouterProvider";
// import Player from "./components/player";
// const navigateLogin=() => {
//   navigateLogin('/login');
// }
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <topNavBar/> */}
      {/* <Router>
        {/* <Navbar/> */}
      {/* <Routes> */}
      {/* <Route path='/pages/Search' component={Search} /> */}
      {/* <Route path='/pages/Library' component={Library} /> */}
      {/* <Route eaxct path='/' component={Home}/> */}

      {/* </Routes> */}
      {/* </Router> */}
      <RouterProvider />
      {/* <Navbar/> */}
      {/* <Player/> */}
      {/* <Home/> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
