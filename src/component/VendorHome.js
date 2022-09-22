import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Features from "./Features";
import { Menu, Transition } from "@headlessui/react";
import Mapbox from "./Map";

function VendorHome() {
  let [features, setShowFeature] = useState(false);
  let [profile, setShowProfile] = useState(true);
  let [guideliance, setShowGuideliance] = useState(false);
  let [help, setShowHelp] = useState(false);
  let [about, setShowAbout] = useState(false);
  let [map, setShowMap] = useState(false);
  let handleOnClose = () => {
    setShowFeature(false);
  };

  let handleMap = () => {
    setShowMap(!map);
  };

  let handleClick = (item) => {
    if (item === "profile") {
      setShowHelp(false);
      setShowAbout(false);
      setShowProfile(true);
      setShowGuideliance(false);
    } else if (item === "guideliance") {
      setShowHelp(false);
      setShowAbout(false);
      setShowProfile(false);
      setShowGuideliance(true);
    } else if (item === "help") {
      setShowHelp(true);
      setShowAbout(false);
      setShowProfile(false);
      setShowGuideliance(false);
    } else if (item === "about") {
      setShowAbout(true);
      setShowHelp(false);
      setShowProfile(false);
      setShowGuideliance(false);
    }
    setShowFeature(true);
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
        <Menu
          as="div"
          className="flex justify-between hover:cursor-pointer relative"
        >
          {({ open }) => (
            <Fragment>
              <Menu.Button>
                <i className="fa fa-user" style={{ fontSize: 24 }} />
                <span className="px-3">Profile</span>
              </Menu.Button>
              <Transition
                show={open}
                enter="transform transition duration-100 ease-in"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transform transition duration-100 ease-in"
                leaveTo="opacity-0 scale-95"
                leaveFrom="opacity-100 scale-100"
              >
                <Menu.Items
                  className=" origin-top-right absolute right-0 mt-10 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                  static
                >
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`p-2 ${
                          active ? "bg-indigo-500" : "text-gray-700"
                        }`}
                        onClick={() => {
                          handleClick("profile");
                        }}
                      >
                        <i className="fa fa-user" />
                        <span className="p-2">PROFILE</span>
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`p-2 ${
                          active ? "bg-indigo-500" : "text-gray-700"
                        }`}
                        onClick={() => {
                          handleClick("guideliance");
                        }}
                      >
                        <i className="fa fa-user" />
                        <span className="p-2">Guideliance</span>
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`p-2 ${
                          active ? "bg-indigo-500" : "text-gray-700"
                        }`}
                        onClick={() => {
                          handleClick("help");
                        }}
                      >
                        <i className="fa fa-user" />
                        <span className="p-2">Help</span>
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`p-2 ${
                          active ? "bg-indigo-500" : "text-gray-700"
                        }`}
                        onClick={() => {
                          handleClick("about");
                        }}
                      >
                        <i className="fa fa-user" />
                        <span className="p-2">About</span>
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`p-2 ${
                          active ? "bg-indigo-500" : "text-gray-700"
                        }`}
                      >
                        <i className="fa fa-user" />
                        <span className="p-2">Sign in</span>
                      </div>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Fragment>
          )}
        </Menu>
      </div>
      <div className="p-10 grid md:grid-cols-2 gap-3">
        {/* MAP FOR CURRENT LOCATION */}
        <div className="lg:w-64 lg:h-64">
          {map && <Mapbox width="300px" height="250px" />}
          <button onClick={handleMap}>Show Map</button>
          {/* <img src="./images/map.png" alt="" /> */}
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
      <Features
        visible={features}
        profile={profile}
        guideliance={guideliance}
        help={help}
        about={about}
        onClose={handleOnClose}
      />
    </>
  );
}

export default VendorHome;
