import { GoogleTagManager } from "@next/third-parties/google"
import "./globals.css"
export const metadata = {
  title: "Fyr Lois | Curso de idiomas Online y Presencial ",
  description:
    "Clases de inglés - Español para niños y adultos | Metodología Única y Clases 100% en Vivo | Profesores Calificados | Cursos Online y Presencial",
}

export default async function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <GoogleTagManager gtmId="GTM-M5B53KKW" />
      <body>{children}</body>
    </html>
  )
}
