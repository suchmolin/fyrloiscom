import { useLocale } from "next-intl"
import Image from "next/image"
import { GoArrowRight } from "react-icons/go"

export default function PersonalizadoSinLimite({ data }) {
  const locale = useLocale()

  return (
    <div className="w-full bg-gray-100 flex flex-col items-center py-20">
      <h2 className="w-11/12 md:w-7/12 xl:w-6/12 xxl:w-5/12 text-2xl sm:text-4xl mb-10 text-center text-[#001a70] font-bold">
        No existe límite de edad, nuestro Curso Personalizado es la solución que
        buscas
      </h2>
      <div className="w-full lg:w-10/12 xl:w-8/12 flex justify-center  md:justify-between flex-wrap md:flex-nowrap text-[#001a70] font-bold gap-y-7">
        {data?.map((item) => (
          <div
            key={item.title}
            className="w-[180px] flex flex-col items-center text-center"
          >
            <div className="w-[100px] aspect-square relative mb-4">
              <Image
                src={item.img}
                layout="fill"
                objectFit="contain"
                alt="dif personalizado"
              />
            </div>
            <h4 className="text-2xl">{item.title}</h4>
            <h5 className="text-xl">{item.subtitle}</h5>
          </div>
        ))}
      </div>
      <a
        href={`/${locale}/contactUs`}
        className="dropShadow3 pr-1 pl-4 py-1 bg-white/80 rounded-full flex gap-3 justify-between items-center hover:bg-white transition-all duration-300 w-fit text-black disabled:opacity-50 disabled:cursor-wait mt-10"
      >
        Contáctanos
        <span className="p-2 rounded-full bg-[#9ee701]">
          <GoArrowRight className="text-gray-800" />
        </span>
      </a>
    </div>
  )
}
