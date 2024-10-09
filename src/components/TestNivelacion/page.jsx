import { useLocale, useTranslations } from "next-intl"

export default function TestNivelacion() {
  const t = useTranslations("TestNivelacion")
  const locale = useLocale()

  return (
    <div className="w-full bg-white h-[200px] md:h-[150px] flex flex-col justify-center items-center">
      <h2 className="text-[#001A70] text-4xl lg:text-5xl text-center px-4 sm:px-0">
        <b>{t("h2")}</b>
      </h2>
      <a
        aria-label="test"
        href={`/${locale}/test`}
        className="py-2 px-7 rounded-full bg-[#9ee701] text-white text-2xl my-4 transition-all duration-300 hover:shadow-md mb-1"
      >
        {t("button")}
      </a>
    </div>
  )
}
