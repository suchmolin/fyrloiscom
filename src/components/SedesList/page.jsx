"use client"
import { FiMapPin } from "react-icons/fi"
import Image from "next/image"
import { useTranslations, useLocale } from "next-intl"
import { data } from "@/data/sedes"
import { useSearchParams } from "next/navigation"

export default function SedesList() {
  const searchParams = useSearchParams()
  const lang = searchParams.get("lang")
  const locale = useLocale()
  const t = useTranslations("sedes.SedesList")
  const sedes = lang
    ? data.filter((sede) => sede.language.includes(lang))
    : data

  return (
    <div className="w-full flex gap-6 justify-center flex-wrap pb-20">
      {sedes.map((card) => (
        <div
          key={`card${card.id}`}
          className="w-10/12  sm:w-5/12 md:w-9/12 min-h-[300px] lg:w-5/12 hover:scale-[101%] transition-all duration-300 overflow-hidden rounded-xl flex flex-col md:flex-row shadow-lg border border-gray-100"
        >
          <div className="w-full md:w-5/12 h-[180px] md:h-full relative">
            <Image
              src={card.src}
              layout="fill"
              objectFit="cover"
              alt={card.title}
            />
          </div>
          <div className="w-full md:w-7/12 md:h-full flex flex-col justify-center items-center text-center gap-3 px-4 py-3">
            <h5 className="text-xl md:text-2xl font-bold tracking-tight text-[#000b7a]">
              {card.title}
            </h5>
            <p className="text-sm md:text-base w-full font-normal text-gray-500 flex">
              <FiMapPin className="text-2xl text-[#bb29b9]" /> {card.direccion}
            </p>
            <div className="w-full flex gap-2 justify-center">
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
            <a
              href={`/${locale}/sedes/${card.href}`}
              className="py-2 px-16 text-white bg-[#000b7a] rounded-lg hover:bg-[#bb29b9] transition-all duration-300"
            >
              {t("aCards")}
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
