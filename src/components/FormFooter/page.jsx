import { Label, TextInput } from "flowbite-react"
import { useTranslations } from "next-intl"
import { IoIosArrowDown } from "react-icons/io"
export default function FormFooter() {
  const t = useTranslations("Footer.form")

  return (
    <div>
      <div class="mb-3">
        <label for="nombre" class="block mb-1 text-sm text-gray-600">
          {t("input")}
        </label>
        <input
          type="text"
          id="nombre"
          class="dropShadow4 text-gray-900 border-none ring-0 text-sm rounded-full block w-full p-2.5 "
          required
        />
      </div>
      <div class="mb-3">
        <label for="email" class="block mb-1 text-sm text-gray-600">
          {t("input3")}
        </label>
        <input
          type="email"
          id="email"
          class="dropShadow4 text-gray-900 border-none ring-0 text-sm rounded-full block w-full p-2.5 "
          required
        />
      </div>
      <div class="mb-3">
        <textarea
          placeholder={t("input4")}
          rows="3"
          id="mensaje"
          class="dropShadow4 text-gray-900 border-none ring-0 text-sm rounded-lg block w-full p-2.5 "
          required
        />
      </div>
      <div className="w-full flex justify-end">
        <button className="dropShadow3 pr-1 pl-4 py-1 bg-white/70 rounded-full flex gap-3 justify-between items-center hover:bg-white transition-all duration-300 w-fit">
          {t("button")}
          <span className="p-2 rounded-full bg-[#9ee701]">
            <IoIosArrowDown className="text-gray-800" />
          </span>
        </button>
      </div>
    </div>
  )
}
