"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

import { useTranslations } from "next-intl"

export default function NuestrosTeachers() {
  const t = useTranslations("AboutUs.NuestrosTeachers")
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await import(`/src/${t("data")}/teachers`)
        setData(data)
      } catch (error) {
        console.log("Error importing data", error)
      }
    }
    fetchData()
  }, [t])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div className="w-11/12 flex flex-col items-center py-20">
      <div className="w-11/12 text-center">
        <h2 className="text-3xl font-bold text-[#001A70] py-4">{t("h2")}</h2>
        <p className="text-gray-500 text-xl">{t("p")}</p>
      </div>
      <div className="w-11/12 flex justify-center flex-wrap gap-20 pt-28">
        {data?.map((item, index) => (
          <div
            key={index}
            className="rounded-xl shadow-2xl w-[350px] pb-10 flex flex-col items-center"
          >
            <div className="relative w-[150px] h-[180px] rounded-full overflow-hidden -mt-14">
              <Image
                src={"/img/" + item.img}
                layout="fill"
                objectFit="cover"
                alt="teacher1"
              />
            </div>
            <div className="w-10/12 h-full text-center flex flex-col items-center justify-between">
              <div className="">
                <h4 className="text-[#001A70] text-2xl font-bold py-2 cursor-pointer hover:text-[#90d400] transition-all duration-300">
                  <Link href={item.redir}> {item.nombre}</Link>
                </h4>
                <h5 className="text-[#001A70] text-xl pb-4">{item.cargo}</h5>
                <p className="text-gray-500 text-lg">{item.descripcion}</p>
              </div>
              <div className="flex gap-10 h-[60px] items-center justify-center md:justify-start mt-5">
                <a
                  href={item.redir}
                  aria-label="Acerca de Nosotros"
                  className=" py-4 px-7 bg-[#fff] hover:bg-[#90d400] hover:mb-1 rounded-md text-bold text-[#001A70] hover:text-white border-2 border-[#001A70] hover:border-[#90d400] transition-all duration-100 font-bold text-xs md:text-base"
                >
                  {t("verPerfil")}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
