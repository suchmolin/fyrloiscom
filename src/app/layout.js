import "./globals.css"
export const metadata = {
  title: "Fyr Lois",
  description: "Fyr Lois",
}

export default async function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  )
}
