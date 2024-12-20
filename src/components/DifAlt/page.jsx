import { Spinner } from "flowbite-react"
import { useLocale } from "next-intl"
import Image from "next/image"
import Link from "next/link"

export default function DifAlt({ data }) {
  const locale = useLocale()
  return (
    <div className="w-11/12 relative flex gap-x-20 gap-y-10 justify-center items-center flex-wrap mt-10">
      
      {data?.length !== 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="w-[300px] flex flex-col items-center text-center relative px-5 pb-20"
          >
            <div className="w-[150px] aspect-square relative bg-white">
              <Image
                src={item.src}
                objectFit="contain"
                layout="fill"
                alt={item.alt}
              />
            </div>
            <h3 className="text-gray-700 my-5 fontSubtitulo">{item.subtitle}</h3>
            <Link
              href={`/${locale}/${item.href}`}
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
