"use client"
import DiferenciadoresList from "@/components/DiferenciadoresList/page"
import HeroSingleCourse from "@/components/HeroSingleCourse/page"
import CarruselReviews from "@/components/CarruselReviews/page"
import VideoYoutube from "@/components/VideoYoutube/page"
import SimilarCourses from "@/components/SimilarCourses/page"
import { useTranslations } from "next-intl"
import { useState, useEffect } from "react"

export default function CoursePage({ params }) {
  const { course } = params
  const [data, setData] = useState([])
  const [dataDif, setDataDif] = useState([])
  const t = useTranslations("CoursePage")
  const courseData = data.find((item) => item.id === course)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await import(`/src/${t("data")}/diferenciadores`)
        setDataDif(data)
      } catch (error) {
        console.log("Error importing data", error)
      }
    }
    fetchData()
  }, [t])

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
      <HeroSingleCourse courseData={courseData} />
      <div className="w-full h-fit flex justify-center">
        <DiferenciadoresList data={dataDif} />
      </div>
      <div className="w-full h-fit flex justify-center">
        <div className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 h-fit]">
          <h2 className="text-3xl font-bold text-[#000b7a] text-center my-3 sm:my-10">
            {t("h2")}
          </h2>
          <VideoYoutube
            href={
              "https://www.youtube.com/embed/UKz1ZAASx_M?si=BA8fUqxUQnV4V96m"
            }
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full sm:w-11/12 lg:w-10/12 xl:w-8/12">
          <h2 className="text-3xl font-bold text-[#000b7a] text-center mt-10 mb-2">
            {t("h2b")}
          </h2>
          <CarruselReviews />
        </div>
      </div>
      <div className="w-full flex justify-center py-10">
        <div className="w-10/12 flex flex-col gap-2">
          <h2 className="text-3xl font bold text-[#000b7a] pb-2 text-center font-bold">
            {t("h2c")}
          </h2>
          <div className="w-full flex gap-2 justify-center">
            <SimilarCourses />
          </div>
        </div>
      </div>
    </>
  )
}
