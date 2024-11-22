"use client"
import { useState, useEffect } from "react"
import { useLocale, useTranslations } from "next-intl"
import DiferenciadoresList from "../DiferenciadoresList/page"
import { useSearchParams } from "next/navigation"

export default function Diferenciadores({ curva, filtro, fondoBlanco }) {
  const t = useTranslations("Diferenciadores")
  const [data, setData] = useState([])
  const searchParams = useSearchParams()
  const lang = searchParams.get("langCourse")
  const locale = useLocale()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await import(`/src/${t("data")}/diferenciadores`)
        if (lang === "spanish") {
          const comp =
            locale === "es"
              ? "Profesores certificados CELTA - TEFL"
              : "CELTA - TEFL certified teachers"
          const indice = data.findIndex((item) => item.title === comp)
          data[indice].title =
            locale === "es"
              ? "Profesores certificados CELTA"
              : "CELTA certified teachers"
        }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t])

  return (
    <>
      <div
        className={`relative ${fondoBlanco ? "bg-white" : "bg-[#001A70]"} pb-20 w-full flex flex-col items-center justify-center overflow-hidden`}
      >
        <h2
          className={`fontTitulo font-bold ${fondoBlanco ? "text-[#001a70]" : "text-white"} text-center mt-10 mb-2`}
        >
          {t("h2")}
        </h2>
        <p
          className={`w-[360px] sm:w-[600px] fontSubtitulo text-center fontSubtitulo ${fondoBlanco ? "text-black" : "text-white"}  mb-10 `}
        >
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
