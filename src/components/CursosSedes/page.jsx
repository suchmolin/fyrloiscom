"use client"

import { useTranslations } from "next-intl"
import SingleCourse from "../SingleCourse/page"
import { useState, useEffect } from "react"
import IdiomaCursosButton from "../IdiomaCursosButton/page"
import { useSearchParams } from "next/navigation"
import TestNivelacion from "../TestNivelacion/page"

export default function CursosSedes({ sedeData }) {
  const searchParams = useSearchParams()
  const langCourse = searchParams.get("langCourse")
  const [data, setData] = useState([])
  const [idioma, setIdioma] = useState(langCourse || "english")
  const t = useTranslations("CursosSedes")
  const dataCursos = data.filter(
    (item) => sedeData.cursos.includes(item.id) && item.lang === idioma
  )

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
    <>
      <div
        id="cursossede"
        className="w-full flex flex-col items-center justify-center text-white bg-[#001a70] -mt-2 md:-mt-56 pb-20"
      >
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center mb-10 ">
          <div className="flex flex-col justify-center">
            <h2 className="text-center text-5xl font-bold">
              {t("h2")}
              {sedeData.title}
            </h2>
            <p className="text-center text-2xl">{t("p")}</p>
          </div>
          {sedeData.language.length > 1 && (
            <IdiomaCursosButton setState={setIdioma} />
          )}
        </div>
        <div className="w-11/12 flex gap-4 justify-center flex-wrap ">
          {dataCursos.map((item) => (
            <SingleCourse
              key={item.id}
              item={item}
              sede={sedeData.id}
              comprar={true}
              lang={langCourse}
            />
          ))}
        </div>
      </div>
      {idioma === "english" && <TestNivelacion />}
    </>
  )
}
