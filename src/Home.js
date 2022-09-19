import React from "react";
import Card from "./component/Card";
import { Link } from "react-router-dom";
import Navbar from "./component/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center m-3 ">
        <img src="./images/map.png" alt="" />
      </div>
      <div className="m-2 grid lg:grid-cols-5 justify-center gap-5">
        <Link to="/shopdetail">
          <Card />
        </Link>
        <Link to="/shopdetail">
          <Card />
        </Link>
        <Link to="/shopdetail">
          <Card />
        </Link>
        <Link to="/shopdetail">
          <Card />
        </Link>
        <Link to="/shopdetail">
          <Card />
        </Link>
      </div>
    </>
  );
}

export default Home;
