"use client"
import { TfiWorld } from "react-icons/tfi"
import { Dropdown } from "flowbite-react"

import Image from "next/image"
import Link from "next/link"
import { redirect, usePathname } from "next/navigation"

export function LanguageSelector() {
  const path = usePathname()

  const handleRedirect = (locale) => {
    const subs = path.split("/")
    subs[1] = locale

    location.href = subs.join("/")
  }

  return (
    <div className="absolute top-5 right-5 sm:right-10 text-[#000b7a] text-xl">
      <Dropdown label={<TfiWorld />} inline>
        <Dropdown.Header className="w-[200px]">
          <span className="block text-sm text-[#000b7a]">
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
