import Image from "next/image"
import "./page.css"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"

import { GoArrowRight } from "react-icons/go"
import { Carousel } from "flowbite-react"

export default function SeccionMiss() {
  const t = useTranslations("SeccionMiss")
  const locale = useLocale()
  return (
    <div className="w-full">
      <div className="area1">
        <ul className="circles1">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="h-[950px] sm:h-[1000px] lg:h-[650px] w-full bg-[#001A70] flex  flex-col lg:flex-row justify-center items-center py-10 lg:py-0 ">
          <Carousel pauseOnHover>
            <div className="flex w-full h-full justify-center items-center">
              <div className="w-11/12 md:w-10/12 lg:w-6/12 px-0 md:px-10 lg:pr-20 flex flex-col items-center lg:items-start">
                <h3 className="text-3xl md:text-5xl text-white font-bold pb-5 text-center sm:text-start">
                  {t("h3")}
                </h3>
                <div className="relative w-[280px] xs:w-[300px] sm:w-[450px] aspect-square block lg:hidden">
                  <Image
                    src="/img/hectorSandarti.png"
                    alt="Alejandra Conde - Miss World"
                    objectFit="contain"
                    layout="fill"
                  />
                </div>
                <p className="text-white text-lg py-4">{t("p")}</p>
                <p className="text-white text-xl py-4">{t("p2")}</p>
                <a
                  href={`/${locale}/aboutUs`}
                  className="pr-1 pl-4 py-1 bg-white rounded-full flex gap-3 justify-between items-center hover:bg-white transition-all duration-300 w-fit mt-5 z-10"
                >
                  {t("link")}
                  <span className="p-2 rounded-full bg-[#9ee701]">
                    <GoArrowRight className="text-gray-800" />
                  </span>
                </a>
              </div>
              <div className="">
                <div className="relative w-[430px] aspect-square hidden lg:block">
                  <Image
                    src="/img/hectorSandarti.png"
                    alt="Alejandra Conde - Miss World"
                    objectFit="contain"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}
