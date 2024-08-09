import Image from "next/image"
import { data } from "@/data/diferenciadores"

export default function Diferenciadores() {
  return (
    <div className="relative top2 pb-10 sm:pb-[80px] w-full flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-[#000b7a] text-center mt-10 mb-2">
        ¿Porqué elegirnos?
      </h2>
      <p className="w-10/12 sm:w-6/12 text-center text-sm sm:text-base md:text-lg text-gray-500 mb-10">
        Diseñamos una metodología única que brinda una experiencia completa de
        aprendizaje del idioma al estudiante, como una herramienta para lograr
        su proyecto de vida
      </p>
      <div className="w-10/12 flex justify-center flex-wrap lg:flex-nowrap">
        {data?.map((item) => (
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
        ))}
      </div>
      <Image
        className="absolute rotate-45 right-0 opacity-[2%] scale-[2] md:scale-100"
        src="/img/elegirnos.png"
        width={600}
        height={10}
        alt="elegisnos"
      />
    </div>
  )
}
