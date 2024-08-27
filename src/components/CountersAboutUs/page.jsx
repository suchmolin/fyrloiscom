"use client";
import CountUp from "react-countup";
import { useTranslations } from "next-intl";

export default function CountersAboutUs() {
  const t = useTranslations("AboutUs.HeroAboutUs.counter");
  return (
    <div className="w-full h-[150px] bg-gray-50 flex items-center justify-center gap-0 md:gap-10 lg:gap-36 text-[#000b7a]">
      <div className="text-center">
        <CountUp
          className="text-2xl md:text-5xl font-bold"
          prefix="+"
          suffix="k"
          end={100}
          duration={5}
        />
        <p className="text-sm md:text-xl px-2">{t("p")}</p>
      </div>
      <div className="text-center">
        <CountUp
          className="text-2xl md:text-5xl font-bold"
          prefix="+"
          end={25}
          duration={5}
        />
        <p className="text-sm md:text-xl px-2">{t("p2")}</p>
      </div>
      <div className="text-center">
        <CountUp
          className="text-2xl md:text-5xl font-bold"
          prefix="+"
          end={100}
          duration={5}
        />
        <p className="text-sm md:text-xl px-2">{t("p3")}</p>
      </div>
    </div>
  );
}
