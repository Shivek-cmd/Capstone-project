import React, { useState, useEffect } from "react";

function DateandTime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="container"
      style={{
        backgroundColor: "#FF4ADE",
        padding: "10px",
        width: "100%",
        height: "20%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
      }}
    >
      <div className="date" style={{ fontSize: "1.5rem" }}>
        {dateTime.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })}
      </div>
      <div className="time" style={{ fontSize: "1.5rem" }}>
        {dateTime.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </div>
    </div>
  );
}

export default DateandTime;
