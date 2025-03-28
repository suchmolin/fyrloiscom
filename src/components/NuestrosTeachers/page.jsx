"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useLocale, useTranslations } from "next-intl"
import { IoIosArrowDown } from "react-icons/io"

export default function NuestrosTeachers({ current, titleAlt }) {
  const t = useTranslations("AboutUs.NuestrosTeachers")
  const [data, setData] = useState([])
  const locale = useLocale()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await import(`/src/${t("data")}/teachersInfo.js`)
        current
          ? setData(data.filter((item) => item.id !== current))
          : setData(data)
      } catch (error) {
        console.log("Error importing data", error)
      }
    }
    fetchData()
  }, [t, current])

  return (
    <div className="w-11/12 flex flex-col items-center py-20">
      <div className="w-11/12 text-center">
        <h2 className="fontTitulo font-bold text-[#001A70] py-4">
          {titleAlt ? titleAlt : t("h2")}
        </h2>
        <p className="text-gray-500 fontSubtitulo">{t("p")}</p>
      </div>
      <div className="w-11/12 flex justify-center flex-wrap gap-7 gap-y-20 pt-28">
        {data?.map((item, index) => (
          <div
            key={index}
            className="dropShadow3 rounded-xl w-[400px] pb-3 flex flex-col items-center"
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
                  <Link href={`/${locale}/teacher/${item.id}`}>
                    {" "}
                    {item.nombre}
                  </Link>
                </h4>
                <h5 className="text-[#001A70] text-xl pb-4">{item.cargo}</h5>
                <p className="text-gray-500 text-lg">{item.descripcion}</p>
              </div>
              <div className="flex items-center justify-center md:justify-start pb-5">
                <a
                  href={`/${locale}/teacher/${item.id}`}
                  className="dropShadow3 pr-1 pl-4 py-1 bg-white/80 rounded-full flex gap-3 justify-between items-center hover:bg-white transition-all duration-300 w-fit"
                >
                  {t("verPerfil")}
                  <span className="p-2 rounded-full bg-[#9ee701]">
                    <IoIosArrowDown className="text-gray-800" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
