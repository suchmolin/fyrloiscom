import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import { GoArrowRight } from "react-icons/go"
import { IoIosArrowDown } from "react-icons/io"

export default function YaEsHora() {
  const t = useTranslations("online.YaEsHora")
  const locale = useLocale()
  return (
    <>
      <div className=" w-full  font-[lato] flex flex-col items-center justify-center pt-10 bg-gray-100 pb-10">
        <div className="flex flex-col sm:flex-row items-center justify-center w-full font-[lato]">
          <div className="relative w-[300px] sm:w-[350px] md:w-[450px] lg:w-[550px] xxxl:w-[750px] aspect-square">
            <Image
              src="/img/aboutUs2.png"
              layout="fill"
              objectFit="contain"
              alt="aboutUs"
            />
          </div>
          <div className="w-11/12 sm:w-5/12 flex flex-col justify-center sm:pr-10 mb-10 md:mb-0 sm:ml-10">
            <div className="w-full h-full">
              <h1 className="flex flex-col text-[#001A70] text-4xl sm:text-5xl lg:text-6xl xxxl:text-6xl font-bold mb-4 text-center sm:text-start">
                {t("h1")}
              </h1>
              <p className="fontSubtitulo text-center sm:text-start">
                {t("p")}
              </p>
              <p className="fontSubtitulo text-center sm:text-start font-bold">
                {t("p2")}
              </p>
              <div className="w-full flex justify-center sm:justify-start mt-5">
                <a
                  href="#cursosonline"
                  className="dropShadow3 pr-1 pl-4 py-1 bg-white/80 rounded-full flex gap-3 justify-between items-center hover:bg-white transition-all duration-300 w-fit xxxl:text-5xl"
                >
                  {t("button")}
                  <span className="p-2 rounded-full bg-[#9ee701]">
                    <GoArrowRight className="text-gray-800" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100 h-[80px] md:h-[200px]  xxl:h-[230px] xxxl:h-[250px] bg-[url('/img/fondoDif.png')] bg-cover bg-no-repeat bg-bottom -mt-1"></div>
    </>
  )
}
