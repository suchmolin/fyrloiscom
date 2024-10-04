import Customers from "@/components/Customers/page"
import Diferenciadores from "@/components/Diferenciadores/page"
import FAQSection from "@/components/FAQSection/page"
import Hero from "@/components/Hero/page"
import SeccionBlog from "@/components/SeccionBlog/page"
import SeccionMiss from "@/components/SeccionMiss/page"
import SedePrincipal from "@/components/SedePrincipal/page"
import TestNivelacion from "@/components/TestNivelacion/page"

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col font-[lato]">
      <Hero />
      <TestNivelacion />
      <Diferenciadores />
      <SedePrincipal />
      <Customers />
      <FAQSection />
      <SeccionMiss />
      <SeccionBlog />
    </main>
  )
}
