import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar/page"
import Footer from "@/components/Footer/page"
import "./globals.css"
import WhatsappButton from "@/components/WhatsappButton/page"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Fyrlois",
  description: "Fyrlois",
}

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <WhatsappButton />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
