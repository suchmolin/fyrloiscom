import { FiMapPin } from "react-icons/fi"
import { GiRotaryPhone } from "react-icons/gi"
import { useTranslations, useLocale } from "next-intl"
import Image from "next/image"
import { IoIosArrowDown } from "react-icons/io"

export default function SedePrincipal() {
  const locale = useLocale()
  const t = useTranslations("SedePrincipal")
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row relative -mt-2 md:-mt-10 items-center justify-center z-10 bg-white pb-10 gap-10">
      <div className="flex flex-col justify-center text-white text-lg lg:-mt-20 px-5 sm:px-0 text-center sm:text-start items-center sm:items-start">
        <h2 className="text-4xl text-[#001A70] font-bold mb-3">
          {t("h2")} Kissimmee
        </h2>

        <p className="text-sm sm:text-xl text-[#001A70] flex gap-2 py-2 items-center">
          <span className="text-[#001A70] font-bold">
            <FiMapPin />
          </span>{" "}
          928 East Osceola Parkway, Kissimmee, FL 34744
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
          +1 (305) 5105259
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
      <div className="relative w-[250px] sm:w-[300px] aspect-square -mt-10">
        <Image
          src="/img/sedePrincipal.png"
          layout="fill"
          objectFit="contain"
          alt="Sede Principal"
        />
      </div>
    </div>
  )
}
