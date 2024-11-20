"use client"
import { useState } from "react"
import HorariosPresencialAE from "../HorariosPresencialAE/page"
import HorariosOnlineAE from "../HorariosOnlineAE/page"
import BotonAE from "../BotonAE/page"

export default function HorariosAE() {
  const [selector, setSelector] = useState("presencial")

  return (
    <div
      id="horarios"
      className="w-full min-h-screen flex justify-center lg:-mt-40"
    >
      <div className="relative w-full md:w-11/12 rounded-3xl bg-white pt-10 pb-20 sm:pb-32 px-3 xs:px-10 lg:px-20 bg-[url('/img/AE/scho.png')] bg-contain bg-no-repeat bg-bottom">
        <h3 className="pb-4 sm:pb-0 sm:absolute right-20 top-10 font-[EastmanBold] text-2xl">
          Horarios
        </h3>
        {/******************buttons***********************/}
        <div className="w-fit flex bg-[#f0f0f1] rounded-lg">
          <button
            onClick={() => setSelector("presencial")}
            className={`px-5 xs:px-10 py-2 rounded-lg transition-all duration-300 ${selector === "presencial" ? "bg-[#f37eb5] text-white shadow-xl" : ""}`}
          >
            Presencial
          </button>
          <button
            onClick={() => setSelector("online")}
            className={`px-5 xs:px-10 py-2 rounded-lg transition-all duration-300 ${selector === "online" ? "bg-[#f37eb5] text-white shadow-xl" : ""}`}
          >
            Online
          </button>
        </div>
        <div className="w-full flex justify-center py-10">
          <div className="relative w-full lg:w-11/12 xl:w-10/12 sm:min-h-[600px] bg-[url('/img/AE/cuadro-horario.webp')] bg-cover xl:bg-cover bg-center bg-no-repeat rounded-xl px-5 md:px-10 lg:px-20 pt-5 pb-24 sm:py-5 justify-center items-center">
            {selector === "presencial" ? (
              <HorariosPresencialAE />
            ) : (
              <HorariosOnlineAE />
            )}
            <div className="absolute bottom-5 left-0 w-full flex justify-center">
              <BotonAE
                texto="Elige el tuyo"
                color1="white"
                color2="#cdea80"
                colorHover="#000b7a"
                colorTexto="[#000b7a]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
