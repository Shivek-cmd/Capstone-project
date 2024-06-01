import React from "react";
import Shivek from "../PAGE3/shivek.png";
const UserData = () => {
  const userDetails = JSON.parse(localStorage.getItem("userData"));
  const movies = JSON.parse(localStorage.getItem("selectedMovie"));
  // Check if userDetails is null before accessing its properties
  if (!userDetails) {
    return <div>No user data available</div>;
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#5746EA",
        width: "100%",
        height: "100%",
        borderRadius: "20px",
      }}
    >
      <div style={{ maxWidth: "15%", marginLeft: "20px" }}>
        <img
          src={Shivek}
          alt="blank"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <div style={{ marginLeft: "25px" }}>
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            flexDirection: "column",
            fontFamily: "Roboto",
          }}
        >
          <p style={{ padding: "3px", fontSize: "1rem", fontFamily: "Roboto" }}>
            {userDetails.name}
          </p>

          <p style={{ padding: "3px", fontSize: "1rem", fontFamily: "Roboto" }}>
            {userDetails.email}
          </p>

          <p
            style={{
              fontWeight: "700",
              padding: "3px",
              fontSize: "2rem",
              fontFamily: "Roboto",
            }}
          >
            {userDetails.username}
          </p>
        </div>
        <div style={{ marginTop: "auto", display: "flex", flexWrap: "wrap" }}>
          {movies.map((movie, idx) => (
            <div
              key={idx}
              style={{ marginRight: "10px", marginBottom: "10px" }}
            >
              <span
                style={{
                  backgroundColor: "#9F94FF",
                  borderRadius: "20px",
                  padding: "10px",
                  display: "inline-block",
                }}
              >
                {movie}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserData;
