"use client"
import { useSearchParams } from "next/navigation"
import { data } from "@/data/sedes"

import SingleCourse from "../SingleCourse/page"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"

export default function SimilarCourses({ online }) {
  const [dataCourse, setDataCourse] = useState([])
  const searchParams = useSearchParams()
  const sede = searchParams.get("s")
  const langCourse = searchParams.get("langCourse") || "english"
  const sedeData = data.find((item) => item.id === sede)
  const cursosOnline = dataCourse.filter((item) => item.modalidad === "online")
  const t = useTranslations("SimilarCourses")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await import(`/src/${t("data")}/cursos`)
        setDataCourse(data)
      } catch (error) {
        console.log("Error importing data", error)
      }
    }
    fetchData()
  }, [t])

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {!online
        ? sedeData?.cursos.map((curso) => {
            const course = dataCourse.find(
              (item) => item.id === curso && item.lang === langCourse
            )
            return course ? (
              <SingleCourse
                key={course.id}
                item={course}
                sede={sedeData?.id}
                comprar={true}
              />
            ) : null
          })
        : cursosOnline.map((item) => (
            <SingleCourse key={item.id} item={item} comprar={true} />
          ))}
    </div>
  )
}
