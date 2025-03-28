"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslations } from "next-intl";
import SingleCourse from "../SingleCourse/page";
import { useState, useEffect } from "react";
import IdiomaCursosButton from "../IdiomaCursosButton/page";
import { useSearchParams } from "next/navigation";
import TestNivelacion from "../TestNivelacion/page";
import Slider from "react-slick";
import { Carousel } from "flowbite-react";

export default function CursosSedes({ sedeData }) {
  const searchParams = useSearchParams();
  const langCourse = searchParams.get("langCourse");
  const [data, setData] = useState([]);
  const [idioma, setIdioma] = useState(langCourse || "english");
  const t = useTranslations("CursosSedes");
  const dataCursos = data.filter(
    (item) => sedeData.cursos.includes(item.id) && item.lang === idioma
  );

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
          dots: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await import(`/src/${t("data")}/cursos`);
        setData(data);
      } catch (error) {
        console.log("Error importing data", error);
      }
    };
    fetchData();
  }, [t]);

  return (
    <>
      <div
        id="cursossede"
        className="w-full flex flex-col items-center justify-center text-white bg-[#001a70] -mt-2 md:-mt-56 pb-20 overflow-hidden px-5"
      >
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center mb-10 ">
          <div className="flex flex-col justify-center">
            <h2 className="text-center fontTitulo font-bold">
              {t("h2")}
              {sedeData.title}
            </h2>
            <p className="text-center fontSubtitulo">{t("p")}</p>
          </div>
          {sedeData.language.length > 1 && (
            <IdiomaCursosButton setState={setIdioma} />
          )}
        </div>
        <div className="w-11/12 xxl:w-10/12 slider-container">
          <Slider {...settings} className="pb-10 sm:pb-0 sm:pl-10">
            {dataCursos.map((item) => (
              <div key={item.id}>
                <div className="w-full flex flex-col items-center justify-center">
                  <SingleCourse
                    item={item}
                    sede={sedeData.id}
                    comprar={true}
                    lang={langCourse}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {idioma === "english" && <TestNivelacion />}
    </>
  );
}
