import Customers from "@/components/Customers/page"
import Diferenciadores from "@/components/Diferenciadores/page"
import FAQSection from "@/components/FAQSection/page"
import Hero from "@/components/Hero/page"
import SeccionBlog from "@/components/SeccionBlog/page"
import SeccionMiss from "@/components/SeccionMiss/page"
import SedePrincipal from "@/components/SedePrincipal/page"
import TestNivelacion from "@/components/TestNivelacion/page"
import { useTranslations } from "next-intl"

export default function Home() {
  const t = useTranslations("SedePrincipal")
  return (
    <main className="flex w-full min-h-screen flex-col font-[lato]">
      <Hero />
      <TestNivelacion />
      <Diferenciadores curva={true} />
      <SedePrincipal boton={t("button")} href="sedes" />
      <Customers />
      <FAQSection />
      <SeccionMiss />
      <SeccionBlog />
    </main>
  )
}
