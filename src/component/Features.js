import React, { useState, useEffect } from "react";

function Features({ visible, profile, guideliance, help, about, onClose }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm justify-center rounded-3xl flex flex-col m-5">
      <div
        className="px-5 py-2 flex flex-end justify-center w-24 cursor-pointer bg-white m-2 rounded-3xl hover:bg-red-500"
        onClick={onClose}
      >
        close X
      </div>
      {/* HEADING */}
      <div className=" rounded-2xl flex justify-around bg-white m-2">
        {/* CONTENT */}
        <div className="pt-10 z-50">
          <Profile visible={profile} />
          <Guideliance visible={guideliance} />
          <Help visible={help} />
          <About visible={about} />
        </div>
      </div>
    </div>
  );
}

export default Features;

function Profile({ visible }) {
  const [vendorData, setvendorData] = useState({});
  useEffect(() => {
    setvendorData(JSON.parse(localStorage.getItem("vendorData")));
    // console.log(vendorData);
    console.log(vendorData.address);
  }, []);

  if (!visible) return null;
  return (
    <div className="m-2 rounded-lg flex flex-col justify-evenly">
      <div className="flex justify-between items-center">
        <h1 className=" font-mono font-bold text-lg">PROFILE</h1>
        <h1 className=" font-mono font-bold text-lg">Edit</h1>
      </div>
      {/* <img src="./images/map.png" alt="" /> */}
      <div className="flex flex-col">
        <div className="flex justify-between items-center my-2">
          <label className="font-bold text-sm">
            <i className="fa fa-user" />
            <span className="p-2">Name</span>
          </label>
          <span>{vendorData.name}</span>
        </div>
        <div className="flex justify-between items-center my-2">
          <label className="font-bold text-sm">
            <i className="fa fa-phone" />
            <span className="p-2">mobile</span>
          </label>
          <span>{vendorData.contactNo}</span>
        </div>
        <div className="flex justify-between items-center my-2">
          <label className="font-bold text-sm">
            <i className="fa fa-truck" />
            <span className="p-2">Shop Name</span>
          </label>
          <label>{vendorData.shopName}</label>
        </div>
        <div className="flex justify-between items-center my-2">
          <label className="font-bold text-sm">
            <i className="fa fa-location" />
            <span className="p-2">City</span>
          </label>
          <label>{vendorData.addressName}</label>
        </div>
        <div className="flex justify-between items-center my-2">
          <label className="font-bold text-sm">
            <i className="fa fa-id-card" />
            <span className="p-2">Liscense No</span>
          </label>
          <label>-------------</label>
        </div>
        <div className="flex justify-between items-center my-2">
          <label className="font-bold text-sm">Menu Card</label>
        </div>
        {/* <label>Name</label> */}
      </div>
    </div>
  );
}
function Guideliance({ visible }) {
  if (!visible) return null;
  return (
    <div className="m-2 rounded-lg">
      Guideliance
      <img src="./images/map.png" alt="" />
    </div>
  );
}
function Help({ visible }) {
  if (!visible) return null;
  return (
    <div className="m-2 rounded-lg">
      Help
      <img src="./images/map.png" alt="" />
    </div>
  );
}
function About({ visible }) {
  if (!visible) return null;
  return (
    <div className="m-2 rounded-lg">
      About
      <img src="./images/map.png" alt="" />
    </div>
  );
}
