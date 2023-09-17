import { fetchMovieDetails, movie } from "@/services/movies";
import { GET } from "./api/route";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-regular-svg-icons/faStar";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons/faDotCircle";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import Image from "next/image";

export default async function Movie({ params }: { params: {id: string} }) {
  const movie: movie = await fetchMovieDetails(params.id);

  return (
    <div className="col-span-9 p-8">
      {/* video poster */}
      <div className="h-96 rounded-3xl shadow-sm flex items-center justify-center relative overflow-hidden">
        <Image src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt={movie.title} fill className="absolute -z-10" objectFit="cover" />
        <div className="text-white  flex flex-col justify-center items-center z-10">
          <span className=" bg-slate-200/50 rounded-full flex justify-center items-center h-20 w-20">
            <FontAwesomeIcon width={30} icon={faPlay} />
          </span>
          <span className="font-bold text-lg">Watch Trailer</span>{" "}
        </div>
      </div>
      <div className="px-4 my-8 space-y-8">
        {/* details films */}
        <div className="flex items-center gap-3 text-lg">
          <span data-testid="movie-title"> {movie.title} </span>
          <FontAwesomeIcon width={4} icon={faDotCircle} />
          <span data-testid="movie-release-date" className="hidden">
            {moment(movie.release_date!, "YYYY-MM-DD").format()}
          </span>
          <span> {movie.release_date!.slice(0, 4)} </span>
          <span data-testid="movie-runtime" className="hidden">
            {movie.runtime}
          </span>
          <FontAwesomeIcon width={4} icon={faDotCircle} />
          <span>PG-13</span>
          <FontAwesomeIcon width={4} icon={faDotCircle} />
          <span>
            {moment.duration(movie.runtime!, "minute").hours()}h {movie.runtime! % 60}m
          </span>
          &nbsp;
          {movie.genres!.map(({ name, id }) => (
            <span key={id} className="text-[#BE123C] py-0 px-2 text-xs rounded-full bg-slate-50/50 border border-red-50">
              {name}
            </span>
          ))}
          <div className=" flex ml-auto items-center gap-1">
            <FontAwesomeIcon width={20} icon={faStar} className="text-yellow-400" />
            <span className="text-gray-400 pb-0.5">{movie.vote_average.toFixed(1)} </span>
            <span> | {movie.vote_count >= 1000 ? Math.floor(movie.vote_count / 1000) + "k" : movie.vote_count}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 space-y-4">
            <div data-testid="movie-overview">{movie.overview}</div>
            <div>Director : <span className="text-[#BE123C]">???</span></div>
            <div> Writers : <span className="text-[#BE123C]">???</span></div>
            <div> Stars : <span className="text-[#BE123C]">???</span></div>
            {/* <div> Writers : ???</div> */}
          </div>
          <div className="col-span-1">...</div>
        </div>
      </div>
    </div>
  );
}
