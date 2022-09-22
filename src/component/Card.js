import React from "react";

function Card({ name, shopName, location }) {
  return (
    <div className="w-[200px] grid md:grid-cols-2 lg:grid-cols-1 rounded-md shadow-md overflow-hidden p-2">
      <div>
        <img src="./images/nearby.png" alt="" />
      </div>
      <div className="flex flex-col justify-center">
        <div className="p-2">
          <span className="font-bold">{shopName}</span>
          <br />
          <span>{name}</span>
          <br />
          <span>{location}</span>
        </div>
        <div className="flex justify-center text-center text-lg bg-orange-400 rounded-xl text-white">
          <button>navigate</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
