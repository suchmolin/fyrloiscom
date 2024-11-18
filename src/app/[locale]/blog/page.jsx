import BlogUltimosArticulos from "@/components/BlogUltimosArticulos/page"
import { useTranslations } from "next-intl"

export default function Blog() {
  const t = useTranslations("Blog")
  return (
    <div className="w-full flex flex-col items-center pt-32 pb-20">
      <div className="w-10/12 flex flex-col">
        <h2 className="text-[#001A70] text-5xl py-10 px-5 text-center font-bold">
          {t("h2")}
        </h2>
        <BlogUltimosArticulos full={true} />
      </div>
    </div>
  )
}
