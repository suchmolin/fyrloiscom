"use client"
import { TfiWorld } from "react-icons/tfi"

import { Dropdown } from "flowbite-react"
import Image from "next/image"
import Link from "next/link"

export function LanguageSelector() {
  return (
    <div className="absolute top-5 right-5 sm:right-10 text-[#000b7a] text-xl">
      <Dropdown label={<TfiWorld />} inline>
        <Dropdown.Header className="w-[200px]">
          <span className="block text-sm text-[#000b7a]">
            Selecciona un idioma
          </span>
        </Dropdown.Header>
        <Link href="/es" locale="es">
          <Dropdown.Item className="flex gap-2 mr-4">
            <Image
              src="/img/spanish.png"
              width={20}
              height={20}
              alt="spanish"
            />
            {"   "}
            Español
          </Dropdown.Item>
        </Link>
        <Link href="/en" locale="en">
          <Dropdown.Item className="flex gap-2 mr-4">
            {" "}
            <Image
              src="/img/united-states.png"
              width={20}
              height={20}
              alt="spanish"
            />
            English
          </Dropdown.Item>
        </Link>
      </Dropdown>
    </div>
  )
}
