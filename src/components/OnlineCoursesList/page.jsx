"use client"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useTranslations } from "next-intl"
import { useState, useEffect } from "react"
import SingleCourse from "../SingleCourse/page"
import { useSearchParams } from "next/navigation"
import IdiomaCursosButton from "../IdiomaCursosButton/page"
import { Carousel } from "flowbite-react"
import Slider from "react-slick"

export default function OnlineCoursesList() {
  const searchParams = useSearchParams()
  const langCourse = searchParams.get("langCourse")
  const [data, setData] = useState([])
  const [idioma, setIdioma] = useState(langCourse || "english")
  const t = useTranslations("online.OnlineCoursesList")

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

  const CursosOnline = data.filter(
    (item) => item.modalidad === "online" && item.lang === idioma
  )

  const settings = {
    speed: 500,
    infinite: true,
    dots: false,
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
    <div className="w-full flex flex-col items-center justify-center pb-20 md:-mt-48 bg-white">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#001a70] mb-3 md:mb-10">
          {t("h2")}
        </h2>
        <div className="w-fit mb-7">
          <IdiomaCursosButton setState={setIdioma} />
        </div>
      </div>
      <div className="hidden md:block w-11/12 xxl:w-10/12 slider-container">
        <Slider {...settings} className="carrusel2 pl-10">
          {CursosOnline.map((item) => (
            <div key={item.id} className="p-5">
              <SingleCourse
                item={item}
                comprar={true}
                sombra={true}
                lang={langCourse}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="h-[600px] md:hidden w-11/12 flex justify-center">
        <Carousel className="carrusel">
          {CursosOnline.map((item) => (
            <div key={item.id} className="p-5 flex justify-center">
              <SingleCourse
                item={item}
                comprar={true}
                sombra={true}
                lang={langCourse}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
