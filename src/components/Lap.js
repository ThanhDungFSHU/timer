import React from "react";
// import { formatTime } from "../formatTime";

function Lap({ time, formatTime }) {
  return (
    <div className="laptime">
      <div className="laptime-time" style={{ color: "red" }}>
        {formatTime(time)}
      </div>
    </div>
  );
}

export default Lap;
