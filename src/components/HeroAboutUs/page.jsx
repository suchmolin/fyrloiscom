import { useTranslations } from "next-intl"
import Image from "next/image"
import CountersAboutUs from "../CountersAboutUs/page"

export default function HeroAboutUs() {
  const t = useTranslations("AboutUs.HeroAboutUs")
  return (
    <div className=" w-full min-h-screen font-[lato] flex flex-col items-center justify-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full h-screen font-[lato]">
        <div className="w-5/12 flex flex-col justify-center  md:pt-[70px] pr-10 z-10 mb-10 md:mb-0">
          <div className="w-full h-full">
            <h1 className="flex flex-col text-[#001A70] text-5xl lg:text-6xl font-bold mb-4">
              {t("h1")}
              <span className="text-5xl">{t("h1Span")}</span>
            </h1>
            <p className="text-xs sm:text-sm lg:text-xl">{t("p")}</p>
            <p className="mb-4 text-xs sm:text-sm lg:text-xl">{t("p2")}</p>

            <a
              href="#nuestraHistoria"
              className="px-20 py-2 text-white bg-[#001A70] rounded-lg hover:bg-[#bb29b9] hover:shadow-xl transition-all duration-300"
            >
              {t("button")}
            </a>
          </div>
        </div>
        <div className="relative w-[500px] aspect-square mt-32">
          <Image
            src="/img/aboutUs.png"
            layout="fill"
            objectFit="contain"
            alt="aboutUs"
          />
        </div>
      </div>
      <CountersAboutUs />
    </div>
  )
}
