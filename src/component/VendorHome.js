import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Map";
import Features from "./Features";

function VendorHome() {
  let [features, setShowFeature] = useState(false);
  let handleOnClose = () => {
    setShowFeature(false);
  };
  return (
    <>
      <div className="flex justify-between items-center p-4 bg-orange-300">
        {/* NAVBAR */}
        <div className="px-3 flex justify-between">
          <Link to="/home">
            <i className="fa fa-bowl-food" />
            <span className="px-3 font-mono font-bold">nearBy</span>
          </Link>
        </div>
        <div
          className="flex justify-between hover:cursor-pointer"
          onClick={() => setShowFeature(true)}
        >
          <i className="fa fa-user" style={{ fontSize: 24 }} />
          <span className="px-3">profile</span>
        </div>
      </div>
      <div className="p-10 grid md:grid-cols-2 gap-3">
        {/* MAP FOR CURRENT LOCATION */}
        <div className="">
          <Home />
          <img src="./images/map.png" alt="" />
        </div>
        {/* SHOP DETAIL */}
        <div className="flex flex-col p-5  justify-center bg-slate-600 rounded-lg text-white">
          <span>SHOP NAME</span>
          <span>SHOP OWNER NAME</span>
          <span>SHOP LOCATION</span>
          <span>SHOP STATUS</span>
          <div className=" mt-2 flex justify-center items-center">
            <button className="rounded-3xl">SHOP IS OPEN</button>
          </div>
        </div>
        {/* footer */}
      </div>
      <Features visible={features} onClose={handleOnClose} />
    </>
  );
}

export default VendorHome;
