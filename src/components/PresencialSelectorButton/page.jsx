import Link from "next/link"
import Image from "next/image"
import { Dropdown, Flowbite } from "flowbite-react"
import { useTranslations, useLocale } from "next-intl"
import { IoIosArrowDown } from "react-icons/io"

export default function PresencialSelectorButton() {
  const locale = useLocale()
  const t = useTranslations("navbarMenu")

  const labelDropDown = (
    <span className="relative flex gap-2 items-center justify-between pr-10">
      {t("dropDown2")}
      <span className="p-2 rounded-full bg-[#9ee701] absolute -right-3">
        <IoIosArrowDown className="text-gray-800" />
      </span>
    </span>
  )

  return (
    <div className=" bg-white/80 hover:bg-white flex items-center rounded-full py-2 sm:py-0 px-4 transition-all duration-300">
      <Dropdown label={labelDropDown} arrowIcon={false} inline>
        <Dropdown.Header className="w-[240px]">
          <span className="block text-sm text-[#001A70]">{t("dd2Title")}</span>
        </Dropdown.Header>
        <Link
          onClick={() => setOpen(false)}
          href={`/${locale}/sedes/kissimmee`}
        >
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
        <Link onClick={() => setOpen(false)} href={`/${locale}/sedes`}>
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
    </div>
  )
}
