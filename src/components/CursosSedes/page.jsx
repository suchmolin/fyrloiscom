import { data } from "@/data/cursos"
import Image from "next/image"
export default function CursosSedes({ sedeData }) {
  const dataCursos = data.filter((item) => sedeData.cursos.includes(item.id))

  return (
    <div className="w-full flex flex-col items-center justify-center py-20">
      <h2 className="text-center text-2xl text-[#000b7a] font-bold">
        Cursos dictados en {sedeData.title}
      </h2>
      <p className="text-gray-500 text-center mb-10">
        Elige el curso que mas se adapte a tus necesidades
      </p>
      <div className="w-10/12 flex gap-4 justify-center flex-wrap lg:flex-nowrap">
        {dataCursos.map((item) => (
          <div
            key={item.id}
            className="w-11/12 sm:w-5/12 lg:w-3/12 min-h-[400px] relative border border-gray-100 shadow-lg rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-[150px]">
              <Image
                src={`/img/${item.img}`}
                fill
                objectFit="cover"
                alt="curso"
              />
            </div>
            <div className="w-full min-h-[300px] xl:min-h-[250px] flex flex-col justify-between py-4 px-4">
              <div className="flex flex-col gap-5 py-3">
                <div className="flex justify-between border-b border-gray-200 pb-3">
                  <h4 className="text-[#000b7a]">{item.title}</h4>
                  <p className="text-[#bb29b9]">${item.price}</p>
                </div>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
              <a
                href="#"
                className="mx-auto w-full bg-[#000b7a] text-center py-2 text-white rounded-md"
              >
                Comprar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
