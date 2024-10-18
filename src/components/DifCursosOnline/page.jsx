"use client"
import { useTranslations } from "next-intl"
import DiferenciadoresList from "../DiferenciadoresList/page"
import { useState, useEffect } from "react"

export default function DifCursosOnline() {
  const t = useTranslations("online.DifCursosOnline")
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await import(`/src/${t("data")}/difCursosOnline`)
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
        id="conocemas"
        className="relative bg-[#001A70] pb-20 w-full flex flex-col items-center justify-center overflow-hidden"
      >
        <h2 className="text-4xl font-bold text-white text-center mt-10 mb-2">
          {t("h2")}
        </h2>
        <p className="w-10/12 sm:w-6/12 text-center text-sm sm:text-lg md:text-xl text-white mb-10 px-10 xl:px-28 ">
          {t("p")}
        </p>
        <DiferenciadoresList data={data} />
      </div>
      <div className="w-full bg-[#001a70] h-[80px] md:h-[200px]  xxl:h-[230px] xxxl:h-[250px] bg-[url('/img/fondoDif.png')] bg-cover bg-no-repeat bg-bottom -mt-1"></div>
    </>
  )
}
