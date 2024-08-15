"use client"
import { Dropdown } from "flowbite-react"
import Image from "next/image"
import { useTranslations, useLocale } from "next-intl"
import Link from "next/link"

export default function PresencialSelector({ setOpen }) {
  const locale = useLocale()
  const t = useTranslations("navbarMenu")

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <Dropdown label={t("dropDown2")} inline>
      <Dropdown.Header className="w-[240px]">
        <span className="block text-sm text-[#000b7a]">{t("dd2Title")}</span>
      </Dropdown.Header>
      <Link onClick={(e) => closeMenu()} href={`/${locale}/sedes/kissimmee`}>
        <Dropdown.Item className="flex gap-2 mr-4">
          <Image
            src="/img/united-states.png"
            width={20}
            height={20}
            alt="spanish"
          />
          {"   "}
          {t("dd2Item1")}
        </Dropdown.Item>
      </Link>
      <Link onClick={() => closeMenu()} href={`/${locale}/sedes`}>
        <Dropdown.Item className="flex gap-2 mr-4">
          {" "}
          <Image
            src="/img/venezuela.png"
            width={20}
            height={20}
            alt="spanish"
          />
          {t("dd2Item2")}
        </Dropdown.Item>
      </Link>
    </Dropdown>
  )
}
