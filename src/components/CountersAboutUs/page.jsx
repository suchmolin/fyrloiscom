"use client"
import CountUp from "react-countup"
import { useTranslations } from "next-intl"

export default function CountersAboutUs() {
  const t = useTranslations("AboutUs.HeroAboutUs.counter")
  return (
    <div className="w-full bg-[#001a70] flex flex-col md:flex-row items-center justify-center gap-0 md:gap-10 lg:gap-36 text-white py-10 gap-y-10">
      <div className="w-[200px] xl:w-[250px] text-center">
        <CountUp
          className="text-5xl font-bold"
          prefix="+"
          suffix="k"
          end={100}
          duration={5}
        />
        <p className="text-xl px-2">{t("p")}</p>
      </div>
      <div className="w-[200px] xl:w-[250px] text-center">
        <CountUp
          className="text-5xl font-bold"
          prefix="+"
          end={26}
          duration={5}
        />
        <p className="text-xl px-2">{t("p2")}</p>
      </div>
      <div className="w-[200px] xl:w-[250px] text-center">
        <CountUp
          className="text-5xl font-bold"
          prefix="+"
          end={100}
          duration={5}
        />
        <p className="text-xl px-2">{t("p3")}</p>
      </div>
    </div>
  )
}
