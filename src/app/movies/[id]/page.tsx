import { fetchMovieDetails, fetchMovies_releasegtedate, movie } from "@/services/movies";
import { GET } from "./api/route";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar } from "@fortawesome/free-regular-svg-icons/faStar";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons/faDotCircle";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import Image from "next/image";
import { faTicket } from "@fortawesome/free-solid-svg-icons/faTicket";
import { faList } from "@fortawesome/free-solid-svg-icons/faList";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons/faArrowDown";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons/faAngleDown";

export default async function Movie({ params }: { params: { id: string } }) {
  const movie: movie = await fetchMovieDetails(params.id);
  const directors = movie.credits?.crew.filter(({ department }) => department === "Directing").map(({ name }) => name);
  const writers = movie.credits?.crew.filter(({ department }) => department === "Editing").map(({ name }) => name);
  const stars = movie.credits?.cast
    .filter(({ known_for_department: department }) => department === "Acting")
    .sort((a, b) => b.popularity - a.popularity)
    .map(({ name }) => name);

  const _1ofMonth = moment().startOf("month").format("YYYY-MM-DD");
  const respMoviesOfTheMonth = await fetchMovies_releasegtedate(_1ofMonth);

  return (
    <div className="col-span-10 p-8">
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
            <div>
              Director : <span className="text-[#BE123C]">{directors![0]}</span>
            </div>
            <div>
              Writers : <span className="text-[#BE123C]">{writers?.join(", ")}</span>
            </div>
            <div>
              Stars : <span className="text-[#BE123C]">{stars?.slice(0, 3).join(", ")}</span>
            </div>

            <div className="flex gap-x-4 border rounded-lg items-center">
              <button className="bg-[#BE123C] text-white rounded-lg px-4 py-2 text-center">Top rated movie #65</button>
              <span>Awards 9 nominations</span>
              <FontAwesomeIcon width={40} icon={faAngleDown} className="px-4 ml-auto" />
            </div>
          </div>
          <div className="col-span-1">
            <button className="bg-[#BE123C] text-white flex w-full rounded-lg px-4 py-2 gap-2 justify-center items-center">
              <FontAwesomeIcon width={20} icon={faTicket} />
              <span>See Showtimes</span>
            </button>
            <button className="mt-2  bg-[#BE123C]/10 border border-[#BE123C]/50 flex w-full rounded-lg px-4 py-2 gap-2 justify-center items-center">
              <FontAwesomeIcon width={20} icon={faList} />
              <span>More watch options</span>
            </button>

            <div className="grid grid-cols-3 mt-8 rounded-lg overflow-hidden gap-1 relative">
              {respMoviesOfTheMonth.results.slice(0, 3).map(({ id, poster_path, title }) => (
                <div key={id}>
                  <Image className=" w-full" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} width={40} height={140} />
                </div>
              ))}
              <div className="absolute text-slate-200 bottom-0 mt-2 bg-black/30  flex w-full rounded-lg px-4 py-2 gap-2 justify-center items-center">
                <FontAwesomeIcon width={20} icon={faList} />
                <span>The Best Movies and Shows in {moment().get("month")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
