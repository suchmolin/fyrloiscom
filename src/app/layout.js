import { Inter } from "next/font/google"
import { headers } from "next/headers"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Fyr Lois | Curso de idiomas Online y Presencial ",
  description:
    "Clases de inglés - Español para niños y adultos | Metodología Única y Clases 100% en Vivo | Profesores Calificados | Cursos Online y Presencial",
}

export default function RootLayout({ children }) {
  const locale = headers().get("x-next-intl-locale") ?? "en"

  return (
    <html lang={locale}>
      <head>
        <link
          rel="preload"
          href="/fonts/Lato-Black.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link rel="preload" href="/img/mapaHeader.png" as="image" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M5B53KKW');`,
          }}
        />
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M5B53KKW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
