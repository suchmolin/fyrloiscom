"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import SimilarCourses from "@/components/SimilarCourses/page"
import { useTranslations } from "next-intl"

export default function Profesor({ params }) {
  const { profesor } = params
  const [data, setData] = useState([])
  const [selected, setSelected] = useState("acercaDeMi")
  const t = useTranslations("AboutUs.NuestrosTeachers")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await import(`/src/data/teachersInfo.js`)
        setData(data.find((item) => item.id === profesor))
      } catch (error) {
        console.log("Error importing data", error)
      }
    }
    fetchData()
  }, [profesor])

  return (
    <div className="w-full flex justify-center items-center pt-32">
      <div className="w-10/12 flex flex-col lg:flex-row gap-0 lg:gap-5 items-center lg:items-start pb-20">
        <div className="relative w-11/12 sm:w-10/12 md:w-8/12 lg:w-4/12 h-screen">
          <div className="dropShadow3 sticky top-20 mt-20 rounded-xl w-full lg:w-[300px] flex flex-col items-center pb-10">
            <div className="relative w-[150px] aspect-square rounded-full overflow-hidden -mt-14">
              <Image
                src={`/img/${data?.img}`}
                layout="fill"
                objectFit="cover"
                alt="teacher1"
              />
            </div>
            <div className="w-10/12 h-full text-center flex flex-col items-center justify-between">
              <div className="">
                <h4 className="text-[#000b7a] text-3xl font-bold py-2 cursor-pointer hover:text-[#90d400] transition-all duration-300">
                  {data.name}
                </h4>
                <h5 className="text-[#000b7a] text-lg pb-1">{data?.cargo}</h5>
                <p className="text-gray-500">{data?.descripcion}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col pt-10 lg:pt-0 ">
          <div className="w-11/12 sm:w-10/12 h-[70px] flex gap-1 md:gap-5 items-center justify-center ml-0 lg:ml-20">
            <button
              onClick={() => setSelected("acercaDeMi")}
              aria-label="Acerca de Nosotros"
              className={`py-2  px-2 md:px-7 whitespace-nowrap hover:mb-1 rounded-full text-bold transition-all duration-300 font-bold text-xs md:text-base ${selected === "acercaDeMi" ? "bg-[#001a70] text-white" : "bg-gradient-to-b from-white to-gray-100 dropShadow3"} `}
            >
              Acerca de mí
            </button>

            <button
              onClick={() => setSelected("habilidades")}
              aria-label="Acerca de Nosotros"
              className={`py-2  px-2 md:px-7 whitespace-nowrap hover:mb-1 rounded-full text-bold transition-all duration-300 font-bold text-xs md:text-base ${selected === "habilidades" ? "bg-[#001a70] text-white" : "bg-gradient-to-b from-white to-gray-100 dropShadow3"} `}
            >
              Habilidades
            </button>
          </div>
          <div className="px-2 sm:px-10">
            {selected === "acercaDeMi" && (
              <>
                {data?.acercaDeMi?.map((item, index) => (
                  <div key={index} className="py-5">
                    <h4 className="text-[#000b7a] text-2xl font-bold py-2">
                      {item.titulo}
                    </h4>
                    {item.texto.map((item, index) => (
                      <p key={index} className="text-gray-500 text-lg py-2">
                        {item}
                      </p>
                    ))}
                  </div>
                ))}
                <div className="relative w-full h-[250px] md:h-[380px] overflow-hidden rounded-xl">
                  <Image
                    src="/img/acercaDeMi.jpeg"
                    layout="fill"
                    objectFit="cover"
                    alt="teacher1"
                  />
                </div>
                <h4 className="text-[#000b7a] text-2xl font-bold py-5">
                  Proyectos anteriores
                </h4>
                {data?.proyectos?.map((item, index) => (
                  <p key={index} className="text-gray-500 text-lg py-2">
                    {item}
                  </p>
                ))}
              </>
            )}
            {selected === "cursos" && (
              <div className="w-full flex flex-col items-center gap-5">
                <SimilarCourses />
              </div>
            )}
            {selected === "habilidades" && (
              <>
                <h4 className="text-[#000b7a] text-2xl font-bold py-5">
                  Habilidades
                </h4>
                <ul className="list-disc pl-0 md:pl-10">
                  {data?.habilidades?.map((item, index) => (
                    <li key={index} className="text-gray-500 text-lg py-2 pl-5">
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
