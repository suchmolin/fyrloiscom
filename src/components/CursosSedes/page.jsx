import { data } from "@/data/cursos"
import Image from "next/image"
import SingleCourse from "../SingleCourse/page"
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
          <SingleCourse
            key={item.id}
            item={item}
            sede={sedeData.id}
            comprar={true}
          />
        ))}
      </div>
    </div>
  )
}
