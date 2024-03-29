import { useEffect, useState } from "react";
import Navbar from "./component/nav";
import Menu from "./component/menu"
import Content from "./component/content";
import "./index.scss"


function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Menu />

      <Content />
    </div>
  );
}

export default App;
