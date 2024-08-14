import SedesList from "@/components/SedesList/page"
import { useTranslations } from "next-intl"

export default function sedes() {
  const t = useTranslations("sedes")
  return (
    <div className="w-full pt-40 flex flex-col items-center justify-center">
      <h1 className="text-3xl text-[#000b7a] font-bold">{t("h1")}</h1>
      <p className="text-lg text-gray-500 text-center mb-10">{t("p")}</p>
      <SedesList />
    </div>
  )
}
