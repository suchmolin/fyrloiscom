import Image from "next/legacy/image"
import NavBarAE from "../NavBarAE/page"

import { FaRegCirclePlay } from "react-icons/fa6"
import "./page.css"
import IconsAE from "../IconsAE/page"

import { IoArrowForwardCircleOutline } from "react-icons/io5"

export default function HeaderAE() {
  return (
    <header className="relative bg-[url('/img/AE/linear.png')] bg-no-repeat bg-bottom bg-contain w-full lg:min-h-[130vh] flex flex-col bg-[#f0f0f0] pb-10">
      <NavBarAE />
      <div className="relative w-full h-full flex  flex-row mt-10 lg:mt-0">
        <div className="w-full lg:w-4/12 xl:w-3/12 2xl:w-7/12 3xl:w-8/12 flex flex-col items-center mt-20 lg:mt-48 lg:ml-20 xl:ml-48 2xl:ml-20 ">
          <div className="flex flex-col items-center -rotate-6">
            <IconsAE />
            <h1 className="text-2xl sm:text-4xl 3xl:text-7xl text-black text-center font-[EastmanBold] flex flex-col tracking-tight">
              Un futuro prometedor <br />
              <div className="mt-1 3xl:mt-1">
                <span className="text-2xl sm:text-4xl 3xl:text-7xl px-2 pb-3 bg-[#fbd874] rounded-lg">
                  comienza
                </span>
                <span className="font-[Londrina] text-3xl sm:text-5xl 3xl:text-8xl text-[#f37eb5] ml-1">
                  aprendiendo
                </span>
              </div>
              <span className="font-[Londrina] text-3xl sm:text-5xl 3xl:text-8xl text-[#f37eb5] mt-1">
                inglés
              </span>
            </h1>
          </div>
          <a
            href="#contacto"
            className={`comienzaAhora flex justify-center items-center mt-5 sm:mt-10 bg-[#fbd874] rounded-xl text-2xl 3xl:text-5xl font-[EastmanBold] hover:bg-[#cdea80] transition-all duration-300`}
          >
            <span
              className={`px-4 py-2 rounded-xl font-bold text-white bg-[#001a6f]`}
            >
              Inicia ahora
            </span>
            <span className="flecha px-1 transition-all duration-300">
              <IoArrowForwardCircleOutline className="text-3xl 3xl:text-5xl" />{" "}
            </span>
          </a>

          <div className="w-[270px] xs:w-[370px] sm:w-[500px] 3xl:w-[1000px] aspect-video mt-5 sm:mt-16 flex items-center justify-center bg-[#f0f0f1] border-[10px] sm:border-[20px] border-[#000b7a] rounded-md ">
            <video
              src="https://firebasestorage.googleapis.com/v0/b/jsuchmolin-394bd.appspot.com/o/Video%20Final%20Landing%20page.mp4?alt=media&token=a8162bd0-dd23-4e7b-b437-0a95f69047bc"
              controls
              autoPlay
              muted
              loop
              className="w-full h-full cursor-pointer"
            ></video>
          </div>
        </div>
        <div className="hidden lg:block w-full h-[700px] xl:h-full bg-[url('/img/AE/unidas3.png')] bg-contain bg-right bg-no-repeat aspect-square"></div>
      </div>
    </header>
  )
}
