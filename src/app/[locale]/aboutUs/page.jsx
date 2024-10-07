import HeroAboutUs from "@/components/HeroAboutUs/page"
import NuestraHistoriaPage from "@/components/NuestraHistoriaPage/page"
import NuestraMisionPage from "@/components/NuestraMisionPage/page"
import NuestrosTeachers from "@/components/NuestrosTeachers/page"
import SedePrincipal from "@/components/SedePrincipal/page"

export default function aboutUs() {
  return (
    <div className="w-full flex flex-col items-center">
      <HeroAboutUs />
      <div className="flex flex-col justify-center items-center mb-20">
        <NuestraHistoriaPage />
      </div>
      <NuestraMisionPage />
      <div className="w-full">
        <SedePrincipal />
      </div>
      <div className=" w-full h-full flex flex-col justify-center items-center bg-gray-100">
        <NuestrosTeachers />
      </div>
    </div>
  )
}
