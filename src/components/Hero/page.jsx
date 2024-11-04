"use client"
import { useLocale, useTranslations } from "next-intl"

import PresencialSelectorButton from "../PresencialSelectorButton/page"
import { IoIosArrowDown } from "react-icons/io"
import { GoArrowRight } from "react-icons/go"
import Image from "next/image"

export default function Hero() {
  const t = useTranslations("hero")
  const locale = useLocale()
  return (
    <div className="relative flex items-center md:justify-start w-full h-[800px]">
      <div className="flex flex-col justify-center md:px-12 lg:px-28 pt-10 md:pt-[70px] ml-1 xs:ml-5 md:ml-0 pr-[20%] xs:pr-[30%] sm:pr-0 text-[#001a70] z-10">
        <h1 className="hidden sm:block text-7xl  font-[latoblack] mb-2 text-nowrap">
          {t("h1a")} <br /> {t("h1b")} <br /> {t("h1c")}
        </h1>

        <div className=" mb-4">
          <h2 className="text-3xl ">{t("h2")}</h2>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-[900px] h-[737px] ">
        <div className="relative w-full h-full ">
          <Image
            src="/img/mapaHeader.png"
            layout="fill"
            objectFit="contain"
            alt="mapa seleccion de paises"
          />
          <div className="absolute top-[351px] left-[215px] cursor-pointer group">
            <div className="relative w-9 aspect-square bg-[url(/img/kissimmeemapa.png)] group-hover:bg-[url(/img/kissimmeemapahover.png)] bg-contain bg-no-repeat bg-center transition-all duration-300 hover:scale-105 ">
              <div className="relative w-[50px] aspect-square -top-11 group-hover:scale-105 transition-all duration-300">
                <Image
                  src="/img/fyrloisicon.png"
                  layout="fill"
                  objectFit="contain"
                  alt="fyrloisicon"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[415px] left-[260px] group">
            <div
              className="relative w-11 aspect-square
             bg-[url(/img/venezuelamapa.png)]  group-hover:bg-[url(/img/venezuelamapahover.png)] bg-contain bg-no-repeat bg-center transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="relative w-[50px] aspect-square -top-11 group-hover:scale-105 transition-all duration-300">
                <Image
                  src="/img/fyrloisicon.png"
                  layout="fill"
                  objectFit="contain"
                  alt="fyrloisicon"
                />
              </div>
            </div>
          </div>
          <div className="relative w-[70px] aspect-square top-[240px] left-[380px] group hover:scale-105 transition-all duration-300 cursor-pointer">
            <Image
              src="/img/fyrloisicon.png"
              layout="fill"
              objectFit="contain"
              alt="fyrloisicon"
            />
            <h3 className="absolute -bottom-7 -left-7 font-bold text-lg text-[#001a70] text-center text-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300">
              Fyr Lois Online
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
