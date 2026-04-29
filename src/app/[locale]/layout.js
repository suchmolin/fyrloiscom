import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import Navbar from "@/components/Navbar/page"
import Footer from "@/components/Footer/page"
import WhatsappButton from "@/components/WhatsappButton/page"
import { OpenModalProvider } from "@/context/openModal"
import ModalTransition from "@/components/ModalTransition/page"

export default async function LocaleLayout({ children }) {
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <OpenModalProvider>
        <ModalTransition />
        <Navbar />
        {children}
        <WhatsappButton />
        <Footer />
      </OpenModalProvider>
    </NextIntlClientProvider>
  )
}
