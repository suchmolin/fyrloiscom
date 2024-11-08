"use client"
import { useLocale, useTranslations } from "next-intl"
import { GoArrowRight } from "react-icons/go"

export default function HeroOnline() {
  const t = useTranslations("online.hero")
  const locale = useLocale()
  return (
    <div className="flex items-center md:justify-start w-full h-screen bg-[url('/img/headerFondoSmOnline.png')] sm:bg-[url('/img/headerFondoMidOnline.png')] lg:bg-[url('/img/headerFondoOnline.png')] bg-cover bg-right-top sm:bg-top bg-no-repeat">
      <div className="flex flex-col justify-center md:px-14 xl:px-28 md:pt-[70px] ml-1 xs:ml-2 md:ml-0 pr-[25%] xs:pr-[30%] sm:pr-0 -mt-20 xs:mt-0">
        <h1 className="hidden sm:block text-5xl lg:text-6xl text-[#001a70] font-[latoblack] mb-2">
          {t("h1")} <br /> {t("h1b")}
        </h1>
        <h1 className="block sm:hidden text-3xl xs:text-4xl text-[#001a70] font-[latoblack] mb-2">
          {t("h1a")} <br /> {t("h1a2")} <br /> {t("h1b2")}
        </h1>
        <div className=" mb-4 pr-20 xs:pr-0">
          <h2 className="text-sm xs:text-base sm:text-2xl lg:text-xl">
            {t("h2")} <br /> {t("h2b")}
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-fit">
          <a
            href={`/${locale}/online/courses`}
            className="dropShadow3 pr-1 pl-4 py-1 bg-white rounded-full flex gap-3 justify-between items-center transition-all duration-300 w-fit"
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
