import { Spinner } from "flowbite-react"
import Image from "next/image"
import Link from "next/link"

export default function DifAlt({ data }) {
  return (
    <div className="w-11/12 flex gap-x-7 items-center justify-center flex-wrap mt-10">
      {data?.length !== 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="w-[300px] h-[430px] flex flex-col items-center text-center relative px-5"
          >
            <div className="w-[150px] aspect-square relative">
              <Image
                src={item.src}
                objectFit="contain"
                layout="fill"
                alt={item.alt}
              />
            </div>
            <h3 className="text-gray-700 my-5">{item.subtitle}</h3>
            <Link
              href={item.href}
              className="dropShadow3 py-2 px-4 font-bold bg-gradient-to-b from-white to-gray-100 rounded-full absolute bottom-10"
            >
              {item.boton}
            </Link>
          </div>
        ))
      ) : (
        <Spinner aria-label="Extra large spinner example" size="xl" />
      )}
    </div>
  )
}
