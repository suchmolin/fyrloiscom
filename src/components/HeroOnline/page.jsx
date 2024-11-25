"use client"
import { useLocale, useTranslations } from "next-intl"

import IdiomaCursosButton from "../IdiomaCursosButton/page"

export default function HeroOnline({ idioma, setIdioma, pressed, setPressed }) {
  const t = useTranslations("online.hero")
  const locale = useLocale()
  const fondo = idioma === "english" ? "bg-[url('/img/headerFondoSmOnline.png')] sm:bg-[url('/img/headerFondoMidOnline.png')] lg:bg-[url('/img/headerFondoOnline.png')]" 
  : "bg-[url('/img/headerFondoSmOnlineEsp.png')] sm:bg-[url('/img/headerFondoMidOnlineEsp.png')] lg:bg-[url('/img/headerFondoOnlineEsp.png')]"


  return (
    <div className={`flex sm:items-center  justify-center sm:justify-start w-full h-screen ${fondo}  bg-cover bg-right-top sm:bg-top bg-no-repeat`}>
      <div className="flex flex-col sm:justify-center  sm:ml-7 md:ml-0 md:px-14 xl:px-28 md:pt-[70px] sm:pr-0 mt-36 sm:-mt-20 text-center sm:text-start">
        <h1 className="hidden sm:block text-5xl lg:text-6xl text-[#001a70] font-[latoblack] mb-2">
          {t("h1")} <br /> {t("h1b")}
        </h1>
        <h1 className="block sm:hidden text-3xl xs:text-4xl text-[#001a70] font-[latoblack] mb-2">
          {t("h1a")} <br /> {t("h1a2")} <br /> {t("h1b2")}
        </h1>
        <div className=" mb-4 sm:pr-20 xs:pr-0">
          <h2 className="fontSubtitulo">
            {t("h2")} <br /> {t("h2b")}
          </h2>
        </div>
        <div className="w-full sm:w-fit flex flex-col items-center sm:items-start sm:flex-row gap-4">
          <div className="w-fit">
            <IdiomaCursosButton
              idioma={idioma}
              setState={setIdioma}
              pressed={pressed}
              setPressed={setPressed}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
