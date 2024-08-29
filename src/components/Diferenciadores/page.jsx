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
    <div className="relative top2 pb-10 sm:pb-[80px] w-full flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-[#000b7a] text-center mt-10 mb-2">
        {t("h2")}
      </h2>
      <p className="w-10/12 sm:w-6/12 text-center text-sm sm:text-base md:text-lg text-gray-500 mb-10">
        {t("p")}
      </p>
      <DiferenciadoresList data={data} />
      <Image
        className="absolute rotate-45 right-0 opacity-[2%] scale-[2] md:scale-100"
        src="/img/elegirnos.png"
        width={600}
        height={10}
        alt="elegisnos"
      />
    </div>
  )
}
