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
    <div className="w-full flex flex-col items-center justify-center text-white bg-[#001a70] -mt-20 pb-20">
      <h2 className="text-center text-3xl font-bold">
        {t("h2")}
        {sedeData.title}
      </h2>
      <p className="text-center mb-10">{t("p")}</p>
      <div className="w-11/12 flex gap-4 justify-center flex-wrap ">
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
