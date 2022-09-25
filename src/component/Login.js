import React from "react";
// import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";

function Login({ isVisible, onClose }) {
  let navigate = useNavigate();
  let handleClick = () => {
    navigate("/home");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex flex-col items-center h-screen z-50">
      <div className="mt-20 flex items-center justify-center">
        <div className="container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter ">
          <div className="px-4 pt-2 hover:cursor-pointer" onClick={onClose}>
            close X
          </div>
          <form className="h-full flex flex-col justify-evenly items-center">
            <div className="text-white font-poppins text-2xl tracking-widest">
              Log in form for Vendor
            </div>
            <input
              type="text"
              placeholder="username"
              className="input-text outline-none rounded-lg px-2"
            />
            <input
              type="text"
              placeholder="mobile no"
              className="input-text outline-none rounded-lg px-3"
            />
            <button
              className="cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 "
              onClick={handleClick}
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
