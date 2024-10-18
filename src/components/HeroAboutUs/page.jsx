import { useTranslations } from "next-intl"
import Image from "next/image"
import CountersAboutUs from "../CountersAboutUs/page"
import { IoIosArrowDown } from "react-icons/io"

export default function HeroAboutUs() {
  const t = useTranslations("AboutUs.HeroAboutUs")
  return (
    <div className=" w-full min-h-screen font-[lato] flex flex-col items-center justify-center">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-center w-full h-screen font-[lato]">
        <div className="w-11/12 sm:w-5/12 flex flex-col justify-center sm:pt-60  md:pt-[70px] sm:pr-10 mb-10 md:mb-0">
          <div className="w-full h-full">
            <h1 className="flex flex-col text-[#001A70] text-4xl sm:text-5xl lg:text-6xl xxxl:text-8xl font-bold mb-4 text-center sm:text-start">
              {t("h1")}
              <span className="text-4xl sm:text-5xl xxxl:text-7xl">
                {t("h1Span")}
              </span>
            </h1>
            <p className="text-xs sm:text-sm lg:text-xl xxxl:text-3xl text-center sm:text-start">
              {t("p")}
            </p>
            <p className="mb-4 text-xs sm:text-sm lg:text-xl xxxl:text-3xl">
              {t("p2")}
            </p>
            <div className="w-full flex justify-center sm:justify-start ">
              <a
                href="#nuestraHistoria"
                className="dropShadow3 pr-1 pl-4 py-1 bg-white/80 rounded-full flex gap-3 justify-between items-center hover:bg-white transition-all duration-300 w-fit xxxl:text-5xl"
              >
                {t("button")}
                <span className="p-2 rounded-full bg-[#9ee701]">
                  <IoIosArrowDown className="text-gray-800" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative w-[300px] sm:w-[350px] md:w-[450px] lg:w-[550px] xxxl:w-[750px] aspect-square mt-32 md:mt-32">
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
