"use client"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

export default function BlogUltimosArticulos() {
  const [data, setData] = useState([])
  const t = useTranslations("Diferenciadores")

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

  return (
    <div className="w-full justify-center flex flex-wrap gap-10">
      {data?.map((item) => {
        return (
          <a
            key={item.id}
            href={`/blog/${item.id}`}
            className={`flex flex-col justify-between min-h-[400px]  rounded-lg shadow-2xl overflow-hidden hover:scale-[0.98] transition-all duration-300 w-11/12 sm:w-8/12 md:w-5/12 lg:w-3/12`}
          >
            <div className="relative w-full min-h-[300px]">
              <Image
                layout="fill"
                objectFit="cover"
                src={`/img/${item?.tarjeta?.img}`}
                alt={`article ${item?.tarjeta?.titulo}`}
              />
              <div className="absolute right-0 py-2 px-3 mt-2 mr-2  bg-[#000b7a] rounded-full flex justify-center items-center text-white">
                <p>{item?.tarjeta?.categoria}</p>
              </div>
            </div>
            <div className="mx-5 py-3 ">
              <h3 className="text-xl font-bold text-[#000b7a] py-2">
                {item?.tarjeta?.titulo}
              </h3>
              <p className="text-gray-500 pb-6">{item?.tarjeta?.descripcion}</p>
            </div>
            <div className="mx-4 py-5 text-xl text-[#000b7a] font-bold border-t-[1px] border-gray-500">
              <p className="flex gap-2">
                <span className="relative rounded-full overflow-hidden w-[50px] h-[50px]">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={`/img/${item?.tarjeta?.fotoAutor}`}
                    alt={`teacher ${item?.tarjeta?.autor}`}
                  />
                </span>
                {item?.tarjeta?.autor}
              </p>
            </div>
          </a>
        )
      })}
    </div>
  )
}
