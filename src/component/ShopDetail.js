import React from "react";
import { Link, useLocation } from "react-router-dom";

function ShopDetail() {
  let location = useLocation();
  let handleClick = () => {};
  return (
    <>
      <Link
        to="/"
        className="flex justify-start items-center p-4 bg-orange-400"
      >
        <i className="fa fa-arrow-left" />
        <h1 className="px-2 font-mono font-bold">nearby</h1>
      </Link>
      <div className="flex flex-col items-center w-full">
        <div className="">
          <img src="./images/nearby.png" alt="" />
        </div>
        <div className="flex flex-col p-5 w-72 rounded-lg shadow-lg bg-slate-600 m-4">
          <div>
            <div className="flex justify-between items-center my-2">
              <span className="font-bold text-sm">Name</span>
              <span className=" text-white">{location.state.name}</span>
            </div>
            <div className="flex justify-between items-center my-2">
              <span className="font-bold text-sm">Shop Name</span>
              <span className=" text-white">{location.state.shopName}</span>
            </div>
            <div className="flex justify-between items-center my-2">
              <span className="font-bold text-sm">City</span>
              <span className=" text-white">{location.state.addressName}</span>
            </div>
            <div
              className="flex justify-center items-center my-2"
              onClick={() => {
                handleClick();
              }}
            >
              <span className="font-bold text-sm">Menu Card</span>
            </div>
          </div>
          <div className="text-white flex flex-col  w-full justify-between mt-2 ">
            <div className="bg-orange-400 rounded-2xl p-2 flex items-center justify-center mt-2">
              <i className="fa fa-route" />
              <button className="font-bold pl-2">navigate</button>
            </div>
            <div className="">
              <button
                disabled={!location.state.takeAwayOrderstatus}
                className={`w-full rounded-2xl p-2 flex justify-center items-center mt-2 font-bold ${
                  location.state.takeAwayOrderstatus
                    ? "bg-lime-400"
                    : "bg-red-400"
                }`}
              >
                take away
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopDetail;
