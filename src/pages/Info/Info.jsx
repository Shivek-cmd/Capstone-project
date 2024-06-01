import UserData from "../../Components/PAGE3/UserData.jsx";
import NotePad from "../../Components/PAGE3/NotePad.jsx";
import WeatherData from "../../Components/PAGE3/WeatherData.jsx";
import DateandTime from "../../Components/PAGE3/DateandTime.jsx";
import Timer from "../../Components/PAGE3/Timer/Timer.jsx";
import "./styles.css";

import NewsData from "../../Components/PAGE3/NewsData.jsx";
import { useNavigate } from "react-router-dom";

export default function Info() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    // Navigate to "/genre" route when button is clicked
    navigate("/movies");
  };
  return (
    <>
      {" "}
      <div class="grid-container">
        <div class="grid-item">
          <UserData />
        </div>
        <div class="grid-item">
          <NotePad />
        </div>
        <div class="grid-item">
          <NewsData />
        </div>
        <div class="grid-item">
          <DateandTime />
          <WeatherData />
        </div>
        <div class="grid-item">
          <Timer />
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "20px" /* Adjust distance from bottom */,
          right: "40px" /* Adjust distance from right */,
        }}
      >
        <button
          style={{
            borderRadius: "20px",
            backgroundColor: "#148A08",
            padding: "5px",
            color: "white",
            border: "none",
            cursor: "pointer",
            width: "100px",
          }}
          onClick={handleButtonClick}
        >
          {" "}
          Browse
        </button>
      </div>
    </>
  );
}
