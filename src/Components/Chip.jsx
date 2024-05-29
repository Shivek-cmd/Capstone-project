import React from "react";

// Component for individual selected movie chip
export default function Chip({ selectedMovie, setSelectedMovie }) {
  // Function to remove selected movie
  function removeSelection() {
    setSelectedMovie((prev) => prev.filter((item) => item !== selectedMovie));
  }

  return (
    <div>
      {/* Chip displaying selected movie */}
      <span
        className="chip"
        style={{
          border: "none",
          padding: "10px 15px",
          width: "130px",
          backgroundColor: "#148A08",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Selected movie */}
        {selectedMovie}
        {/* Button to remove selection */}
        <span
          className="chip-remove"
          style={{
            cursor: "pointer",
          }}
          onClick={removeSelection}
        >
          X
        </span>
      </span>
    </div>
  );
}
