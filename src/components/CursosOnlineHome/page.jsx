"use client"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useLocale, useTranslations } from "next-intl"
import SingleCourse from "../SingleCourse/page"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import IdiomaCursosButton from "../IdiomaCursosButton/page"
import Slider from "react-slick"
import { Carousel } from "flowbite-react"

export default function CursosOnlineHome() {
  const searchParams = useSearchParams()
  const langCourse = searchParams.get("langCourse")
  const [data, setData] = useState([])
  const [idioma, setIdioma] = useState(langCourse || "english")
  const t = useTranslations("online.CursosOnlineHome")
  const locale = useLocale()

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
    dots: true,
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
    <div className="w-full flex flex-col items-center justify-center py-20">
      <div className="w-10/12 text-center flex flex-col items-center mb-7">
        <div className="w-11/12 md:w-8/12 flex flex-col">
          <h2 className=" text-3xl sm:text-4xl font-bold text-[#001a70] mb-3">
            {t("h2")}
          </h2>
          <p className=" text-lg sm:text-xl text-gray-600 mb-2">{t("p")}</p>
        </div>
        <div className="w-fit">
          <IdiomaCursosButton setState={setIdioma} />
        </div>
      </div>
      <div className="hidden md:block w-11/12 xxl:w-10/12 slider-container">
        <Slider {...settings} className="pl-10">
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
        <Carousel>
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
      <div className="w-full flex items-center justify-center pt-10">
        <Link
          href={`/${locale}/online/courses?langCourse=${idioma}`}
          className="py-2 px-4 bg-[#9ee701] text-white rounded-full"
        >
          Ver más
        </Link>
      </div>
    </div>
  )
}
