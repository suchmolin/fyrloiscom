import CursosSedes from "@/components/CursosSedes/page"
import HeroSede from "@/components/HeroSede/page"
import { data } from "@/data/sedes"

export default function Sedes({ params }) {
  const { sede } = params
  const sedeData = data.find((item) => item.href === sede)
  return (
    <div className="w-full pt-36">
      <HeroSede sedeData={sedeData} />
      <CursosSedes sedeData={sedeData} />
    </div>
  )
}
