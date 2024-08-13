import FormContactUs from "@/components/FormContactUs/page"
import MasInfoContactUs from "@/components/MasInfoContactUs/page"

export default function contactUs() {
  return (
    <div className="w-full flex flex-col items-center">
      <FormContactUs />
      <MasInfoContactUs />
    </div>
  )
}
