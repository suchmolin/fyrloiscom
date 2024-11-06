"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import DiferenciadoresList from "../DiferenciadoresList/page"

export default function Diferenciadores({ curva, filtro, fondoBlanco }) {
  const t = useTranslations("Diferenciadores")
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await import(`/src/${t("data")}/diferenciadores`)
        if (filtro) {
          const array = []
          filtro.forEach((item) => {
            array.push(data.find((element) => element.id === item))
          })
          setData(array)
        } else {
          setData(data)
        }
      } catch (error) {
        console.log("Error importing data", error)
      }
    }
    fetchData()
  }, [t])

  return (
    <>
      <div
        className={`relative ${fondoBlanco ? "bg-white" : "bg-[#001A70]"} pb-20 w-full flex flex-col items-center justify-center overflow-hidden`}
      >
        <h2
          className={`text-4xl font-bold ${fondoBlanco ? "text-[#001a70]" : "text-white"} text-center mt-10 mb-2`}
        >
          {t("h2")}
        </h2>
        <p className="w-10/12 sm:w-6/12 text-center text-sm sm:text-lg md:text-xl text-white mb-10 px-10 xl:px-28 ">
          {t("p")}
        </p>
        <DiferenciadoresList sombra={fondoBlanco ? true : false} data={data} />
      </div>
      {curva && (
        <div className="w-full bg-[#001a70] h-[80px] md:h-[200px]  xxl:h-[230px] xxxl:h-[250px] bg-[url('/img/fondoDif.png')] bg-cover bg-no-repeat bg-bottom -mt-1"></div>
      )}
    </>
  )
}
