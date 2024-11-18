import Image from "next/image"
import { Dropdown } from "flowbite-react"
import { useTranslations, useLocale } from "next-intl"
import { IoIosArrowDown } from "react-icons/io"

export default function IdiomaCursosButton({
  idioma,
  setState,
  pressed,
  setPressed,
}) {
  const t = useTranslations("IdiomaCursosButton")

  const locale = useLocale()

  let translation
  if (locale === "es") {
    translation = idioma === "english" ? "Inglés" : "Español"
  }
  if (locale === "en") {
    translation = idioma === "english" ? "English" : "Spanish"
  }

  const labelDropDown = (
    <span className="relative flex gap-2 items-center justify-between pr-10">
      {pressed ? translation : t("button")}
      <span className="p-2 rounded-full bg-[#9ee701] absolute -right-3">
        <IoIosArrowDown className="text-gray-800" />
      </span>
    </span>
  )

  const handleIdioma = (idioma) => {
    setPressed(true)
    setState(idioma)
    document.getElementById("cursosonline").scrollIntoView()
  }

  return (
    <div className="dropShadow2 h-fit bg-white flex items-center rounded-full py-2 sm:py-2 px-4 transition-all duration-300 text-gray-900">
      <Dropdown label={labelDropDown} arrowIcon={false} inline>
        <Dropdown.Header className="w-[240px]">
          <span className="block text-sm text-[#001A70]">{t("ddTitle")}</span>
        </Dropdown.Header>
        <button className="w-full" onClick={() => handleIdioma("english")}>
          <Dropdown.Item className="flex gap-2 mr-4">
            <Image
              src="/img/united-states.png"
              width={20}
              height={20}
              alt="spanish"
            />
            {"   "}
            {t("ddItem1")}
          </Dropdown.Item>
        </button>
        <button className="w-full" onClick={() => handleIdioma("spanish")}>
          <Dropdown.Item className="flex gap-2 mr-4">
            {" "}
            <Image
              src="/img/spanish.png"
              width={20}
              height={20}
              alt="spanish"
            />
            {t("ddItem2")}
          </Dropdown.Item>
        </button>
      </Dropdown>
    </div>
  )
}
