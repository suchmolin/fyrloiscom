import { useLocale, useTranslations } from "next-intl"

export default function TestNivelacion() {
  const t = useTranslations("TestNivelacion")
  const locale = useLocale()

  return (
    <div className="w-full bg-[#000b7a] h-[200px] md:h-[150px] flex flex-col lg:flex-row lg:gap-7 justify-center items-center">
      <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl text-center px-4 sm:px-0">
        {t("h2")}{" "}
        <span className="text-[#bb29b9] font-bold">{t("h2Span")}</span>
      </h2>
      <a
        href={`/${locale}/test`}
        className="py-2 px-20 lg:px-4 rounded-lg bg-[#9ee701] text-[#000b7a] text-2xl my-4 transition-all duration-300 hover:shadow-md"
      >
        {t("button")}
      </a>
    </div>
  )
}
