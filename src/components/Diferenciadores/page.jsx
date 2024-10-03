"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import DiferenciadoresList from "../DiferenciadoresList/page"

export default function Diferenciadores() {
  const t = useTranslations("Diferenciadores")
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await import(`/src/${t("data")}/diferenciadores`)
        setData(data)
      } catch (error) {
        console.log("Error importing data", error)
      }
    }
    fetchData()
  }, [t])

  return (
    <div className="relative bg-[#001A70] bg-[url('/img/fondoDif.png')] bg-contain bg-no-repeat bg-bottom pb-10 sm:pb-52 w-full flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-4xl font-bold text-white text-center mt-10 mb-2">
        {t("h2")}
      </h2>
      <p className="w-10/12 sm:w-6/12 text-center text-sm sm:text-base md:text-lg text-white mb-10 px-10 xl:px-32 ">
        {t("p")}
      </p>
      <DiferenciadoresList data={data} />
    </div>
  )
}
