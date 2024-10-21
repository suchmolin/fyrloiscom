"use client"
import { TfiWorld } from "react-icons/tfi"
import { Dropdown } from "flowbite-react"
import Image from "next/image"
import { usePathname, useSearchParams } from "next/navigation"
import { MdOutlineShoppingCart } from "react-icons/md"

export function LanguageSelector({ locale }) {
  const path = usePathname()
  const searchParams = useSearchParams()
  const sede = searchParams.get("s")

  const handleRedirect = (locale) => {
    const subs = path.split("/")
    subs[1] = locale

    location.href = sede ? subs.join("/") + "?s=" + sede : subs.join("/")
  }
  const mundo = (
    <span className="flex gap-2 items-center bg-transparent">
      <TfiWorld />
      {locale.toUpperCase()}
    </span>
  )
  return (
    <div className="fixed lg:absolute bottom-5 lg:top-5 left-5 lg:left-auto lg:right-5 xl:right-10 text-[#001A70] text-xl z-10 flex gap-3 flex-col lg:flex-row h-fit items-center">
      <Dropdown label={mundo} inline>
        <Dropdown.Header className="w-[200px]">
          <span className="block text-sm text-[#001A70]">
            Selecciona un idioma
          </span>
        </Dropdown.Header>

        <Dropdown.Item
          onClick={() => handleRedirect("es")}
          className="flex gap-2 mr-4"
        >
          <Image src="/img/spanish.png" width={20} height={20} alt="spanish" />
          {"   "}
          Español
        </Dropdown.Item>

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
          English
        </Dropdown.Item>
      </Dropdown>
    </div>
  )
}
