"use client"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useSearchParams } from "next/navigation"
import { data } from "@/data/sedes"
import SingleCourse from "../SingleCourse/page"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import Slider from "react-slick"
import { Carousel } from "flowbite-react"

export default function SimilarCourses({ online }) {
  const [dataCourse, setDataCourse] = useState([])
  const searchParams = useSearchParams()
  const sede = searchParams.get("s") || "2"
  const langCourse = searchParams.get("langCourse") || "english"
  const sedeData = data.find((item) => item.id === sede)
  const cursosOnline = dataCourse.filter(
    (item) => item.modalidad === "online" && item.lang === langCourse
  )
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

  const settings = {
    speed: 500,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <>
      <div className="w-10/12 sm:w-11/12 xxl:w-10/12 slider-container">
        <Slider {...settings} className="sm:pl-10 centercarrusel">
          {!online
            ? sedeData?.cursos.map((curso) => {
                const course = dataCourse.find(
                  (item) => item.id === curso && item.lang === langCourse
                )
                return course ? (
                  <div key={course.id}  className=" flex justify-center">
                    <SingleCourse
                      item={course}
                      sede={sedeData?.id}
                      comprar={true}
                    />
                  </div>
                ) : null
              })
            : cursosOnline.map((item) => (
              <div key={item.id}  className=" flex justify-center">

                <SingleCourse item={item} comprar={true} />
              </div>
              ))}
        </Slider>
      </div>
    </>
  )
}
