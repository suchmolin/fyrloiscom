"use client"
import { useLocale, useTranslations } from "next-intl"

import PresencialSelectorButton from "../PresencialSelectorButton/page"

export default function Hero() {
  const t = useTranslations("hero")
  const locale = useLocale()
  return (
    <div className="flex items-center justify-center md:justify-start w-full h-screen bg-[url('/img/headerAdolescentes.webp')] bg-cover bg-left md:bg-center">
      <div className="flex flex-col justify-center items-center px-2 sm:px-10 md:px-28 pt-[70px]">
        <h1 className="textBorder textShadowBold font-[eastmanromanblack] text-4xl sm:text-4xl md:text-5xl text-white text-center mb-2">
          {t("h1")}
        </h1>
        <h2 className="text-2xl sm:text-4xl md:text-5xl italic font-bold textShadow text-white py-2 px-4 rounded-3xl bg-[#9ee701] mb-2">
          {t("h2")}
        </h2>
        <div className=" mb-4">
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-center py-2 px-4 bg-white rounded-full text-[#000b7a] shadow-xl flex flex-col">
            {t("h3")}
            <span>{t("h3Span")}</span>
          </h3>
        </div>
        <div className="flex gap-4">
          <PresencialSelectorButton />
          <a
            href="https://fyrloisonline.vercel.app"
            className="px-4 py-2 text-white bg-[#000b7a] rounded-lg hover:bg-[#bb29b9] transition-all duration-300"
          >
            {t("button2")}
          </a>
        </div>
      </div>
    </div>
  )
}
