import { useState, useEffect } from "react";
import HomePageCard from "../HomePageCard/HomePageCard";
import { GetTrendingData } from "../../api";
import defaultImage from "./../../assets/images/fallback-poster-image_6.svg";


const TrendingDay = () => {
  const [trendingData, setTrendingData] = useState([]);

  useEffect(() => {

    GetTrendingData("day").then((response) => response.data.results)
      .then((data) => {
        setTrendingData(data);
      });
  }, []);

  return (
    <>
      {trendingData &&
        trendingData.map((movie) => {
          return (
            <HomePageCard
              key={movie.id}
              id={movie.id}
              poster_path={
                movie.poster_path
                  ? `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`
                  : defaultImage
              }
              title={movie.title || movie.name}
              release_date={movie.release_date || movie.first_air_date}
              popularity={movie.vote_average * 10}
              isMovie={movie.release_date ? "movie" : "tv"}
            />
          );
        })}
    </>
  );
};

export default TrendingDay;
