"use client"

import { useTranslations } from "next-intl"
import SingleCourse from "../SingleCourse/page"
import { useState, useEffect } from "react"

export default function CursosSedes({ sedeData }) {
  const [data, setData] = useState([])
  const t = useTranslations("CursosSedes")
  const dataCursos = data.filter((item) => sedeData.cursos.includes(item.id))

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

  return (
    <div className="w-full flex flex-col items-center justify-center py-20">
      <h2 className="text-center text-2xl text-[#000b7a] font-bold">
        {t("h2")}
        {sedeData.title}
      </h2>
      <p className="text-gray-500 text-center mb-10">{t("p")}</p>
      <div className="w-10/12 flex gap-4 justify-center flex-wrap lg:flex-nowrap">
        {dataCursos.map((item) => (
          <SingleCourse
            key={item.id}
            item={item}
            sede={sedeData.id}
            comprar={true}
          />
        ))}
      </div>
    </div>
  )
}
