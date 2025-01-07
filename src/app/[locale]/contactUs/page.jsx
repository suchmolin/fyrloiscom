import { GoogleTagManager } from "@next/third-parties/google"
import FAQSection from "@/components/FAQSection/page"
import FormContactUs from "@/components/FormContactUs/page"
import MasInfoContactUs from "@/components/MasInfoContactUs/page"
import { data } from "@/data/sedes"
import { useTranslations } from "next-intl"

export default function ContactUs() {
  const t = useTranslations("contactUs.MasInfoContactUs")
  return (
    <>
      <GoogleTagManager gtmId="AW-16807419951" />
      <div className="w-full flex flex-col items-center">
        <FormContactUs />
        <MasInfoContactUs
          titulo={t("h2")}
          subtitulo={t("p")}
          data={data[0]}
          mt="-mt-32"
        />
        <div className="w-full mt-10">
          <FAQSection />
        </div>
      </div>
    </>
  )
}
