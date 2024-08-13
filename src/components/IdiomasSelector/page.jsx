import { Dropdown } from "flowbite-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

export default function IdiomasSelector() {
  const t = useTranslations("navbarMenu")
  return (
    <Dropdown label={t("dropDown")} inline>
      <Dropdown.Header className="w-[240px]">
        <span className="block text-sm text-[#000b7a]">{t("ddTitle")}</span>
      </Dropdown.Header>
      <Dropdown.Item className="flex gap-2 mr-4">
        <Image src="/img/spanish.png" width={20} height={20} alt="spanish" />
        {"   "}
        {t("ddItem1")}
      </Dropdown.Item>
      <Dropdown.Item className="flex gap-2 mr-4">
        {" "}
        <Image
          src="/img/united-states.png"
          width={20}
          height={20}
          alt="spanish"
        />
        {t("ddItem2")}
      </Dropdown.Item>
    </Dropdown>
  )
}
