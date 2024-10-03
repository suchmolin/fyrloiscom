import { useTranslations, useLocale } from "next-intl"
import IdiomasSelector from "../IdiomasSelector/page"
import Link from "next/link"

import PresencialSelector from "../PresencialSelector/page"

export default function NavbarMenu({ setOpen }) {
  const t = useTranslations("navbarMenu")
  const locale = useLocale()
  return (
    <ul className="fixed h-full sm:relative flex flex-col sm:flex-row sm:items-center justify-center sm:justify-start gap-7 xl:gap-10 text-[#001A70] text-2xl sm:text-base lg:text-lg  font-bold bg-gradient-to-b from-white sm:from-transparent to-gray-300 sm:bg-transparent w-full sm:w-fit pb-20 sm:py-0 pl-5 md:pr-32 lg:pr-24 xl:pr-52 2xl:pr-80">
      <li className="hover:text-[#bb29b9] transition-all duration-300 ">
        <IdiomasSelector />
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
      <li className="hover:text-[#bb29b9] transition-all duration-300">
        <Link href={`/${locale}/blog`} className="">
          Blog
        </Link>
      </li>
      <li className="hover:text-[#bb29b9] transition-all duration-300">
        <Link href="https://fyrloisonline.vercel.app" className="">
          {t("item2")}
        </Link>
      </li>
      <li className="hover:text-[#bb29b9] transition-all duration-300 ">
        <PresencialSelector setOpen={setOpen} />
      </li>
    </ul>
  )
}
