import { useLocale } from "next-intl"
import Image from "next/image"
import { GoArrowRight } from "react-icons/go"
import { LiaCartArrowDownSolid } from "react-icons/lia"

export default function SingleCourse({ item, comprar, sede }) {
  const locale = useLocale()
  return (
    <div
      key={item.id}
      className={`relative w-[280px] xs:w-[300px] rounded-xl bg-white py-3 px-3`}
    >
      <div className="flex justify-between">
        <h4 className="text-[#001A70] font-bold">{item.title}</h4>
      </div>
      <div className="w-full flex justify-end items-end">
        <div className="w-fit py-2 px-5 mt-2 bg-[#001A70] rounded-t-xl flex justify-center items-center text-white text-sm">
          <p>${item.price}</p>
        </div>
      </div>
      <div className="relative w-full aspect-video rounded-s-[20px] rounded-b-xl overflow-hidden">
        <Image src={`/img/${item.img}`} fill objectFit="cover" alt="curso" />
      </div>
      <div
        className={`w-full flex flex-col justify-between py-4 px-4 ${comprar ? "min-h-[250px]" : "min-h-[270px] xl:min-h-[200px]"}`}
      >
        <div className="flex flex-col gap-5 py-3">
          <p className="text-gray-500 text-sm">{item.description}</p>
        </div>

        {comprar && (
          <div className="flex justify-between ">
            <a
              href={`/${locale}/courses/${item.id}?s=${sede}`}
              className="dropShadow3 pr-1 pl-4 py-1 bg-white/80 rounded-full flex gap-3 justify-between items-center hover:bg-white transition-all duration-300 w-fit text-black"
            >
              Comprar
              <span className="p-2 rounded-full bg-[#9ee701]">
                <GoArrowRight className="text-gray-800" />
              </span>
            </a>
            <button className="dropShadow3 p-2 bg-[#9ee701] rounded-full overflow-hidden text-2xl text-black">
              <LiaCartArrowDownSolid />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
