import { useTranslations, useLocale } from "next-intl"
import IdiomasSelector from "../IdiomasSelector/page"
import Link from "next/link"

import PresencialSelector from "../PresencialSelector/page"

export default function NavbarMenu({ setOpen }) {
  const t = useTranslations("navbarMenu")
  const locale = useLocale()
  return (
    <ul className="absolute sm:relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-7 lg:gap-10 text-[#000b7a] text-sm xs:text-sm  sm:text-lg  md:text-base lg:text-lg font-bold bg-gray-100/95 sm:bg-transparent w-full sm:w-fit pt-16 pb-10 sm:py-0 pl-16">
      <li className="hover:text-[#bb29b9] transition-all duration-300 ">
        <IdiomasSelector />
      </li>
      <li className="hover:text-[#bb29b9] transition-all duration-300">
        <Link href="https://fyrlois.us" className="">
          {t("item2")}
        </Link>
      </li>
      <li className="hover:text-[#bb29b9] transition-all duration-300 ">
        <PresencialSelector setOpen={setOpen} />
      </li>
      <li className=" hover:text-[#bb29b9] transition-all duration-300">
        <Link href={`/${locale}/aboutUs`} className="">
          {t("item4")}
        </Link>
      </li>
      <li className="hover:text-[#bb29b9] transition-all duration-300">
        <Link href={`/${locale}/contactUs`} className="">
          {t("item5")}
        </Link>
      </li>
    </ul>
  )
}
