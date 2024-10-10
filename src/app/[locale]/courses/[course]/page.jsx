"use client"
import DiferenciadoresList from "@/components/DiferenciadoresList/page"
import HeroSingleCourse from "@/components/HeroSingleCourse/page"
import VideoYoutube from "@/components/VideoYoutube/page"
import SimilarCourses from "@/components/SimilarCourses/page"
import { useTranslations } from "next-intl"
import { useState, useEffect } from "react"
import { FaStar } from "react-icons/fa6"
import Image from "next/image"
import ReviewCard from "@/components/ReviewCard/page"
import SubCourses from "@/components/SubCourses/page"

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

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <>
      <HeroSingleCourse courseData={data} />
      {data.subCourse ? (
        <div className="w-full flex flex-col items-center py-20 bg-[#001a70]">
          <h2 className="text-center text-xl xs:text-3xl text-white mb-4 font-bold">
            Elige el curso que mejor <br /> se adapte a ti
          </h2>

          <div className="w-full flex gap-2 justify-center flex-wrap">
            <SubCourses data={data.subCourse} />
          </div>
        </div>
      ) : (
        <div className="w-full h-fit flex justify-center bg-[#001a70] py-20">
          <DiferenciadoresList data={data.difCourses} />
        </div>
      )}
      <div className="w-full h-fit flex justify-center pb-20">
        <div className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 h-fit]">
          <h2 className="text-3xl font-bold text-[#001A70] text-center my-3 sm:my-10">
            {t("h2")}
          </h2>
          <VideoYoutube
            href={
              "https://www.youtube.com/embed/UKz1ZAASx_M?si=BA8fUqxUQnV4V96m"
            }
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center bg-gray-100">
        <div className="w-10/12 pb-10">
          <h2 className="text-3xl font-bold text-[#001A70] text-center mt-10 mb-5">
            {t("h2b")}
          </h2>
          <div className="hidden sm:flex w-full gap-5 flex-wrap justify-center">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
          <div className="flex sm:hidden w-full gap-5 flex-wrap justify-center">
            <ReviewCard />
          </div>
        </div>
        <div className="w-full h-[80px] md:h-[250px]  xxl:h-[300px] xxxl:h-[280px] bg-[url('/img/curvaAzul.png')] bg-cover bg-no-repeat bg-bottom -mt-1"></div>
      </div>
      <div className="w-full flex justify-center py-10 bg-[#001a70] -mt-2  md:-mt-20">
        {data.subCourse ? (
          <div className="w-full flex justify-center py-10 bg-[#001a70] -mt-2  md:-mt-20">
            <div className="w-full h-fit flex justify-center bg-[#001a70]">
              <DiferenciadoresList data={data.difCourses} />
            </div>
          </div>
        ) : (
          <div className="w-10/12 flex flex-col gap-2 -mt-10">
            <h2 className="text-3xl font bold text-white pb-2 text-center font-bold mb-5">
              {t("h2c")}
            </h2>
            <div className="w-full flex gap-2 justify-center flex-wrap">
              <SimilarCourses />
            </div>
          </div>
        )}
      </div>
    </>
  )
}
