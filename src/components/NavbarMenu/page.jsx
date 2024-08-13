import { Slide } from "react-awesome-reveal"
import IdiomasSelector from "../IdiomasSelector/page"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function NavbarMenu({ lang }) {
  const t = useTranslations("navbarMenu")
  return (
    <Slide direction="down">
      <ul className="flex items-center gap-3 sm:gap-7 lg:gap-10 text-[#000b7a] text-sm xs:text-sm  sm:text-lg  md:text-base lg:text-lg font-bold ">
        <li className="hover:text-[#bb29b9] transition-all duration-300">
          <IdiomasSelector />
        </li>
        <li className="hover:text-[#bb29b9] transition-all duration-300">
          <Link href="#" className="">
            {t("item2")}
          </Link>
        </li>
        <li className="hover:text-[#bb29b9] transition-all duration-300">
          <Link href="#" className="">
            {t("item3")}
          </Link>
        </li>
        <li className="hidden md:block hover:text-[#bb29b9] transition-all duration-300">
          <Link href={`/${lang}/aboutUs`} className="">
            {t("item4")}
          </Link>
        </li>
        <li className="hover:text-[#bb29b9] transition-all duration-300">
          <Link href={`/${lang}/contactUs`} className="">
            {t("item5")}
          </Link>
        </li>
      </ul>
    </Slide>
  )
}
