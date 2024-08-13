import HeroAboutUs from "@/components/HeroAboutUs/page"
import NuestraHistoriaPage from "@/components/NuestraHistoriaPage/page"
import NuestrosTeachers from "@/components/NuestrosTeachers/page"
import SedePrincipal from "@/components/SedePrincipal/page"

export default function aboutUs() {
  return (
    <>
      <HeroAboutUs />
      <div className="flex flex-col justify-center items-center mb-20">
        <NuestraHistoriaPage />
      </div>
      <SedePrincipal />
      <div className=" w-full h-full flex flex-col justify-center items-center">
        <NuestrosTeachers />
      </div>
    </>
  )
}
