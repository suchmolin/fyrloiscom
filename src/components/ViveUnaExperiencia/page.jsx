"use client"
import { useTranslations } from "next-intl"
import DifAlt from "../DifAlt/page"
import { useEffect, useState } from "react"

export default function ViveUnaExperiencia() {
  const t = useTranslations("online.ViveUnaExperiencia")
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await import(
          `/src/${t("data")}/diferenciadoresOnlineAlt`
        )
        setData(data)
      } catch (error) {
        console.log("Error importing data", error)
      }
    }
    fetchData()
  }, [t])

  return (
    <div className="w-full flex flex-col justify-center items-center  md:-mt-32 pb-10">
      <div className="w-11/12 md:w-5/12 text-center">
        <h2 className="text-3xl text-[#001A70] font-bold mb-4">
          {t("h2")} <br /> {t("h2b")}
        </h2>
        <p className="text-xl text-gray-600">{t("p")}</p>
      </div>

      <DifAlt data={data} />
    </div>
  )
}
