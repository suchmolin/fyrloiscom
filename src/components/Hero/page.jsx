"use client"
import { useLocale, useTranslations } from "next-intl"

import PresencialSelectorButton from "../PresencialSelectorButton/page"
import { IoIosArrowDown } from "react-icons/io"
import { GoArrowRight } from "react-icons/go"

export default function Hero() {
  const t = useTranslations("hero")
  const locale = useLocale()
  return (
    <div className="flex items-center md:justify-start w-full h-screen bg-[url('/img/headerFondoSm.png')] sm:bg-[url('/img/headerFondoMid.png')] md:bg-[url('/img/headerFondo.png')] bg-cover bg-right-top bg-no-repeat">
      <div className="flex flex-col justify-center md:px-12 lg:px-28 pt-10 md:pt-[70px] ml-1 xs:ml-5 md:ml-0 pr-[20%] xs:pr-[30%] sm:pr-0">
        <h1 className="hidden sm:block text-4xl lg:text-6xl text-white font-[latoblack] mb-2">
          {t("h1")} <br /> {t("h1b")}
        </h1>
        <h1 className="block sm:hidden text-4xl lg:text-6xl text-white font-[latoblack] mb-2">
          {t("h1a")} <br /> {t("h1a2")} <br /> {t("h1b")}
        </h1>
        <div className=" mb-4">
          <h2 className="text-xl text-white">{t("h2")}</h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-fit">
          <PresencialSelectorButton />
          <a
            href={`/${locale}/online`}
            className="pr-1 pl-4 py-1 bg-white rounded-full flex gap-3 justify-between items-center transition-all duration-300 w-fit"
          >
            {t("button2")}
            <span className="p-2 rounded-full bg-[#9ee701]">
              <GoArrowRight className="text-gray-800" />
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
