import { FiMapPin } from "react-icons/fi"
import { FiPhone } from "react-icons/fi"
import { useTranslations, useLocale } from "next-intl"
import Image from "next/image"
import { IoIosArrowDown } from "react-icons/io"

export default function HeroSede({ sedeData }) {
  const locale = useLocale()
  const t = useTranslations("SedePrincipal")

  return (
    <>
      <div className="w-full relative sm:mt-32 pb-10">
        <div className="w-full flex flex-col-reverse lg:flex-row relative md:-mt-10 items-center justify-center bg-white gap-10">
          <div className="relative w-[250px] sm:w-[300px] aspect-square -mt-10">
            <Image
              src={sedeData.src}
              layout="fill"
              objectFit="contain"
              alt="Sede Principal"
            />
          </div>
          <div className="flex flex-col justify-center text-white text-lg lg:-mt-20 px-5 sm:px-0 text-center sm:text-start items-center sm:items-start">
            <h2 className="text-4xl text-[#001A70] font-bold mb-3">
              Sede {sedeData.title}
            </h2>

            <p className="text-sm sm:text-xl text-[#001A70] flex gap-2 py-2 items-center">
              <span className="text-[#001A70] font-bold">
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
                <IoIosArrowDown className="text-gray-800" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-[80px] md:h-[250px]  xxl:h-[300px] xxxl:h-[270px] bg-[url('/img/curvaAzul.png')] bg-cover bg-no-repeat bg-bottom -mt-1"></div>
    </>
  )
}
