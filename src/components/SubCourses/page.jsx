"use client"

import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import SingleCourse from "../SingleCourse/page"
import { Carousel } from "flowbite-react"
import { GrStatusGood } from "react-icons/gr"

export default function SubCourses({ sub }) {
  const [data, setData] = useState([])
  const [selectedCourse, setSelectedCourse] = useState([])
  const t = useTranslations("CoursePage")

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
  }, [t, sub])

  useEffect(() => {
    const array = sub.subCurso.map((item) => {
      const resp = data.find((course) => course.id === item)

      return resp
    })

    setSelectedCourse(array)
  }, [data, sub])

  return (
    <div className="w-full bg-gray-100 flex justify-center py-10">
      <div className="w-full md:w-11/12 xl:w-10/12 flex flex-col lg:flex-row justify-center items-center">
        <div className="w-11/12 md:w-7/12 lg:w-5/12 xxl:w-4/12 flex items-center text-center lg:text-start justify-end mb-7 lg:mb-0 pr-4">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#001a70]">
            {sub.subtitulo && (
              <>
                <span className="font-normal">{sub.subtitulo}</span>
              </>
            )}
            {sub.titulo}
          </h2>
        </div>
        <div className="carrusel w-full md:w-10/12 lg:w-9/12 xl:w-7/12 xxl:w-6/12 h-[880px] sm:h-[580px] flex items-center justify-start">
          {selectedCourse.length > 1 ? (
            <Carousel>
              {selectedCourse?.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row items-center justify-center"
                  >
                    {item && <SingleCourse comprar={true} item={item} />}

                    <div className="w-[250px] h-[300px] sm:h-[370px] bg-[#ADC823] rounded-b-2xl sm:rounded-r-2xl sm:rounded-es-none  p-5 flex flex-col justify-between py-10">
                      {item?.difTarjeta?.map((dif) => (
                        <div key={dif} className="flex">
                          <div className="w-[50px]">
                            <GrStatusGood className="text-3xl text-[#001a70]" />
                          </div>
                          <p className="w-10/12 text-white font-bold text-xl sm:text-2xl">
                            {dif}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </Carousel>
          ) : (
            <div className="flex flex-col sm:flex-row items-center justify-center">
              {selectedCourse[0] && (
                <SingleCourse comprar={true} item={selectedCourse[0]} />
              )}

              <div className="w-[250px] h-[300px] sm:h-[370px] bg-[#ADC823] rounded-b-2xl sm:rounded-r-2xl sm:rounded-es-none  p-5 flex flex-col justify-between py-10">
                {selectedCourse[0]?.difTarjeta?.map((dif) => (
                  <div key={dif} className="flex">
                    <div className="w-[50px]">
                      <GrStatusGood className="text-3xl text-[#001a70]" />
                    </div>
                    <p className="w-10/12 text-white font-bold text-xl sm:text-2xl">
                      {dif}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
