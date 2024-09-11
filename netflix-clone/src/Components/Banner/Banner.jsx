import  { useState, useEffect } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import "./banner.css";

// Define the truncate function
const truncate = (string, n) => {
  return string?.length > n ? string.substring(0, n - 1) + "..." : string;
};

const Banner = () => {
  // Initialize state for storing movie data
  const [movie, setmovie] = useState({});

  // Use useEffect to fetch movie data when the component mounts
  useEffect(() => {
    (async () => {
      try {
        // Fetch the data from the API
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request);

        // Select a random movie from the results
        setmovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        // Log any errors that occur during the fetch
        console.log("error", error);
      }
    })();
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  // Event handler for the Play button
  const handlePlayClick = () => {
    console.log("Play button clicked");
    // Add logic for Play button functionality here
  };

  // Event handler for the My Lists button
  const handleMyListsClick = () => {
    console.log("My Lists button clicked");
    // Add logic for My Lists button functionality here
  };

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`, // Set the background image for the banner
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}{" "}
          {/* Display movie title */}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button play" onClick={handlePlayClick}>
            Play
          </button>
          <button className="banner__button" onClick={handleMyListsClick}>
            My Lists
          </button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}{" "}
          {/* Display truncated movie description */}
        </h1>
      </div>

      <div className="banner__fadeBottom" />
    </div>
  );
};

export default Banner;
