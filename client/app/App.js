import React, {useEffect} from "react";
import { Routes, Route, Link } from "react-router-dom";

import Navbar from "../features/navbar/Navbar";
import AppRoutes from "./AppRoutes";

const App = () => {

  // useEffect(
  //   // localStorage.clear()
  // )

  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
