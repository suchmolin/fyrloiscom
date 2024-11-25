"use client"
import { useLocale, useTranslations } from "next-intl"

import IdiomaCursosButton from "../IdiomaCursosButton/page"

export default function HeroOnline({ idioma, setIdioma, pressed, setPressed }) {
  const t = useTranslations("online.hero")
  const locale = useLocale()
  return (
    <div className="flex items-center md:justify-start w-full h-screen bg-[url('/img/headerFondoSmOnline.png')] sm:bg-[url('/img/headerFondoMidOnline.png')] lg:bg-[url('/img/headerFondoOnline.png')] bg-cover bg-right-top sm:bg-top bg-no-repeat">
      <div className="flex flex-col justify-center md:px-14 xl:px-28 md:pt-[70px] ml-4 xs:ml-4 md:ml-0 pr-[25%] xs:pr-[30%] sm:pr-0 -mt-20 xs:mt-0">
        <h1 className="hidden sm:block text-5xl lg:text-6xl text-[#001a70] font-[latoblack] mb-2">
          {t("h1")} <br /> {t("h1b")}
        </h1>
        <h1 className="block sm:hidden text-3xl xs:text-4xl text-[#001a70] font-[latoblack] mb-2">
          {t("h1a")} <br /> {t("h1a2")} <br /> {t("h1b2")}
        </h1>
        <div className=" mb-4 pr-20 xs:pr-0">
          <h2 className="fontSubtitulo">
            {t("h2")} <br /> {t("h2b")}
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-fit">
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
