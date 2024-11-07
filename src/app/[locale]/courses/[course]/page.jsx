"use client"
import DiferenciadoresList from "@/components/DiferenciadoresList/page"
import HeroSingleCourse from "@/components/HeroSingleCourse/page"
import VideoYoutube from "@/components/VideoYoutube/page"
import SimilarCourses from "@/components/SimilarCourses/page"
import { useTranslations } from "next-intl"
import { useState, useEffect } from "react"

import ReviewsSection from "@/components/ReviewsSection/page"
import HorariosCursos from "@/components/HorariosCursos/page"
import TimeCursos from "@/components/TimeCursos/page"
import SubCourses from "@/components/SubCourses/page"
import Diferenciadores from "@/components/Diferenciadores/page"
import PersonalizadoDif from "@/components/PersonalizadoDif/page"

export default function CoursePage({ params }) {
  const { course } = params
  const [data, setData] = useState([])

  const t = useTranslations("CoursePage")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await import(`/src/${t("data")}/cursos`)
        setData(data.find((item) => item.id === course))
      } catch (error) {
        console.log("Error importing data", error)
      }
    }
    fetchData()
  }, [t, course])

  return (
    <>
      <HeroSingleCourse courseData={data} />
      <div className="w-full h-fit flex justify-center bg-[#001a70] py-20">
        <DiferenciadoresList data={data.difCourses} />
      </div>
      {(data.horarios || data.horarios2) && (
        <div className="w-full flex justify-center">
          <HorariosCursos data={data.horarios || data.horarios2} />
        </div>
      )}
      {data.time && (
        <div className="w-full flex justify-center">
          <TimeCursos data={data.time} fondoBlanco={data.difBlanco2} />
        </div>
      )}
      {data.subCursos && (
        <>
          <SubCourses sub={data.subCursos} />
        </>
      )}

      {data.personalized && <PersonalizadoDif data={data.personalized} />}

      <Diferenciadores
        filtro={data.personalized ? [1, 2, 3, 4, 5] : null}
        fondoBlanco={data.difBlanco || false}
      />
      {/*
      <div className="w-full h-fit flex justify-center pb-20">
        <div className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 h-fit]">
          <h2 className="text-3xl font-bold text-[#001A70] text-center my-3 sm:my-10">
            {t("h2")}
          </h2>
          <VideoYoutube
            href={
              "https://firebasestorage.googleapis.com/v0/b/jsuchmolin-394bd.appspot.com/o/Video%20Final%20Landing%20page.mp4?alt=media&token=a8162bd0-dd23-4e7b-b437-0a95f69047bc"
            }
          />
        </div>
      </div>
      */}
      <div className="w-full flex flex-col items-center bg-gray-100 relative">
        <ReviewsSection modalidad={data.modalidad} />

        <div className="w-full h-[80px] md:h-[250px]  xxl:h-[300px] xxxl:h-[280px] bg-[url('/img/curvaAzul.png')] bg-cover bg-no-repeat bg-bottom -mt-1"></div>
      </div>
      <div className="w-full flex justify-center pt-10 pb-20 bg-[#001a70] -mt-2  md:-mt-20">
        <div className="w-full flex flex-col gap-2 -mt-5 md:-mt-32 z-10">
          <h2 className="text-3xl font bold text-white pb-2 text-center font-bold mb-5">
            {t("h2c")}
          </h2>
          <div className="w-full flex gap-2 justify-center flex-wrap">
            <SimilarCourses online={data.modalidad === "online" || false} />
          </div>
        </div>
      </div>
    </>
  )
}
