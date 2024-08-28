import { useLocale } from "next-intl"
import Image from "next/image"

export default function SingleCourse({ key, item, comprar, sede }) {
  const locale = useLocale()
  return (
    <div
      key={item.id}
      className={`relative border border-gray-100 shadow-lg rounded-lg overflow-hidden bg-white ${comprar ? "w-11/12 sm:w-5/12 lg:w-3/12 min-h-[400px] " : "w-[300px] h-fit"}`}
    >
      <div className="relative w-full h-[150px]">
        <Image src={`/img/${item.img}`} fill objectFit="cover" alt="curso" />
      </div>
      <div
        className={`w-full flex flex-col justify-between py-4 px-4 ${comprar ? "min-h-[300px] xl:min-h-[250px]" : "min-h-[270px] xl:min-h-[200px]"}`}
      >
        <div className="flex flex-col gap-5 py-3">
          <div className="flex justify-between border-b border-gray-200 pb-3">
            <h4 className="text-[#000b7a]">{item.title}</h4>
            <p className="text-[#bb29b9]">${item.price}</p>
          </div>
          <p className="text-gray-500 text-sm">{item.description}</p>
        </div>
        {comprar && (
          <a
            href={`/${locale}/courses/${item.id}?s=${sede}`}
            className="mx-auto w-full bg-[#000b7a] text-center py-2 text-white rounded-md"
          >
            Comprar
          </a>
        )}
      </div>
    </div>
  )
}
