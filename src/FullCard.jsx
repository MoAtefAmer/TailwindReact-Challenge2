import React from "react";
import BottomCard from "./BottomCard";
import TopPattern from "./TopPattern";

export default function FullCard() {
  return (
    <div className="static z-40">
      <TopPattern />
      <BottomCard />
    </div>
  );
}
