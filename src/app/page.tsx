import TopMovies from "@/components/TopMovies";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className="font-bold flex flex-col h-screen">
      <header id="hero_header" className=""></header>
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
