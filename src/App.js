import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import casa from "./image/casa.jpg";
import remede from "./image/remedemortel.jpg";
import spiderman from "./image/spiderman.jpg";
import squidgame from "./image/squidgame.jpg";
import venom from "./image/venom.jpg";
import myson from "./image/myson.jpg";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListeHeading";
import AddMovies from "./components/AddMovies";
import Filter from "./components/Filter ";
function App() {
  const [handlemovie] = useState();
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),

      Title: "Casa De Papel",

      img: casa,

      Type: "serie",

      année: "2017",
      rating: 4,
    },
    {
      id: uuidv4(),
      Title: "Remede Mortel",
      img: remede,

      Type: "movie",

      année: "2018",
      rating: 4,
    },
    {
      id: uuidv4(),
      Title: "Spiderman",

      img: spiderman,

      Type: "movie",

      année: "2020",
      rating: 2,
    },
    {
      id: uuidv4(),
      Title: "My Son",

      img: myson,

      Type: "movie",

      année: "2021",
      rating: 3,
    },

    {
      id: uuidv4(),
      Title: "Squid Game",

      img: squidgame,

      Type: "serie",

      année: "2021",
      rating: 5,
    },
    {
      id: uuidv4(),
      Title: "Venom",

      img: venom,

      Type: "movie",

      année: "2021",
      rating: 5,
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [keyword, setKeyword] = useState("");
  const[rating,setRating]=useState(1);
  const AddNewMovie = (movie) => {
    setMovies([{ ...movie, rating: +movie.rating }, ...movies]);
    setShowForm(false);
  };
  const searchMovie = (name) => {
    setKeyword(name);
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
      </div>
      <div className="row"></div>

      {!showForm && <button onClick={() => setShowForm(true)}>AddMovie</button>}
      {showForm ? (
        <AddMovies
          setShowForm={setShowForm}
          setMovies={setMovies}
          AddNewMovies={AddNewMovie}
        />
      ) : (
        <>
          {" "}
          <Filter searchMovie={searchMovie} searchRating={setRating} rating={rating} />
          <MovieList
            movies={movies.filter((elt) => elt.Title.includes(keyword.toUpperCase().trim())
            )}
          />
        </>
      )}
    </div>
  );
}
export default App;
