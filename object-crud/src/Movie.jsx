import React, { useState } from "react";

const Movie = () => {
  const [movies, setMovies] = useState([
    {
      name: "The Dark Knight",
      year: 2008,
      rating: 9,
    },
    {
      name: "Inception",
      year: 2010,
      rating: 8.8,
    },
    {
      name: "Interstellar",
      year: 2014,
      rating: 8,
    },
  ]);

  const addMovie = () => {
    let newMovie = {
      name: prompt("Enter Movie Name"),
      year: prompt("Enter Movie Year"),
      rating: prompt("Enter Movie Rating"),
    };
    setMovies([
      ...movies,
      newMovie
    ]);
  }

  const updateMovie = () => {
    let index = prompt("Enter Movie Index");
    let newMovie = {
      name: prompt("Enter Movie Name"),
      year: prompt("Enter Movie Year"),
      rating: prompt("Enter Movie Rating"),
    };
    let newMovies = [...movies];
    newMovies[index] = newMovie;
    setMovies(newMovies);
  }

  const deleteMovie = () => {
    let index = prompt("Enter Movie Index");
    let newMovies = [...movies];
    newMovies.splice(index, 1);
    setMovies(newMovies);
  }
  
  

  return (
    <div>
      {movies.map((movie, index) => (
        <div key={index}>
          <h1>Name :{movie.name} </h1>
          <h3>Release : {movie.year} </h3>
          <h4>Rating : {movie.rating} </h4>
        </div>
      ))}

      <div>
        <button
          onClick={addMovie}
        >
          Add Movie
        </button>
      </div>

      <div>
        <button
          onClick={updateMovie}
        >
          Update Movie
        </button>
      </div>


      <div>
        <button
          onClick={deleteMovie}
        >
         Delete Movie
        </button>
      </div>
    </div>
  );
};

export default Movie;
