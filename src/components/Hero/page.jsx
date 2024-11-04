"use client"
import { useLocale, useTranslations } from "next-intl"

import Image from "next/image"
import { useEffect } from "react"

export default function Hero() {
  const t = useTranslations("hero")
  const locale = useLocale()

  const onHoverOnline = (action) => {
    const divMapa = document.querySelector(".mapaheader")
    action === "enter"
      ? (divMapa.style.backgroundImage = "url(/img/mapaheaderhover.png)")
      : (divMapa.style.backgroundImage = "url(/img/mapaHeader.png)")
  }

  return (
    <div className="relative flex items-center md:justify-start w-full h-[800px] xxl:h-[1000px]">
      <div className="flex flex-col justify-center pl-16 ml-1 xs:ml-5 md:ml-0 pr-[20%] xs:pr-[30%] sm:pr-0 text-[#001a70] z-10">
        <h1 className="hidden sm:block text-7xl font-[latoblack] mb-2 text-nowrap">
          {t("h1a")} <br /> {t("h1b")} <br /> {t("h1c")}
        </h1>

        <div className=" mb-4">
          <h2 className="text-3xl ">{t("h2")}</h2>
        </div>
      </div>
      <div className=" absolute top-0 right-0 w-[900px] xxl:w-[1200px] h-full">
        <div className="mapaheader relative w-full h-full  bg-contain bg-no-repeat bg-center">
          <button className="absolute top-[385px] xxl:top-[480px] left-[215px] xxl:left-[288px] cursor-pointer group">
            <div className="relative w-9 xxl:w-12 aspect-square bg-[url(/img/kissimmeemapa.png)] group-hover:bg-[url(/img/kissimmeemapahover.png)] bg-contain bg-no-repeat bg-center transition-all duration-300 hover:scale-105 xxl:group-hover:scale-110 ">
              <div className="relative w-[50px] xxl:w-[70px] aspect-square -top-11 xxl:-top-14 group-hover:-top-12 xxl:group-hover:-top-16 group-hover:scale-105 xxl:group-hover:scale-110 transition-all duration-300">
                <Image
                  src="/img/fyrloisicon.png"
                  layout="fill"
                  objectFit="contain"
                  alt="fyrloisicon"
                />
              </div>
            </div>
          </button>
          <button className="absolute top-[444px] xxl:top-[558px] left-[260px] xxl:left-[348px] group">
            <div
              className="relative w-11 xxl:w-14 aspect-square
             bg-[url(/img/venezuelamapa.png)]  group-hover:bg-[url(/img/venezuelamapahover.png)] bg-contain bg-no-repeat bg-center transition-all duration-300 hover:scale-105 xxl:hover:scale-110 cursor-pointer"
            >
              <div className="relative w-[50px] xxl:w-[70px] aspect-square -top-11 xxl:-top-14 group-hover:-top-14 xxl:group-hover:-top-16 group-hover:scale-105 xxl:group-hover:scale-110 transition-all duration-300">
                <Image
                  src="/img/fyrloisicon.png"
                  layout="fill"
                  objectFit="contain"
                  alt="fyrloisicon"
                />
              </div>
            </div>
          </button>
          <button
            onMouseOver={() => onHoverOnline("enter")}
            onMouseLeave={() => onHoverOnline("leave")}
            className="relative hoveronline w-[70px] xxl:w-[90px] aspect-square top-[270px] xxl:top-[350px] left-[380px] xxl:left-[480px] group hover:scale-105 xxl:group-hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            <Image
              src="/img/fyrloisicon.png"
              layout="fill"
              objectFit="contain"
              alt="fyrloisicon"
            />
            <h3 className="textnowrap absolute -bottom-7 -left-7 font-bold text-lg text-[#001a70] text-center text-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300">
              Fyr Lois Online
            </h3>
          </button>
        </div>
      </div>
    </div>
  )
}
