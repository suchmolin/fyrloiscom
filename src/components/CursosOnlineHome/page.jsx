"use client"

import { useLocale, useTranslations } from "next-intl"
import SingleCourse from "../SingleCourse/page"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import IdiomaCursosButton from "../IdiomaCursosButton/page"

export default function CursosOnlineHome() {
  const searchParams = useSearchParams()
  const langCourse = searchParams.get("langCourse")
  const [data, setData] = useState([])
  const [idioma, setIdioma] = useState(langCourse || "english")
  const t = useTranslations("online.CursosOnlineHome")
  const locale = useLocale()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await import(`/src/${t("data")}/cursos`)
        setData(data)
      } catch (error) {
        console.log("Error importing data", error)
      }
    }
    fetchData()
  }, [t])

  const CursosOnline = data.filter(
    (item) => item.modalidad === "online" && item.lang === idioma
  )

  return (
    <div className="w-full flex flex-col items-center justify-center py-20">
      <div className="w-10/12 text-center flex flex-col items-center mb-7">
        <div className="w-11/12 md:w-8/12 flex flex-col">
          <h2 className=" text-3xl sm:text-4xl font-bold text-[#001a70] mb-3">
            {t("h2")}
          </h2>
          <p className=" text-lg sm:text-xl text-gray-600 mb-2">{t("p")}</p>
        </div>
        <div className="w-fit">
          <IdiomaCursosButton setState={setIdioma} />
        </div>
      </div>
      <div className="w-11/12 flex gap-4 justify-center flex-wrap ">
        {CursosOnline.map((item) => (
          <SingleCourse
            key={item.id}
            item={item}
            comprar={true}
            sombra={true}
            lang={langCourse}
          />
        ))}
      </div>
      <div className="w-full flex items-center justify-center pt-10">
        <Link
          href={`/${locale}/online/courses?langCourse=${idioma}`}
          className="py-2 px-4 bg-[#9ee701] text-white rounded-full"
        >
          Ver más
        </Link>
      </div>
    </div>
  )
}
