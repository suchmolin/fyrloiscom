import FormFooter from "../FormFooter/page"
import PresencialSelector from "../PresencialSelector/page"
import SocialFooter from "../SocialFooter/page"
import { useTranslations, useLocale } from "next-intl"
import Link from "next/link"

export default function Footer() {
  const t = useTranslations("Footer")
  const locale = useLocale()
  return (
    <div className="dropShadow3 bg-gradient-to-b from-white to-gray-200 w-full ">
      <div className=" w-full min-h-[450px] flex justify-center py-10">
        <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row gap-10 justify-between">
          <div className="flex flex-col sm:flex-row w-full lg:w-7/12 justify-between">
            <div className="flex flex-col items-center sm:items-start text-[#001A70] mb-10 sm:mb-0">
              <ul className="py-2 flex flex-col items-center sm:items-start gap-7  pl-5 font-bold text-lg">
                <li className="hover:text-[#bb29b9] transition-all duration-300">
                  <Link href={`/${locale}/aboutUs`}>{t("li3")}</Link>
                </li>
                <li className="hover:text-[#bb29b9] transition-all duration-300">
                  <Link href={`/${locale}/contactUs`}>{t("li4")}</Link>
                </li>
                <li className="hover:text-[#bb29b9] transition-all duration-300">
                  <Link href={`/${locale}/blog`}>Blog</Link>
                </li>
                <li className="hover:text-[#bb29b9] transition-all duration-300">
                  <Link href={`/${locale}/privacy-policies`}>
                    Politicas de privacidad
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sm:flex flex-col gap-2 min-w-[300px] w-12/12 sm:w-fit hidden">
              <h2 className="text-2xl text-[#001A70] text-center sm:text-start font-bold">
                {t("h2b")}
              </h2>
              <FormFooter />
            </div>
          </div>
          <div className="">
            <SocialFooter />
          </div>
        </div>
      </div>
      <div className="w-full text-xs sm:text-base bg-[#001A70] h-[45px] flex justify-start xs:justify-center items-center pl-2 xs:pl-0">
        <p className="text-white">{t("p")}</p>
      </div>
    </div>
  )
}
