export const metadata = {
  title: "Fyr Lois: La Clave Para El Éxito de tu Hijo Es El Inglés",
  description: "Acompañamiento académico de primer nivel, adaptado a su etapa y competencias en inglés, durante todo el año escolar.",
}

export default function AnoEscolarLayout({ children }) {
  return (
    <html translate="no" lang="es"  suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
