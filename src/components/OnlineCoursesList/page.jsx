"use client"
import { useTranslations } from "next-intl"
import { useState, useEffect } from "react"
import SingleCourse from "../SingleCourse/page"
import { useSearchParams } from "next/navigation"
import IdiomaCursosButton from "../IdiomaCursosButton/page"

export default function OnlineCoursesList() {
  const searchParams = useSearchParams()
  const langCourse = searchParams.get("langCourse")
  const [data, setData] = useState([])
  const [idioma, setIdioma] = useState(langCourse || "english")
  const t = useTranslations("online.OnlineCoursesList")

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
    <div className="w-full flex flex-col items-center justify-center pb-20 -mt-32">
      <div className="flex gap-10">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#001a70] mb-10">
          {t("h2")}
        </h2>
        <IdiomaCursosButton setState={setIdioma} />
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
    </div>
  )
}
