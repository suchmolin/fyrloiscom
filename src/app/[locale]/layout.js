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
  title: "Fyr Lois",
  description: "Fyr Lois",
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
