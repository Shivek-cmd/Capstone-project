import React, { useState, useEffect } from "react";
import CloudIcon from "../../assets/Weather/Cloud.png";
import PressureIcon from "../../assets/Weather/Pressure.png";
import WindIcon from "../../assets/Weather/Wind.png";
import HumidityIcon from "../../assets/Weather/Humidity.png";

const WeatherData = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const url =
        "https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "eee5dc184dmsh7e7011e721bb35bp11a64cjsnc84ec62bd841",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setWeather(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeather();
  }, []);

  return weather ? (
    <div
      style={{
        backgroundColor: "#101744",
        display: "flex",
        justifyContent: "space-evenly",

        alignItems: "center",
        height: "80%",
        width: "100%",
        borderBottomRightRadius: "20px",
        borderBottomLeftRadius: "20px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          src={CloudIcon}
          alt="Cloud Icon"
          style={{ height: "60px", width: "auto" }}
        />
        <p style={{ marginTop: "5px", fontSize: "1.2rem" }}>
          {weather.location.name}
        </p>
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "2rem" }}>{weather.current.temp_c}&#176;C</p>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
        >
          <img
            src={PressureIcon}
            alt="Pressure Icon"
            style={{ height: "40px", width: "20px" }}
          />
          <div style={{ marginLeft: "10px" }}>
            <p style={{ fontSize: "0.8rem" }}>
              {weather.current.condition.pressure_in} mbar
            </p>
            <p style={{ fontSize: "0.8rem", color: "#888" }}>Pressure</p>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={WindIcon}
            alt="Wind Icon"
            style={{ height: "40px", width: "20px" }}
          />
          <div style={{ marginLeft: "10px" }}>
            <p style={{ fontSize: "0.8rem" }}>
              {weather.current.condition.wind_kph} km/h
            </p>
            <p style={{ fontSize: "0.8rem", color: "#888" }}>Wind</p>
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
        >
          <img
            src={HumidityIcon}
            alt="Humidity Icon"
            style={{ height: "40px", width: "20px" }}
          />
          <div style={{ marginLeft: "10px" }}>
            <p style={{ fontSize: "0.8rem" }}>
              {weather.current.condition.humidity} %
            </p>
            <p style={{ fontSize: "0.8rem", color: "#888" }}>Humidity</p>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default WeatherData;
