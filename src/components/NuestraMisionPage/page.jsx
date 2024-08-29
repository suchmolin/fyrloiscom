import { Carousel } from "flowbite-react"
import Image from "next/image"
import "./page.css"
import { useTranslations } from "next-intl"

export default function NuestraMisionPage() {
  const t = useTranslations("aboutUs")
  return (
    <div className="w-11/12 md:w-8/12 border-gray-400 border-b-[1px] pb-10 md:pb-32">
      <h2 className="text-[#000b7a] text-4xl font-bold pb-5 text-center">
        {t("h2")}
      </h2>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={7000} className="">
          <div className="flex h-full items-center justify-center bg-[#f5f7ff] ">
            <div className="w-8/12 flex flex-col items-center text-center">
              <Image
                src="/img/mision1.png"
                width={70}
                height={100}
                alt="nuestra mision"
              />
              <h4 className="text-[#000b7a] text-lg md:text-2xl py-1 md:py-5">
                {t("item1.h4")}
              </h4>
              <p className="text-gray-500 text-sm md:text-lg">{t("item1.p")}</p>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-[#f5f7ff] ">
            <div className="w-8/12 flex flex-col items-center text-center">
              <Image
                src="/img/mision2.png"
                width={70}
                height={100}
                alt="nuestra mision"
              />
              <h4 className="text-[#000b7a] text-lg md:text-2xl py-1 md:py-5">
                {t("item2.h4")}
              </h4>
              <p className="text-gray-500 text-sm md:text-lg">{t("item2.p")}</p>
            </div>
          </div>
          <div className="flex h-full items-center justify-center bg-[#f5f7ff] ">
            <div className="w-8/12 flex flex-col items-center text-center">
              <Image
                src="/img/mision3.png"
                width={70}
                height={100}
                alt="nuestra mision"
              />
              <h4 className="text-[#000b7a] text-lg md:text-2xl py-1 md:py-5">
                {t("item3.h4")}
              </h4>
              <p className="text-gray-500 text-sm md:text-lg">{t("item3.p")}</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}
