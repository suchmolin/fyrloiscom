import FAQSection from "@/components/FAQSection/page"
import FormContactUs from "@/components/FormContactUs/page"
import MasInfoContactUs from "@/components/MasInfoContactUs/page"
import { data } from "@/data/sedes"
import { useTranslations } from "next-intl"

export default function ContactUs() {
  const t = useTranslations("contactUs.MasInfoContactUs")
  return (
    <div className="w-full flex flex-col items-center">
      <FormContactUs />
      <MasInfoContactUs titulo={t("h2")} subtitulo={t("p")} data={data[0]} />
      <div className="w-full mt-10">
        <FAQSection />
      </div>
    </div>
  )
}
