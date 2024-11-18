import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { GoArrowRight } from "react-icons/go"
import ResumeTest from "../ResumeTest/page"

export default function ResultTestSection({
  result,
  testdata,
  personal,
  answer,
}) {
  const locale = useLocale()
  const t = useTranslations("Test")
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="relative w-[200px] sm:w-[280px] aspect-square">
        <Image
          src="/img/testOk.png"
          objectFit="contain"
          layout="fill"
          alt="test"
        />
      </div>
      <p className="text-center text-3xl sm:text-5xl font-bold text-[#001a70]">
        {t("pb")} <br /> {result} / {testdata.length}
      </p>
      <div className="w-10/12 flex justify-center items-center">
        <ResumeTest result={result} answer={answer} />
      </div>
      <a
        href={`/${locale}/sedes`}
        className="dropShadow3 pr-1 pl-4 py-1 bg-white/80 rounded-full flex gap-3 justify-between items-center hover:bg-white transition-all duration-300 w-fit"
      >
        {t("vercursos")}
        <span className="p-2 rounded-full bg-[#9ee701]">
          <GoArrowRight className="text-gray-800" />
        </span>
      </a>
    </div>
  )
}
