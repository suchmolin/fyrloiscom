import { data } from "@/data/cursos"
export default function CursosSedes({ sedeData }) {
  const dataCursos2 = data.filter((item) => sedeData.cursos.includes(item.id))

  console.log({ dataCursos2 })

  return (
    <div className="w-full flex justify-center py-20">
      <div className="w-10/12 flex gap-4 justify-center items-center"></div>
    </div>
  )
}
