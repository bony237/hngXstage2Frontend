import TopMovies from "@/components/TopMovies";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import movies from "@/fixtures/movies.json";
import iconApp from "@/app/icon.png";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import menu_icon from "@/images/menu.png";
import imdb from "@/images/imdb.png";
import apple_icon from "@/images/apple_icon.png";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons/faPlayCircle";

const posterMovieData = movies.find(({ id }) => id === 155)!;

export default function Home() {
  return (
    <div className="font-bold flex flex-col">
      <header id="hero_header" className="w-full relative py-8 px-20 text-white">
        <Image src={`https://image.tmdb.org/t/p/original${posterMovieData?.backdrop_path}`} alt={posterMovieData.title} fill className="absolute -z-10" objectFit="cover" />

        <div className=" flex gap-4 justify-between z-10 ">
          <div className="flex items-center gap-4">
            <Image src={iconApp} width={40} alt="icon" />
            <div className="text-2xl">MovieBox</div>
          </div>

          {/* search box */}
          <div className="border-2 rounded-lg w-1/3 flex items-center p-2 font-normal self-center">
            <span>What do you want to watch?</span>
            <FontAwesomeIcon width={20} className="ml-auto" icon={faSearch} />
          </div>

          <div className="flex items-center gap-4">
            <div className="text-lg">Sign in</div>
            <Image src={menu_icon} width={30} alt="menu" />
          </div>
        </div>

        <div className="w-1/4 my-20 space-y-4 ">
          <div className="text-4xl"> {posterMovieData.original_title} </div>
          <div className="flex gap-2 items-center font-normal px-2">
            <Image src={imdb} alt="imdb" />
            <span>{(posterMovieData.vote_average! * 10).toFixed(1)} / 100</span>
            <div className="ml-10 flex items-center gap-2">
              <Image src={apple_icon} alt="popularity" />
              <span> {Math.round(posterMovieData.popularity!)}% </span>
            </div>
          </div>
          <div className="font-normal"> {posterMovieData.overview} </div>
          <button className="bg-[#BE123C] flex w-1/2 rounded-lg px-4 py-2 gap-2 justify-center items-center">
            <FontAwesomeIcon width={20} icon={faPlayCircle} />

            <span>WATCH TRAILER</span>
          </button>
        </div>
      </header>
      <main id="movies">
        <TopMovies />
      </main>

      <footer className="flex flex-col items-center pb-14 w-full space-y-4 mt-auto ">
        <div className=" flex gap-10 justify-center">
          <FontAwesomeIcon width={20} icon={faSquareFacebook} />
          <FontAwesomeIcon width={20} icon={faInstagram} />
          <FontAwesomeIcon width={20} icon={faTwitter} />
          <FontAwesomeIcon width={20} icon={faYoutube} />
        </div>
        <div className=" flex gap-10 justify-center">
          <span>Conditions of Use</span>
          <span>Privacy & Policy</span>
          <span>Press Room</span>
        </div>
        <div className="text-center text-gray-500">© 2021 MovieBox by Adriana Eka Prayudha</div>
      </footer>
    </div>
  );
}
