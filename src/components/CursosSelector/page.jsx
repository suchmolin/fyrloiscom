import { Dropdown } from "flowbite-react"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"

export default function CursosSelector({ setOpen }) {
  const t = useTranslations("CursosSelector")
  const locale = useLocale()
  return (
    <div className="py-1 px-3 rounded-lg bg-[#001a70] text-white w-fit">
      <Dropdown label={t("dropDown")} inline>
        <Link onClick={() => setOpen(false)} href={`/${locale}/online`}>
          <Dropdown.Item className="flex gap-2 mr-4">
            {t("dd2Item1")}
          </Dropdown.Item>
        </Link>
        <Link onClick={() => setOpen(false)} href={`/${locale}/sedes`}>
          <Dropdown.Item className="flex gap-2 mr-4">
            {t("dd2Item2")}
          </Dropdown.Item>
        </Link>
      </Dropdown>
    </div>
  )
}
