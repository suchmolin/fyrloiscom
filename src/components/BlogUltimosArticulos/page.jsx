"use client"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { useEffect, useState } from "react"
import { Spinner } from "flowbite-react"
import { GoArrowRight } from "react-icons/go"

export default function BlogUltimosArticulos({ full }) {
  const [data, setData] = useState([])
  const [blogs, setBlogs] = useState([])
  const t = useTranslations("Diferenciadores")
  const locale = useLocale()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await import(`/src/${t("data")}/blog`)
        setData(data)
      } catch (error) {
        console.log("Error importing data", error)
      }
    }
    fetchData()
  }, [t])

  useEffect(() => {
    const hoy = new Date().getTime()
    const navidad = new Date("2023-12-25T00:00:00").getTime()
    const anonuevo = new Date("2025-01-01T00:00:00").getTime()
    let blogfiltred
    if (hoy > anonuevo) {
      blogfiltred = full ? data : data.slice(0, 3)
    } else {
      if (hoy > navidad) {
        blogfiltred = full ? data.slice(1, data.length) : data.slice(1, 4)
      } else {
        blogfiltred = full ? data.slice(2, data.length) : data.slice(2, 5)
      }
    }
    setBlogs(blogfiltred)
  }, [data, full])

  return (
    <div className="w-full justify-center flex flex-wrap gap-10">
      {data.length !== 0 ? (
        blogs.map((item) => {
          return (
            <div
              key={item.id}
              className={`dropShadow2 relative flex flex-col pt-3  min-h-[400px]  rounded-lg  overflow-hidden hover:scale-[0.98] transition-all duration-300 w-[280px] xs:w-[330px]`}
            >
              <h3 className="h-[55px] text-lg font-bold text-[#001A70] py-2 px-4 leading-[22px]">
                {item?.tarjeta?.titulo}
              </h3>
              <div className="w-full">
                <div className="w-full flex justify-end px-1 items-end">
                  <div className="w-fit py-2 px-3 mt-2 mr-2  bg-[#001A70] rounded-t-xl flex justify-center items-center text-white text-sm">
                    <p>{item?.tarjeta?.categoria}</p>
                  </div>
                </div>
                <div className="px-3">
                  <div className="relative w-full h-[200px] rounded-s-[20px] rounded-b-xl overflow-hidden ">
                    <Image
                      layout="fill"
                      objectFit="cover"
                      src={`/img/${item?.tarjeta?.img}`}
                      alt={`article ${item?.tarjeta?.titulo}`}
                    />
                  </div>
                </div>
              </div>

              <div className="mx-5 pt-3 pb-16">
                <p className="text-gray-500 pb-6">
                  {item?.tarjeta?.descripcion}
                </p>
              </div>
              <div className="absolute bottom-0 w-full flex justify-end pb-5 px-5">
                <a
                  href={`/${locale}/blog/${item.id}`}
                  className="dropShadow2 pr-1 pl-4 py-1 bg-white/80 rounded-full flex gap-3 justify-between items-center hover:bg-white transition-all duration-300 w-fit"
                >
                  {t("boton")}
                  <span className="p-2 rounded-full bg-[#9ee701]">
                    <GoArrowRight className="text-gray-800" />
                  </span>
                </a>
              </div>
            </div>
          )
        })
      ) : (
        <Spinner aria-label="Extra large spinner example" size="xl" />
      )}
    </div>
  )
}
