"use client"
import { useSearchParams } from "next/navigation"
import { data } from "@/data/sedes"

import SingleCourse from "../SingleCourse/page"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"

export default function SimilarCourses() {
  const [dataCourse, setDataCourse] = useState([])
  const searchParams = useSearchParams()
  const sede = searchParams.get("s")
  const sedeData = data.find((item) => item.id === sede)
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
    <div className="flex flex-wrap lg:flex-nowrap gap-3 justify-center">
      {sedeData?.cursos.map((curso) => {
        const course = dataCourse.find((item) => item.id === curso)
        return course ? (
          <SingleCourse
            key={course.id}
            item={course}
            sede={sedeData?.id}
            comprar={true}
          />
        ) : null
      })}
    </div>
  )
}
