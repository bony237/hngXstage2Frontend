import Image from "next/image";
import iconApp from "@/app/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHomeAlt } from "@fortawesome/free-solid-svg-icons/faHomeAlt";
import { faHomeLg } from "@fortawesome/free-solid-svg-icons/faHomeLg";
import { faTvAlt } from "@fortawesome/free-solid-svg-icons/faTvAlt";
import { faRecordVinyl } from "@fortawesome/free-solid-svg-icons/faRecordVinyl";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import Link from "next/link";

export default function MoviesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 relative ">
        <div className="sticky border rounded-r-3xl py-8 w-full h-screen">
          
          <Link href={'/'} className="flex font-bold justify-center items-center gap-6 mb-10">
            <Image src={iconApp} width={40} alt="icon" />
            <div className="text-xl">MovieBox</div>
          </Link>

          <div className="h-20 flex gap-4 pl-20 text-gray-500 font-semibold items-center">
            <FontAwesomeIcon width={20} icon={faHomeLg} />
            <span>Home</span>
          </div>

          <div className="h-20 flex gap-4 bg-[#BE123C]/10 border-r-4 border-[#BE123C] pl-20 text-gray-500 font-semibold items-center">
            <FontAwesomeIcon width={20} icon={faRecordVinyl} />
            <span className="text-[#BE123C]">Movies</span>
          </div>

          <div className="h-20 flex gap-4 pl-20 text-gray-500 font-semibold items-center">
            <FontAwesomeIcon width={20} icon={faTvAlt} />
            <span>TV Series</span>
          </div>

          <div className="h-20 flex gap-4 pl-20 text-gray-500 font-semibold items-center">
            <FontAwesomeIcon width={20} icon={faCalendar} />
            <span>Upcoming</span>
          </div>

          <div className="m-12 px-6 self-center bg-[#BE123C]/10 border border-[#BE123C] rounded-2xl pt-6 pb-4 space-y-2 flex flex-col">
            <div>Play movie quizes and earn free tickets</div>
            <div className="text-xs">50k people are playing now</div>
            <button className="mt-2 mx-auto text-xs text-[#BE123C] bg-[#BE123C]/20  px-6 rounded-full py-2 text-center">Start playing</button>
          </div>

          <div className="h-20 flex gap-4 pl-20 text-gray-500 font-semibold items-center">
            <FontAwesomeIcon width={20} icon={faSignOutAlt} />
            <span>Log Out</span>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
