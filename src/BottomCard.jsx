import React from "react";
import Victor from "./image-victor.jpg";

export default function BottomCard() {
  return (
    <div className=" p-5 max-w-[350px] bg-white rounded-b-2xl break-words drop-shadow-lg shadow-md">
      <img
        src={Victor}
        alt="ss"
        className="relative bottom-20 left-[32%]  w-28 h-28 rounded-full border-solid border-4 border-white"
      />
    </div>
  );
}
