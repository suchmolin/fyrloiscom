import { Spinner } from "flowbite-react"
import Image from "next/image"

export default function DiferenciadoresList({ data, sombra }) {
  if (!data) return null
  return (
    <div
      className={`w-11/12 flex flex-wrap justify-center lg:grid grid-cols-6 justify-items-center gap-7 just`}
    >
      {data?.length !== 0 ? (
        data?.map((item, index) => {
          if (!item) return null

          const isLastRow = index >= Math.floor(data.length / 3) * 3
          const isLastRowIncomplete = data.length % 3 !== 0
          const isLastItemInRow = index === data.length - 2

          return (
            <div
              key={item.id}
              className={`w-[310px] xs:w-[340px] sm:w-[360px] lg:w-[300px] xl:w-[380px] ${sombra ? "dropShadow3" : ""} xxl:w-[430px] bg-white flex flex-col items-center px-5 xs:px-7 lg:px-6 xl:px-10 xxl:px-12 rounded-2xl py-5 hover:scale-[101%] transition-all duration-300 col-span-2 ${
                isLastRow && isLastRowIncomplete && isLastItemInRow
                  ? "col-start-2"
                  : ""
              }`}
            >
              <div className="w-[90px] xxl:w-[120px] aspect-square rounded-full bg-gray-100 flex justify-center items-center mb-4">
                <Image
                  src={item.src}
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                />
              </div>
              <h1 className="text-2xl font-bold text-[#001A70] text-center mb-2">
                {item.title}
              </h1>
              {item.subtitle && (
                <p className="text-xl text-gray-500 text-center">
                  {item.subtitle}
                </p>
              )}
            </div>
          )
        })
      ) : (
        <Spinner aria-label="Extra large spinner example" size="xl" />
      )}
    </div>
  )
}
