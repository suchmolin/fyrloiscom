import CursosSedes from "@/components/CursosSedes/page"
import HeroSede from "@/components/HeroSede/page"
import MasInfoContactUs from "@/components/MasInfoContactUs/page"
import TestNivelacion from "@/components/TestNivelacion/page"
import { data } from "@/data/sedes"

export default function Sedes({ params }) {
  const { sede } = params
  const sedeData = data.find((item) => item.href === sede)
  return (
    <div className="w-full flex flex-col items-center pt-36 font-[lato]">
      <HeroSede sedeData={sedeData} />
      <CursosSedes sedeData={sedeData} />
      <TestNivelacion />

      <div className="w-10/12 flex flex-col items-center py-10">
        <MasInfoContactUs
          titulo={"Contactanos"}
          subtitulo={
            "Si quieres contactarnos directamente, puedes hacerlo através de estas vías."
          }
          data={sedeData}
        />
      </div>
    </div>
  )
}
