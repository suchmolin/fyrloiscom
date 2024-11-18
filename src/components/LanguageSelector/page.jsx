"use client"
import { TfiWorld } from "react-icons/tfi"
import { Dropdown } from "flowbite-react"
import Image from "next/image"
import { usePathname, useSearchParams } from "next/navigation"
import { MdOutlineShoppingCart } from "react-icons/md"
import { useTranslations } from "next-intl"

export function LanguageSelector({ locale }) {
  const t = useTranslations("LanguageSelector")
  const path = usePathname()
  const searchParams = useSearchParams()
  const sede = searchParams.get("s")
  const lang = searchParams.get("langCourse")

  const handleRedirect = (locale) => {
    const subs = path.split("/")
    subs[1] = locale
    let url = subs.join("/") + "?"
    url = sede ? url + `s=${sede}&` : url
    url = lang ? url + `langCourse=${lang}&` : url
    location.href = url
  }
  const mundo = (
    <span className="flex gap-2 items-center bg-transparent">
      <TfiWorld />
      {locale.toUpperCase()}
    </span>
  )
  return (
    <div className="fixed lg:absolute bottom-5 lg:top-5 left-5 lg:left-auto lg:right-5 xl:right-10 text-[#001A70] text-xl z-50 flex gap-3 flex-col lg:flex-row h-fit items-center ">
      <Dropdown label={mundo} inline>
        <Dropdown.Header className="w-[200px]">
          <span className="block text-sm text-[#001A70]">{t("titulo")}</span>
        </Dropdown.Header>

        <Dropdown.Item
          onClick={() => handleRedirect("en")}
          className="flex gap-2 mr-4"
        >
          {" "}
          <Image
            src="/img/united-states.png"
            width={20}
            height={20}
            alt="english"
          />
          {t("ingles")}
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => handleRedirect("es")}
          className="flex gap-2 mr-4"
        >
          <Image src="/img/spanish.png" width={20} height={20} alt="spanish" />
          {"   "}
          {t("espanol")}
        </Dropdown.Item>
      </Dropdown>
    </div>
  )
}
