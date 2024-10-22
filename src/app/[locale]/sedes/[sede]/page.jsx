import CursosSedes from "@/components/CursosSedes/page"
import HeroSede from "@/components/HeroSede/page"
import MasInfoContactUs from "@/components/MasInfoContactUs/page"
import TestNivelacion from "@/components/TestNivelacion/page"
import { data } from "@/data/sedes"
import { useTranslations } from "next-intl"

export default function Sedes({ params }) {
  const { sede } = params
  const sedeData = data.find((item) => item.href === sede)
  const t = useTranslations("MasInfoContactUs")

  return (
    <div className="w-full flex flex-col items-center pt-36 font-[lato]">
      <HeroSede sedeData={sedeData} />
      <CursosSedes sedeData={sedeData} />
      <TestNivelacion />

      <MasInfoContactUs titulo={t("titulo")} data={sedeData} />
    </div>
  )
}
