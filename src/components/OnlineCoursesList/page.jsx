"use client"
import { useTranslations } from "next-intl"
import { useState, useEffect } from "react"
import SingleCourse from "../SingleCourse/page"

export default function OnlineCoursesList() {
  const [data, setData] = useState([])
  const t = useTranslations("online.OnlineCoursesList")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await import(`/src/${t("data")}/cursos`)
        setData(data)
      } catch (error) {
        console.log("Error importing data", error)
      }
    }
    fetchData()
  }, [t])

  const CursosOnline = data.filter((item) => item.modalidad === "online")

  return (
    <div className="w-full flex flex-col items-center justify-center pb-20 -mt-32">
      <div className="w-11/12 md:w-6/12 flex flex-col">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#001a70] mb-10">
          {t("h2")}
        </h2>
      </div>
      <div className="w-11/12 flex gap-4 justify-center flex-wrap ">
        {CursosOnline.map((item) => (
          <SingleCourse
            key={item.id}
            item={item}
            comprar={true}
            sombra={true}
          />
        ))}
      </div>
    </div>
  )
}
