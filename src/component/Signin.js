import React, { useState } from "react";
import PopupMessage from "./PopupMessage";

function Signin({ isVisible, onClose }) {
  const [visible, setVisible] = useState(false);
  let message = " ";
  const [vendor, setVendor] = useState({
    name: "",
    contactNo: "",
    password: "",
    addressName: "",
    shopName: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setVendor({ ...vendor, [name]: value });
  };

  let handleClick = async (e) => {
    e.preventDefault();
    const { name, contactNo, password, addressName, shopName } = vendor;

    let res = await fetch("/vendors/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        contactNo,
        password,
        addressName,
        shopName,
      }),
    });

    let data = await res.json();
    if (data.success === false) {
      window.alert("Invalid Registration");
    } else {
      onClose();
      setVisible(true);
      message = "Registration SuccessFull";
    }
  };

  if (!isVisible) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex flex-col items-center h-screen z-50">
        <div className="mt-20 flex items-center justify-center">
          <div className="container h-[460px] w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter ">
            <div
              className="px-4 pt-2 hover:cursor-pointer text-white"
              onClick={onClose}
            >
              close X
            </div>
            <form
              method="POST"
              className="h-full flex flex-col justify-evenly items-center"
            >
              <div className="text-white font-poppins text-2xl tracking-widest">
                Sign in form for Vendor
              </div>
              <input
                id="username"
                type="text"
                name="name"
                placeholder="username"
                value={vendor.name}
                onChange={handleInput}
                className="input-text outline-none rounded-lg px-2"
              />
              <input
                id="mobile"
                type="text"
                name="contactNo"
                placeholder="mobile no"
                value={vendor.contactNo}
                onChange={handleInput}
                className="input-text outline-none rounded-lg px-3"
              />
              <input
                id="city"
                type="text"
                name="addressName"
                placeholder="city"
                value={vendor.addressName}
                onChange={handleInput}
                className="input-text outline-none rounded-lg px-3"
              />
              <input
                id="shopName"
                type="text"
                name="shopName"
                placeholder="Shop Name"
                value={vendor.shopName}
                onChange={handleInput}
                className="input-text outline-none rounded-lg px-3"
              />
              <input
                id="password"
                type="password"
                name="password"
                placeholder="password"
                value={vendor.password}
                onChange={handleInput}
                className="input-text outline-none rounded-lg px-3"
              />
              <button
                className="cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 "
                onClick={handleClick}
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
      <PopupMessage visible={visible} message={message} />
    </>
  );
}

export default Signin;
