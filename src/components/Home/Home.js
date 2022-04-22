import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies()); //dispatch the movies
    dispatch(fetchAsyncShows()); //dispatch the shows
  }, [dispatch]);

  return (
    <div>
      <div className=""></div>
      <MovieListing />
    </div>
  );
};

export default Home;
