import { redirect } from 'next/navigation'

export const metadata = {
  title: "Fyr Lois: La Clave Para El Éxito de tu Hijo Es El Inglés",
  description: "Acompañamiento académico de primer nivel, adaptado a su etapa y competencias en inglés, durante todo el año escolar.",
}

export default function AnoEscolarLayout({ children }) {
  redirect('https://regresoaclases.fyrlois.com')
}
