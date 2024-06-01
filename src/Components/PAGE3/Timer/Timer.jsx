import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import FaArrowUp from "../../../assets/Timer/FaArrowUp.png";
import FaArrowDown from "../../../assets/Timer/FaArrowDown.png";
import "./TimerApp.css";

const TimerApp = () => {
  const [isPlaying, setPlaying] = useState(false);
  const [time, setTime] = useState(0); // Example starting time in seconds

  const formatTime = (remainingTime) => {
    const hours = String(Math.floor(remainingTime / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((remainingTime % 3600) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(remainingTime % 60).padStart(2, "0");
    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(time);

  const increaseSecond = () => setTime(time + 1);
  const decreaseSecond = () => setTime(time > 0 ? time - 1 : 0);
  const increaseMinute = () => setTime(time + 60);
  const decreaseMinute = () => setTime(time > 60 ? time - 60 : 0);
  const increaseHour = () => setTime(time + 3600);
  const decreaseHour = () => setTime(time > 3600 ? time - 3600 : 0);

  return (
    <div className="timer-app">
      <div className="timer-circle">
        <div className="timer-circle-container">
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={time}
            colors={["#FF6A6A"]}
            strokeWidth={8} // Adjust the stroke width of the circle
            size={130} // Adjust the size of the circle
            trailColor={"#1e2e43"} // Adjust the color of the trail (background) of the circle
            style={{ fontSize: "16px" }} // Adjust the font size of the countdown numbers
          >
            {({ remainingTime }) => {
              const { hours, minutes, seconds } = formatTime(remainingTime);
              return `${hours}:${minutes}:${seconds}`;
            }}
          </CountdownCircleTimer>
        </div>
      </div>
      <div className="timer-controls">
        <div className="time-adjustment-container">
          <div className="time-adjustment">
            <div className="label">Hours</div>
            <img
              src={FaArrowUp}
              alt="Increase Hour"
              onClick={increaseHour}
              className="arrow"
            />
            <div className="time-value">{hours}</div>
            <img
              src={FaArrowDown}
              alt="Decrease Hour"
              onClick={decreaseHour}
              className="arrow"
            />
          </div>
          <div className="time-adjustment">
            <div className="label">Minutes</div>
            <img
              src={FaArrowUp}
              alt="Increase Minute"
              onClick={increaseMinute}
              className="arrow"
            />
            <div className="time-value">{minutes}</div>
            <img
              src={FaArrowDown}
              alt="Decrease Minute"
              onClick={decreaseMinute}
              className="arrow"
            />
          </div>
          <div className="time-adjustment">
            <div className="label">Seconds</div>
            <img
              src={FaArrowUp}
              alt="Increase Second"
              onClick={increaseSecond}
              className="arrow"
            />
            <div className="time-value">{seconds}</div>
            <img
              src={FaArrowDown}
              alt="Decrease Second"
              onClick={decreaseSecond}
              className="arrow"
            />
          </div>
        </div>
        <button
          disabled={isPlaying}
          onClick={() => setPlaying(true)}
          className="start-button"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default TimerApp;
