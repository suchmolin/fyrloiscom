"use client"
import CursosOnlineHome from "@/components/CursosOnlineHome/page"
import Customers from "@/components/Customers/page"
import DiferenciadoresOnline from "@/components/DiferenciadoresOnline/page"
import HeroOnline from "@/components/HeroOnline/page"

import SiguesTeniendoDudas from "@/components/SiguesTeniendoDudas/page"
import ViveUnaExperiencia from "@/components/ViveUnaExperiencia/page"
import YaEsHora from "@/components/YaEsHora/page"
import { useSearchParams } from "next/navigation"
import { useState } from "react"

export default function OnlinePage() {
  const searchParams = useSearchParams()
  const langCourse = searchParams.get("langCourse")
  const [idioma, setIdioma] = useState(langCourse || "english")
  const [pressed, setPressed] = useState(false)
  return (
    <main className="flex w-full min-h-screen flex-col font-[lato]">
      <HeroOnline
        idioma={idioma}
        setIdioma={setIdioma}
        pressed={pressed}
        setPressed={setPressed}
      />
      <CursosOnlineHome
        idioma={idioma}
        setIdioma={setIdioma}
        pressed={pressed}
        setPressed={setPressed}
      />
      <DiferenciadoresOnline />
      <YaEsHora />
      <ViveUnaExperiencia />
      <Customers />
      <SiguesTeniendoDudas />
    </main>
  )
}
