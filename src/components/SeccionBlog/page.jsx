import BlogUltimosArticulos from "../BlogUltimosArticulos/page"
import { useTranslations } from "next-intl"

export default function SeccionBlog() {
  const t = useTranslations("SeccionBlog")
  return (
    <div className="w-full flex flex-col items-center py-20">
      <h2 className="text-4xl font-bold text-center pb-4 px-5 text-[#000b7a]">
        {t("h2")}
      </h2>
      <p className="text-center text-gray-500 text-lg">{t("p")}</p>
      <div className="w-full pt-10">
        <BlogUltimosArticulos />
      </div>
    </div>
  )
}
