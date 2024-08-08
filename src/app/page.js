import Customers from "@/components/Customers/page"
import Diferenciadores from "@/components/Diferenciadores/page"
import Footer from "@/components/Footer/page"
import Hero from "@/components/Hero/page"
import Navbar from "@/components/Navbar/page"

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col font-[lato]">
      <Navbar />
      <Hero />
      <Diferenciadores />
      <Customers />
      <Footer />
    </main>
  )
}
