"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import DiferenciadoresList from "../DiferenciadoresList/page"

export default function NuestraMisionPage() {
  const t = useTranslations("nuestraMision")
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await import(`/src/${t("data")}/nuestraMision`)
        setData(data)
      } catch (error) {
        console.log("Error importing data", error)
      }
    }
    fetchData()
  }, [t])

  return (
    <>
      <div className="relative bg-[#001A70] pb-10 w-full flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-4xl font-bold text-white text-center mt-10 mb-10">
          {t("h2")}
        </h2>

        <DiferenciadoresList data={data} />
      </div>
      <div className="w-full bg-[#001a70] h-[80px] md:h-[200px] bg-[url('/img/fondoDif.png')] bg-cover bg-no-repeat bg-bottom -mt-1"></div>
    </>
  )
}
