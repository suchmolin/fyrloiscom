import { GoogleTagManager } from "@next/third-parties/google"
import "./globals.css"
export const metadata = {
  title: "Fyr Lois",
  description: "Fyr Lois",
}

export default async function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <GoogleTagManager gtmId="GTM-T7XPF2MQ" />
      <body>{children}</body>
    </html>
  )
}
