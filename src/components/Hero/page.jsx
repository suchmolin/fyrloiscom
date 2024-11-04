"use client"
import { useLocale, useTranslations } from "next-intl"

import Image from "next/image"

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
    <div className="relative flex items-start lg:items-center md:justify-start w-full h-[750px] sm:h-[790px] lg:h-[600px] xl:h-[800px] xxl:h-[1000px] overflow-hidden">
      <div className="flex flex-col justify-center sm:pl-16 ml-1 xs:ml-5 md:ml-0 pr-[20%] xs:pr-[30%] sm:pr-0 text-[#001a70] z-10 mt-28 lg:mt-0">
        <h1 className="text-4xl xs:text-5xl sm:text-6xl xl:text-7xl font-[latoblack] mb-2 text-nowrap">
          {t("h1a")} <br /> {t("h1b")} <br /> {t("h1c")}
        </h1>

        <div className=" mb-4">
          <h2 className="text-xl sm:text-2xl xl:text-3xl ">{t("h2")}</h2>
        </div>
      </div>
      <div className=" absolute top-[210px] sm:top-[260px] lg:top-0 -left-20 sm:right-0 w-[130%] xs:w-[125%] sm:w-[700px] xl:w-[900px] xxl:w-[1200px] h-[600px] lg:h-full overflow-x-scroll">
        <div className="mapaheader relative w-[660px] sm:w-full h-full  bg-contain bg-no-repeat bg-center">
          <button className="absolute top-[286px] xl:top-[385px] xxl:top-[480px] left-[160px] sm:left-[170px] xl:left-[215px] xxl:left-[288px] cursor-pointer group">
            <div className="relative w-6 xl:w-9 xxl:w-12 aspect-square bg-[url(/img/kissimmeemapa.png)] group-hover:bg-[url(/img/kissimmeemapahover.png)] bg-contain bg-no-repeat bg-center transition-all duration-300 hover:scale-105 xxl:group-hover:scale-110 ">
              <div className="relative w-[40px] xl:w-[50px] xxl:w-[70px] aspect-square -top-9 xl:-top-11 xxl:-top-14 group-hover:-top-10 xl:group-hover:-top-12 xxl:group-hover:-top-16 group-hover:scale-105 xxl:group-hover:scale-110 transition-all duration-300">
                <Image
                  src="/img/fyrloisicon.png"
                  layout="fill"
                  objectFit="contain"
                  alt="fyrloisicon"
                />
              </div>
            </div>
          </button>
          <button className="absolute top-[332px] sm:top-[335px] xl:top-[444px] xxl:top-[558px] left-[192px] sm:left-[200px] xl:left-[260px] xxl:left-[348px] group">
            <div
              className="relative w-9 xl:w-11 xxl:w-14 aspect-square
             bg-[url(/img/venezuelamapa.png)]  group-hover:bg-[url(/img/venezuelamapahover.png)] bg-contain bg-no-repeat bg-center transition-all duration-300 hover:scale-105 xxl:hover:scale-110 cursor-pointer"
            >
              <div className="relative w-[40px] xl:w-[50px] xxl:w-[70px] aspect-square  -top-9 xl:-top-11 xxl:-top-14 group-hover:-top-10 xl:group-hover:-top-14 xxl:group-hover:-top-16 group-hover:scale-105 xxl:group-hover:scale-110 transition-all duration-300">
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
            className="relative hoveronline w-[55px] xl:w-[70px] xxl:w-[90px] aspect-square top-[230px] xl:top-[270px] xxl:top-[350px] left-[260px] sm:left-[280px] xl:left-[380px] xxl:left-[480px] group hover:scale-105 xxl:group-hover:scale-110 transition-all duration-300 cursor-pointer"
          >
            <Image
              src="/img/fyrloisicon.png"
              layout="fill"
              objectFit="contain"
              alt="fyrloisicon"
            />
            <h3 className="textnowrap absolute -bottom-7 -left-7 font-bold text-sm sm:text-base xl:text-lg text-[#001a70] text-center text-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300">
              Fyr Lois Online
            </h3>
          </button>
        </div>
      </div>
    </div>
  )
}
