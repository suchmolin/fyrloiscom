"use client"
import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import DiferenciadoresList from "../DiferenciadoresList/page"

export default function DiferenciadoresOnline() {
  const t = useTranslations("online.DiferenciadoresOnline")
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await import(`/src/${t("data")}/diferenciadoresOnline`)
        setData(data)
      } catch (error) {
        console.log("Error importing data", error)
      }
    }
    fetchData()
  }, [t])

  return (
    <>
      <div className="relative bg-[#001A70] pb-20 w-full flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-4xl font-bold text-white text-center mt-10 mb-7">
          {t("h2")}
        </h2>

        <DiferenciadoresList data={data} />
      </div>
    </>
  )
}
