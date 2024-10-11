"use client"
import SedesList from "@/components/SedesList/page"
import { useTranslations } from "next-intl"
import { data } from "@/data/sedes"
import { useSearchParams } from "next/navigation"

export default function Sedes() {
  const searchParams = useSearchParams()
  const lang = searchParams.get("lang")
  const sedes = lang
    ? data.filter((sede) => sede.language.includes(lang))
    : data

  const t = useTranslations("sedes")

  const array = sedes.map((sede) => sede.sectror)
  const sedesArray = [...new Set(array)]

  return (
    <div className="w-full pt-40 flex flex-col items-center justify-center">
      <h1 className="text-3xl text-[#001A70] font-bold">{t("h1")}</h1>
      <p className="text-2xl text-gray-500 text-center mb-10">{t("p")}</p>
      {/*****SEDES FULL****** */}
      <div className="w-full hidden sm:block">
        <SedesList sedes={sedes} />
      </div>
      {/*****SEDES MOBILE****** */}
      <div className="w-11/12 block sm:hidden pb-20">
        {sedesArray.map((item, i) => (
          <div key={i} className="flex flex-col justify-center">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium py-2 rounded-full dropShadow pr-2 pl-5">
                <span className="text-sm sm:text-xl"> {item}</span>
                <span className="transition group-open:rotate-180 bg-[#9ee701] rounded-full p-1 sm:p-3 group-open:bg-[#001A70] group-open:text-white">
                  <svg
                    fill="none"
                    height="27"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="27"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-600 px-10 transition-all duration-300">
                <SedesList
                  sedes={sedes.filter((sede) => sede.sectror === item)}
                />
              </p>
            </details>
          </div>
        ))}
      </div>
    </div>
  )
}
