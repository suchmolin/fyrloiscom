import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar/page"
import Footer from "@/components/Footer/page"
import "./globals.css"
import WhatsappButton from "@/components/WhatsappButton/page"
import { OpenModalProvider } from "@/context/openModal"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Fyr Lois | Curso de idiomas Online y Presencial ",
  description:
    "Clases de inglés - Español para niños y adultos | Metodología Única y Clases 100% en Vivo | Profesores Calificados | Cursos Online y Presencial",
}

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <OpenModalProvider>
            <Navbar />
            {children}
            <WhatsappButton />
            <Footer />
          </OpenModalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
