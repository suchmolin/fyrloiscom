import Image from "next/legacy/image"
import { TiStarOutline } from "react-icons/ti"
import { MdOutlineWatchLater } from "react-icons/md"
import { HiOutlineUsers } from "react-icons/hi2"
import { MdPhoneIphone } from "react-icons/md"

export default function NavBarAE() {
  return (
    <>
      <nav className="w-full min-h-[110px] absolute flex flex-col justify-center items-center z-10">
        <a
          href="#"
          className="relative lg:absolute lg:left-[100px] xl:left-[150px] 2xl:left-[200px] top-[5px] sm:top-[15px] hover:scale-105 transition-all duration-300"
        >
          <Image
            src="/img/1.png"
            alt="Fyr Lois Instituto de Inglés"
            width={190}
            height={76}
            priority
          />
        </a>
        <ul className="hidden relative sm:flex sm:h-full gap-4 sm:gap-10 font-[EastmanBold] text-[#000b7a] text-xs  xs:text-sm sm:text-xl lg:text-base xl:text-xl lg:ml-20 2xl:ml-0 mt-4 lg:mt-0">
          <li className="h-full flex items-center">
            <a
              href="#programas"
              className="items-center flex border-b-4 border-b-transparent hover:border-b-[#cdea80] transition-all duration-300"
            >
              Programas
            </a>
          </li>
          <li className="h-full flex items-center">
            <a
              href="#horarios"
              className="items-center flex border-b-4 border-b-transparent hover:border-b-[#cdea80] transition-all duration-300"
            >
              Horarios
            </a>
          </li>
          <li className="h-full flex items-center">
            <a
              href="#conocenos"
              className="items-center flex border-b-4 border-b-transparent hover:border-b-[#cdea80] transition-all duration-300"
            >
              Conócenos
            </a>
          </li>
          <li className="h-full flex items-center">
            <a
              href="#contacto"
              className="items-center flex border-b-4 border-b-transparent hover:border-b-[#cdea80] transition-all duration-300"
            >
              Contacto
            </a>
          </li>
        </ul>
        <div className="flex sm:hidden justify-center items-center w-full px-2 fixed bottom-2 z-50">
          <div className="w-full flex justify-between bg-[#f0f0f1] rounded-lg px-2 py-3 text-[10px] xs:text-[12px] text-[#000b7a]">
            <a
              href="#programas"
              className="flex flex-col justify-center items-center border-[#000b7a] xs:px-3"
            >
              <TiStarOutline className="text-2xl xs:text-3xl" />
              <p>Programas</p>
            </a>
            <a
              href="#horarios"
              className="flex flex-col justify-center items-center  border-[#000b7a] xs:px-3"
            >
              <MdOutlineWatchLater className="text-2xl xs:text-3xl" />
              <p>Horarios</p>
            </a>
            <a
              href="#conocenos"
              className="flex flex-col justify-center items-center  border-[#000b7a] xs:px-3"
            >
              <HiOutlineUsers className="text-2xl xs:text-3xl" />
              <p>Conócenos</p>
            </a>
            <a
              href="#contacto"
              className="flex flex-col justify-center items-center  xs:px-3"
            >
              <MdPhoneIphone className="text-2xl xs:text-3xl" />
              <p>Contacto</p>
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
