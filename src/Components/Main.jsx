import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../Request";

function Main() {
  const [movies, setMovies] = useState([]);

  const homeMovie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + ". . .";
    } else {
      return str;
    }
  };
  return (
    <div className="w-full h-[550px] text-zinc-100">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${homeMovie?.backdrop_path}`}
          alt={homeMovie?.title}
        />

        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{homeMovie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Reproducir
            </button>
            <button className="border ml-4 text-zinc-100 border-gray-300 py-2 px-5">
              Ver más tarde
            </button>
          </div>
          <p className="text-gray-400 font-sm">
            Realizado: {homeMovie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(homeMovie?.overview ,150)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;