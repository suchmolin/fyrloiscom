import CursosOnlineHome from "@/components/CursosOnlineHome/page"
import Customers from "@/components/Customers/page"
import DiferenciadoresOnline from "@/components/DiferenciadoresOnline/page"
import HeroOnline from "@/components/HeroOnline/page"
import LlevaTuProyecto from "@/components/LlevaTuProyecto/page"
import ViveUnaExperiencia from "@/components/ViveUnaExperiencia/page"
import YaEsHora from "@/components/YaEsHora/page"

export default function OnlinePage() {
  return (
    <main className="flex w-full min-h-screen flex-col font-[lato]">
      <HeroOnline />
      <Customers />
      <CursosOnlineHome />
      <DiferenciadoresOnline />
      <YaEsHora />
      <ViveUnaExperiencia />
      <LlevaTuProyecto />
    </main>
  )
}
