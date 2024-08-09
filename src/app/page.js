import Customers from "@/components/Customers/page"
import Diferenciadores from "@/components/Diferenciadores/page"
import FAQSection from "@/components/FAQSection/page"
import Footer from "@/components/Footer/page"
import Hero from "@/components/Hero/page"
import Navbar from "@/components/Navbar/page"
import SeccionBlog from "@/components/SeccionBlog/page"
import SedePrincipal from "@/components/SedePrincipal/page"

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col font-[lato]">
      <Navbar />
      <Hero />
      <Diferenciadores />
      <SedePrincipal />
      <Customers />
      <FAQSection />
      <SeccionBlog />
      <Footer />
    </main>
  )
}
