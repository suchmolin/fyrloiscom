import { useTranslations } from "next-intl"
import { GoArrowRight } from "react-icons/go"

export default function FormFooter() {
  const t = useTranslations("Footer.form")

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="nombre" className="block mb-1 text-sm text-gray-600">
          {t("input")}
        </label>
        <input
          type="text"
          id="nombre"
          className="dropShadow4 text-gray-900 border-none ring-0 text-sm rounded-full block w-full p-2.5 "
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="block mb-1 text-sm text-gray-600">
          {t("input3")}
        </label>
        <input
          type="email"
          id="email"
          className="dropShadow4 text-gray-900 border-none ring-0 text-sm rounded-full block w-full p-2.5 "
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          placeholder={t("input4")}
          rows="3"
          id="mensaje"
          className="dropShadow4 text-gray-900 border-none ring-0 text-sm rounded-lg block w-full p-2.5 "
          required
        />
      </div>
      <div className="w-full flex justify-end">
        <button className="dropShadow2 pr-1 pl-4 py-1 bg-white/70 rounded-full flex gap-3 justify-between items-center hover:bg-white transition-all duration-300 w-fit">
          {t("button")}
          <span className="p-2 rounded-full bg-[#9ee701]">
            <GoArrowRight className="text-gray-800" />
          </span>
        </button>
      </div>
    </div>
  )
}
