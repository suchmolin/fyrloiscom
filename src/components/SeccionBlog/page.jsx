import Link from "next/link"
import BlogUltimosArticulos from "../BlogUltimosArticulos/page"
import { useLocale, useTranslations } from "next-intl"

export default function SeccionBlog() {
  const t = useTranslations("SeccionBlog")
  const locale = useLocale()
  return (
    <div className="w-full flex flex-col items-center py-20">
      <h2 className="text-4xl font-bold text-center pb-4 px-5 text-[#001A70]">
        {t("h2")}
      </h2>
      <p className="text-center text-gray-500 text-xl">{t("p")}</p>
      <div className="w-full pt-10">
        <BlogUltimosArticulos />
      </div>
      <div className="w-full flex items-center justify-center pt-10">
        <Link
          href={`/${locale}/blog`}
          className="py-2 px-4 bg-[#9ee701] text-white rounded-full"
        >
          Ver todos
        </Link>
      </div>
    </div>
  )
}
