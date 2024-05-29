import React from "react";
import Box from "../../Components/Box";
import Chip from "../../Components/Chip";
import { useNavigate } from "react-router-dom";
import "./styles.css"; // Import CSS file
import actionImg from "../../assets/images/0.png";
import dramaImg from "../../assets/images/1.png";
import romanceImg from "../../assets/images/2.png";
import thrillerImg from "../../assets/images/3.png";
import westernImg from "../../assets/images/4.png";
import horrorImg from "../../assets/images/5.png";
import fantasyImg from "../../assets/images/6.png";
import fictionImg from "../../assets/images/7.png";
import musicImg from "../../assets/images/8.png";

// Define movie categories
const MOVIES = [
  { id: 0, category: "Action", img: actionImg },
  { id: 1, category: "Drama", img: dramaImg },
  { id: 2, category: "Romance", img: romanceImg },
  { id: 3, category: "Thriller", img: thrillerImg },
  { id: 4, category: "Western", img: westernImg },
  { id: 5, category: "Horror", img: horrorImg },
  { id: 6, category: "Fantasy", img: fantasyImg },
  { id: 7, category: "Music", img: musicImg },
  { id: 8, category: "Fiction", img: fictionImg },
];

export default function Genre() {
  // State for selected movies
  const [selectedMovie, setSelectedMovie] = React.useState([]);
  // Navigate function from react-router-dom
  const navigate = useNavigate();

  // Function to handle navigation
  function handleNavigate() {
    // Check if at least 3 movies are selected
    if (selectedMovie.length < 3) return;
    // Store selected movies in local storage
    localStorage.setItem("selectedMovie", JSON.stringify(selectedMovie));
    // Navigate to the next page
    navigate("/info");
  }

  return (
    <div className="container">
      {/* Left Side: Info Section */}
      <div className="info-section">
        <h1>Super App</h1>
        <p>Choose your entertainment category</p>
        {/* Chip container for selected movies */}
        <div className="chip-container">
          {selectedMovie.map((movie, index) => (
            <Chip
              selectedMovie={movie}
              setSelectedMovie={setSelectedMovie}
              key={index}
            />
          ))}
        </div>
        {/* Warning message if less than 3 movies are selected */}
        {selectedMovie.length < 3 && (
          <div className="warning">
            <i className="fa fa-warning"></i>
            Minimum 3 movies are required
          </div>
        )}
      </div>

      {/* Right Side: Movie Selection Section */}
      <div className="movie-selection-section">
        {/* Render movie boxes */}
        {MOVIES.map((movie) => (
          <Box
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
            key={movie.id}
            data={movie}
            img={movie.img}
          />
        ))}
      </div>

      {/* Next Button */}
      <button
        className={`next-button ${selectedMovie.length >= 3 ? "enabled" : ""}`}
        onClick={handleNavigate}
        disabled={selectedMovie.length < 3}
      >
        Next Page
      </button>
    </div>
  );
}
