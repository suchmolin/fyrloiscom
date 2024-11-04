"use client"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useTranslations } from "next-intl"
import SingleCourse from "../SingleCourse/page"
import { useState, useEffect } from "react"
import IdiomaCursosButton from "../IdiomaCursosButton/page"
import { useSearchParams } from "next/navigation"
import TestNivelacion from "../TestNivelacion/page"
import Slider from "react-slick"
import { Carousel } from "flowbite-react"

export default function CursosSedes({ sedeData }) {
  const searchParams = useSearchParams()
  const langCourse = searchParams.get("langCourse")
  const [data, setData] = useState([])
  const [idioma, setIdioma] = useState(langCourse || "english")
  const t = useTranslations("CursosSedes")
  const dataCursos = data.filter(
    (item) => sedeData.cursos.includes(item.id) && item.lang === idioma
  )

  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
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
        <div className="hidden sm:block w-11/12 xxl:w-10/12 slider-container">
          <Slider {...settings} className="pl-10">
            {dataCursos.map((item) => (
              <div key={item.id}>
                <SingleCourse
                  item={item}
                  sede={sedeData.id}
                  comprar={true}
                  lang={langCourse}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="h-[600px] sm:hidden w-11/12 flex justify-center">
          <Carousel>
            {dataCursos.map((item) => (
              <div key={item.id} className="flex justify-center">
                <SingleCourse
                  item={item}
                  sede={sedeData.id}
                  comprar={true}
                  lang={langCourse}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      {idioma === "english" && <TestNivelacion />}
    </>
  )
}
