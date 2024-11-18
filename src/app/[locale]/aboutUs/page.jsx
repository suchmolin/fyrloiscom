import HeroAboutUs from "@/components/HeroAboutUs/page"
import NuestraHistoriaPage from "@/components/NuestraHistoriaPage/page"
import NuestraMisionPage from "@/components/NuestraMisionPage/page"
import NuestrosTeachers from "@/components/NuestrosTeachers/page"
import SedePrincipal from "@/components/SedePrincipal/page"
import { useTranslations } from "next-intl"

export default function AboutUs() {
  const t = useTranslations("SedePrincipal")
  return (
    <div className="w-full flex flex-col items-center">
      <HeroAboutUs />
      <div className="flex flex-col justify-center items-center mb-20">
        <NuestraHistoriaPage />
      </div>
      <NuestraMisionPage />
      <div className="w-full">
        <SedePrincipal boton={t("button")} href="sedes" />
      </div>
      <div className=" w-full h-full flex flex-col justify-center items-center bg-gray-100">
        <NuestrosTeachers />
      </div>
    </div>
  )
}
