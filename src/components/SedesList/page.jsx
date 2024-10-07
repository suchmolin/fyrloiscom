"use client"

import Image from "next/image"
import { useTranslations, useLocale } from "next-intl"
import { IoIosArrowDown } from "react-icons/io"

export default function SedesList({ sedes }) {
  const locale = useLocale()
  const t = useTranslations("sedes.SedesList")

  return (
    <div className="w-full flex gap-10 justify-center flex-wrap pb-20">
      {sedes.map((card) => (
        <div
          key={`card${card.id}`}
          className="dropShadow3 relative  w-[280px] md:w-[500px] px-3 py-3 hover:scale-[101%] transition-all duration-300 rounded-xl flex flex-col md:flex-row items-center md:items-start bg-gradient-to-b from-white to-gray-200"
        >
          <div className="w-[200px] aspect-square relative">
            <Image
              src={card.src}
              layout="fill"
              objectFit="contain"
              alt={card.title}
            />
          </div>
          <div className="md:relative w-full md:w-7/12 md:h-full flex flex-col justify-center items-center gap-3 px-4 py-3">
            <h5 className="text-xl md:text-2xl font-bold tracking-tight text-[#001A70]">
              {card.title}
            </h5>
            <p className="text-sm md:text-base w-full font-normal text-gray-500 flex text-center md:text-start">
              {card.direccion}
            </p>
            <div className="w-full flex gap-2 justify-center pb-10">
              {card.language.some((item) => item === "en") && (
                <Image
                  src="/img/united-states.png"
                  width={20}
                  height={20}
                  alt="ingles"
                />
              )}
              {card.language.some((item) => item === "es") && (
                <Image
                  src="/img/spanish.png"
                  width={20}
                  height={20}
                  alt="español"
                />
              )}
            </div>
            <div className="absolute bottom-3 md:bottom-0 px-5 w-full mt-2 flex justify-center md:justify-end">
              <a
                href={`/${locale}/sedes/${card.href}`}
                className="pr-1 pl-4 py-1 bg-white/80 rounded-full flex gap-3 justify-between items-center hover:bg-white transition-all duration-300 w-fit"
              >
                {t("aCards")}
                <span className="p-2 rounded-full bg-[#9ee701]">
                  <IoIosArrowDown className="text-gray-800" />
                </span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
