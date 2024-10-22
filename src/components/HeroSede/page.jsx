import { FiMapPin } from "react-icons/fi"
import { useTranslations, useLocale } from "next-intl"
import Image from "next/image"
import { GoArrowRight } from "react-icons/go"

export default function HeroSede({ sedeData }) {
  const locale = useLocale()
  const t = useTranslations("SedePrincipal")

  return (
    <>
      <div className="w-full relative sm:mt-32 flex justify-center">
        <div className="w-11/12 sm:w-8/12 flex flex-col lg:flex-row relative md:-mt-10 items-center justify-center bg-white gap-10">
          <div className="relative w-[250px] sm:w-[400px] aspect-square -mt-10">
            <Image
              src={sedeData.src}
              layout="fill"
              objectFit="contain"
              alt="Sede Principal"
            />
          </div>
          <div className="w-full lg:w-7/12 flex flex-col justify-center text-white text-lg lg:-mt-20 px-5 sm:px-0 text-center sm:text-start items-center sm:items-start">
            <h2 className="text-4xl text-[#001A70] font-bold mb-3">
              Sede {sedeData.title}
            </h2>

            <p className="text-sm sm:text-2xl text-[#001A70] flex gap-2 py-2 items-start">
              <span className="text-[#001A70] font-bold pt-1">
                <FiMapPin />
              </span>{" "}
              {sedeData.direccion}
            </p>
            <p className="text-base sm:text-xl text-[#001A70] flex gap-2 py-2 items-center">
              <span className="text-[#001A70] font-bold">
                <Image
                  src="/img/telefono.svg"
                  width={20}
                  height={20}
                  alt="telefono"
                />
              </span>{" "}
              {sedeData.telefono}
            </p>
            <a
              href={`/${locale}/sedes`}
              className="dropShadow pr-1 pl-4 py-1 bg-white/80 rounded-full flex gap-3 text-black justify-between items-center hover:bg-white transition-all duration-300 w-fit mt-5"
            >
              {t("button")}
              <span className="p-2 rounded-full bg-[#9ee701]">
                <GoArrowRight className="text-gray-800" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-[80px] md:h-[300px]  xxl:h-[370px] xxxl:h-[370px] bg-[url('/img/curvaAzul.png')] bg-cover bg-no-repeat bg-center -mt-1"></div>
    </>
  )
}
