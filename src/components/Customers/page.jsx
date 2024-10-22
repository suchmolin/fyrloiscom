import Image from "next/image"
import { useTranslations } from "next-intl"
import { data } from "@/data/customers"

export default function Customers() {
  const t = useTranslations("Customers")
  return (
    <div className="relative flex flex-col items-center bg-gray-100 w-full overflow-hidden py-10">
      <h2 className="text-center text-3xl text-[#001A70] font-bold mb-2">
        {t("h2")}
      </h2>
      <p className="w-10/12 sm:w-6/12 text-center text-lg text-gray-500 mb-10">
        {t("p")}
      </p>
      <div className="w-10/12 flex justify-center flex-wrap items-center gap-10 sm:gap-20 ">
        {data.map((item) => (
          <div
            key={item.id}
            className={`relative w-[${item.width}px] h-[${item.height}px]`}
          >
            <Image
              src={item.img}
              objectFit="contain"
              layout="fill"
              alt={item.id}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
