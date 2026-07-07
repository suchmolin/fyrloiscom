"use client"
import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import DiferenciadoresList from "../DiferenciadoresList/page"

export default function DiferenciadoresOnline({ idioma = "english" }) {
  const t = useTranslations("online.DiferenciadoresOnline")
  const [data, setData] = useState([])
  const h2Key = idioma === "spanish" ? "h2Spanish" : "h2English"

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
        <h2 className="fontTitulo font-bold text-white text-center mt-10 mb-7">
          {t(h2Key)}
        </h2>

        <DiferenciadoresList data={data} />
      </div>
    </>
  )
}
