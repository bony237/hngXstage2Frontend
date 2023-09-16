"use client";
import { dataTopMovieTMDB_type, fetchTopMovies, movies } from "@/services/movies";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import imdb from "@/images/imdb.png";
import apple_icon from "@/images/apple_icon.png";
import movies_genres from "@/fixtures/movies_genres.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function TopMovies() {
  const [top10Movies, setTop10Movies] = useState<movies[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const respTMDBmovies: dataTopMovieTMDB_type = await fetchTopMovies();
    setTop10Movies(respTMDBmovies.results.slice(0, 9));
  }

  return (
    <section className="p-20">
      <div className=" flex items-center gap-4 pb-14">
        <h1 className="text-2xl">Featured Movie</h1>
        <span className="ml-auto font-normal text-[#BE123C]" children="See more >" />
      </div>
      <div className="grid gap-x-14 gap-y-20 grid-cols-4">
        {top10Movies.map((movie) => {
          return <MovieCard key={movie.id} {...movie} />;
        })}
      </div>
    </section>
  );
}

const MovieCard = (props: Partial<movies>) => {
  const genres = props.genre_ids!.map((genre_id) => movies_genres.find(({ id: dictId }) => dictId === genre_id)?.name);

  return (
    <div className="col-span-1" key={props.id}>
      <div className="space-y-4 relative">
        <Image className=" w-full" src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.original_title!} width={230} height={230} />
        <div className="text-gray-500 px-2">USA, {props.release_date?.slice(0, 4)}</div>
        <div className="text-lg px-2">{props.original_title}</div>
        <div className="flex gap-2 items-center font-normal px-2">
          <Image src={imdb} alt="imdb" />
          <span>{(props.vote_average! * 10).toFixed(1)} / 100</span>
          <div className="ml-auto flex items-center gap-2">
            <Image src={apple_icon} alt="popularity" />
            <span> {Math.round(props.popularity!)}% </span>
          </div>
        </div>
        <div className="text-gray-500 capitalize px-2"> {genres.join(", ")} </div>
        <div className="absolute top-0 py-2 px-6 flex items-center w-full">
          <span className=" bg-slate-200/50 px-2 py-1 rounded-full">TV SERIES</span>
          <span className=" bg-slate-200/50 text-slate-200 p-2 rounded-full ml-auto">
            <FontAwesomeIcon width={20} icon={faHeart} />
          </span>
        </div>
      </div>
    </div>
  );
};
