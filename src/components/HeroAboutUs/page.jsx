import { useTranslations } from "next-intl"
import Image from "next/image"
import CountersAboutUs from "../CountersAboutUs/page"

export default function HeroAboutUs() {
  const t = useTranslations("AboutUs.HeroAboutUs")
  return (
    <div className=" w-full min-h-screen sm:h-screen font-[lato] flex flex-col items-center justify-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-start w-full h-screen font-[lato]">
        <div className="w-11/12 md:w-5/12 flex flex-col justify-center items-center md:pt-[70px] text-center px-3 xl:px-20 z-10 mb-10 md:mb-0">
          <div className="w-full h-full lg:ml-44">
            <h1 className="flex flex-col text-[#000b7a] text-5xl lg:text-7xl font-bold mb-4">
              {t("h1")}
              <span className="text-4xl">{t("h1Span")}</span>
            </h1>
            <p className="text-gray-500 text-xs sm:text-sm lg:text-base">
              {t("p")}
            </p>
            <p className="text-gray-500 mb-4 text-xs sm:text-sm lg:text-base">
              {t("p2")}
            </p>

            <a
              href="#nuestraHistoria"
              className="px-20 py-2 text-white bg-[#000b7a] rounded-lg hover:bg-[#bb29b9] hover:shadow-xl transition-all duration-300"
            >
              {t("button")}
            </a>
          </div>
        </div>
        <div className="relative w-full md:w-7/12 h-[230px] md:h-[650px] lg:h-full mt-20 sm:mt-20 md:mt-0">
          <Image
            className="scale-[] lg:scale-100"
            src="/img/aboutUs.png"
            fill
            objectFit="contain"
            alt="aboutUs"
          />
        </div>
      </div>
      <CountersAboutUs />
    </div>
  )
}
