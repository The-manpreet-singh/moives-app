import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const seriesText = "Friends";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText)); //dispatch the movies
    dispatch(fetchAsyncShows(seriesText)); // dispatch the shows
  }, [dispatch]);

  return (
    <div>
      <div className=""></div>
      <MovieListing />
    </div>
  );
};

export default Home;
