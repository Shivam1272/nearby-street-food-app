import React, { useState } from "react";

function Features({ visible, onClose }) {
  let [profile, setShowProfile] = useState(true);
  let [guideliance, setShowGuideliance] = useState(false);
  let [help, setShowHelp] = useState(false);
  let [about, setShowAbout] = useState(false);

  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm justify-center rounded-3xl flex flex-col m-5">
      <div
        className="px-5 py-2 flex items-start justify-starts cursor-pointer bg-white m-2 rounded-3xl"
        onClick={onClose}
      >
        close X
      </div>
      <div className=" rounded-2xl flex justify-around bg-white m-2">
        {/* HEADING */}
        <div className=" flex flex-col bg-white justify-evenly p-2 rounded-3xl">
          <div
            className="flex justify-between w-100 items-center"
            onClick={() => {
              setShowProfile(true);
              setShowGuideliance(false);
              setShowHelp(false);
              setShowAbout(false);
            }}
          >
            <h1 className="cursor-pointer ">Profile</h1>
            <i className="fa fa-arrow-right" />
          </div>
          <div
            className="flex justify-between w-100 items-center"
            onClick={() => {
              setShowProfile(false);
              setShowGuideliance(true);
              setShowHelp(false);
              setShowAbout(false);
            }}
          >
            <h1 className="cursor-pointer ">Guideliance</h1>
            <i className="fa fa-arrow-right" />
          </div>
          <div
            className="flex justify-between w-100 items-center"
            onClick={() => {
              setShowProfile(false);
              setShowGuideliance(false);
              setShowHelp(true);
              setShowAbout(false);
            }}
          >
            <h1 className="cursor-pointer ">Help</h1>
            <i className="fa fa-arrow-right" />
          </div>
          <div
            className="flex justify-between w-100 items-center"
            onClick={() => {
              setShowProfile(false);
              setShowGuideliance(false);
              setShowHelp(false);
              setShowAbout(true);
            }}
          >
            <h1 className="cursor-pointer ">About Us</h1>
            <i className="fa fa-arrow-right" />
          </div>
          <div>
            <h1 className="cursor-pointer ">
              Sign out
              <i className="fa fa-arrow-right" />
            </h1>
          </div>
        </div>
        {/* CONTENT */}
        <div>
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
  if (!visible) return null;
  return (
    <div className="m-2 rounded-lg">
      PROFILE
      {/* <img src="./images/map.png" alt="" /> */}
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <label className="font-bold text-sm">Name</label>
          <label>XYZ</label>
        </div>
        <div className="flex justify-between items-center">
          <label className="font-bold text-sm">mobile NO</label>
          <label>99XXX XXXXX</label>
        </div>
        <div className="flex justify-between items-center">
          <label className="font-bold text-sm">Shop Name</label>
          <label>ABC</label>
        </div>
        <div className="flex justify-between items-center">
          <label className="font-bold text-sm">City</label>
          <label>Thane</label>
        </div>
        <div className="flex justify-between items-center">
          <label className="font-bold text-sm">Liscense No</label>
        </div>
        <div className="flex justify-between items-center">
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
