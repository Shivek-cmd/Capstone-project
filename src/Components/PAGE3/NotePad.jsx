import React, { useState, useEffect } from "react";

function Notes() {
  const [data, setData] = useState(localStorage.getItem("notes") || "");

  useEffect(() => {
    localStorage.setItem("notes", data);
  }, [data]);

  return (
    <div
      style={{
        width: "100%",
        height: "120%",
        backgroundColor: "#F1C75B",
        borderRadius: "20px",
        padding: "10px",
      }}
    >
      {" "}
      <h1 style={{ color: "black", marginLeft: "20px" }}>All Notes</h1>
      <textarea
        style={{
          width: "100%",
          height: "80%",
          padding: "10px",
          backgroundColor: "#F1C75B",
          border: "none",
          color: "black",
          outline: "none",
        }}
        aria-label="Notes"
        spellCheck={false}
        value={data}
        onChange={(e) => setData(e.target.value)}
      ></textarea>
    </div>
  );
}

export default Notes;
