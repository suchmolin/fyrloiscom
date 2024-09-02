import { Spinner } from "flowbite-react"
import Image from "next/image"

export default function DiferenciadoresList({ data }) {
  return (
    <div className="w-10/12 flex justify-center flex-wrap lg:flex-nowrap">
      {data.length !== 0 ? (
        data?.map((item) => (
          <div
            key={item.id}
            className="w-10/12 sm:w-6/12 md:w-4/12 lg:w-3/12 flex flex-col items-center px-5 mb-10 mih-h-[200px] lg:min-h-[294px]"
          >
            <div className="w-[90px] h-[90px] rounded-full border-2 border-[#000b7a] flex justify-center items-center mb-4">
              <Image
                src={item.src}
                width={item.width}
                height={item.height}
                alt={item.alt}
              />
            </div>
            <h1 className="text-lg font-bold text-[#000b7a] text-center">
              {item.title}
            </h1>
            <p className="text-sm text-gray-500 text-center">{item.subtitle}</p>
          </div>
        ))
      ) : (
        <Spinner aria-label="Extra large spinner example" size="xl" />
      )}
    </div>
  )
}
