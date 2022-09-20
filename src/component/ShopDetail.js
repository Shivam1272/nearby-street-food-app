import React from "react";
import { Link, useLocation } from "react-router-dom";

function ShopDetail() {
  let location = useLocation();
  console.log(location);
  return (
    <>
      <Link
        to="/"
        className="flex justify-start items-center p-4 bg-orange-400"
      >
        <i className="fa fa-arrow-left" />
        <h1 className="px-2 font-mono font-bold">nearby</h1>
      </Link>
      <div className="flex flex-col items-center justify-center rounded-xl shadow-xl m-20">
        <div className="">
          <img src="./images/nearby.png" alt="" />
        </div>
        <div className="flex flex-col p-20 rounded-lg shadow-lg bg-slate-600 m-2">
          <div className="flex justify-between items-center my-2">
            <span className="font-bold text-sm">Name</span>
            <span>{location.state.name}</span>
          </div>
          <div className="flex justify-between items-center my-2">
            <span className="font-bold text-sm">
              Shop
              <br />
              Name
            </span>
            <span>{location.state.shopName}</span>
          </div>
          <div className="flex justify-between items-center my-2">
            <span className="font-bold text-sm">City</span>
            <span>{location.state.city}</span>
          </div>
          <div className="flex justify-between items-center my-2">
            <span className="font-bold text-sm">Menu Card</span>
          </div>
          <div className="bg-orange-500 rounded-2xl text-white flex items-center justify-evenly p-2 mt-2">
            <i className="fa fa-route" />
            <button>navigate</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopDetail;
