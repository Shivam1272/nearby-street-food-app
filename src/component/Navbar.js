import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Signin from "./Signin";

function Navbar() {
  let [showSignin, setshowSignin] = useState(false);
  let [showLogin, setshowLogin] = useState(false);

  let handleOnClose = () => {
    setshowLogin(false);
    setshowSignin(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-orange-300">
        <div className="flex justify-between">
          <div className="px-3">
            <i className="fa fa-bars" />
          </div>
          <Link to="/">
            <h1>nearBy</h1>
          </Link>
        </div>
        <div className="flex justify-between">
          <button
            className="px-3 hover:text-white hover:border-b-2"
            onClick={() => {
              setshowLogin(true);
            }}
          >
            Log in
          </button>
          <button
            className="px-3 hover:text-white hover:border-b-2"
            onClick={() => {
              setshowSignin(true);
            }}
          >
            Sign in
          </button>
        </div>
      </div>
      <Login isVisible={showLogin} onClose={handleOnClose} />
      <Signin isVisible={showSignin} onClose={handleOnClose} />
    </div>
  );
}

export default Navbar;
