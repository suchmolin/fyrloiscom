"use client"
import { useSearchParams } from "next/navigation"
import { data } from "@/data/sedes"
import { data as dataCourse } from "@/data/cursos"
import SingleCourse from "../SingleCourse/page"

export default function SimilarCourses() {
  const searchParams = useSearchParams()
  const sede = searchParams.get("s")
  const sedeData = data.find((item) => item.id === sede)

  return (
    <>
      {sedeData.cursos.map((curso) => {
        const course = dataCourse.find((item) => item.id === curso)
        return (
          <SingleCourse
            key={course.id}
            item={course}
            sede={sedeData.id}
            comprar={true}
          />
        )
      })}
    </>
  )
}
