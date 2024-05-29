import React from "react";

// Component for individual movie box
export default function Box({ data, img, selectedMovie, setSelectedMovie }) {
  // Define object mapping categories to background colors
  const categoryColors = {
    Action: "#FF5209",
    Drama: "#D7A4FF",
    Romance: "#148A08",
    Thriller: "#84C2FF",
    Western: "#902500",
    Horror: "#7358FF",
    Fantasy: "#FF4ADE",
    Music: "#E61E32",
    Fiction: "#6CD061",
  };

  // Function to handle movie selection
  function handleSelection() {
    if (selectedMovie.includes(data.category)) {
      // If this movie is already selected, filter it out and remove it from the selected movies array
      setSelectedMovie((prev) => prev.filter((item) => item !== data.category));
    } else {
      // If this movie is not selected, add it into the state
      setSelectedMovie((prev) => [...prev, data.category]);
    }
  }

  return (
    <div
      className="box"
      style={{
        border: `3px solid ${
          selectedMovie.includes(data.category) ? "green" : "#11B800"
        }`,
        padding: "10px",
        borderRadius: "10px",
        margin: "10px",
        width: "150px",
        height: "150px",
        backgroundColor: categoryColors[data.category], // Assigning dynamic background color based on category
      }}
      onClick={handleSelection}
    >
      {/* Movie category */}
      <div
        className="box-category"
        style={{
          fontFamily: "DM Sans",
          fontSize: "1.2rem",
          fontWeight: 500,
          lineHeight: "40px",
          textAlign: "left",
          marginBottom: "5px",
        }}
      >
        {data.category}
      </div>
      {/* Movie image */}
      <img
        className="box-image"
        src={data.img}
        alt={data.category}
        style={{
          width: "95%",
          height: "50%",
          borderRadius: "11.66px 0px 0px 0px",
          boxShadow: "0px 2px 4px 0px #0000008C",
        }}
      />
    </div>
  );
}
