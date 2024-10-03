import { FiMapPin } from "react-icons/fi"
import { FiPhone } from "react-icons/fi"
import { useTranslations, useLocale } from "next-intl"

export default function SedePrincipal() {
  const locale = useLocale()
  const t = useTranslations("SedePrincipal")
  return (
    <div className="relative min-h-[500px] bg-[url('/img/kissimmee1.webp')] bg-cover bg-center -mt-2">
      <div className="w-12/12 md:w-8/12 lg:w-6/12 gradient h-[500px] flex flex-col justify-center items-center text-white text-lg bg-white/60 md:bg-white/80">
        <h2 className="text-4xl text-[#001A70] font-bold mb-3">{t("h2")}</h2>
        <h2 className="text-4xl text-[#001A70] font-bold">Kissimmee</h2>
        <p className="text-sm sm:text-xl text-[#001A70] flex gap-2 py-2 items-center">
          <span className="text-[#bb29b9] font-bold">
            <FiMapPin />
          </span>{" "}
          928 East Osceola Parkway, Kissimmee, FL 34744
        </p>
        <p className="text-base sm:text-xl text-[#001A70] flex gap-2 py-2 items-center">
          <span className="text-[#bb29b9] font-bold">
            <FiPhone />
          </span>{" "}
          +1 (305) 5105259
        </p>
        <a
          href={`/${locale}/sedes`}
          className="shadow-xl py-2 px-4 rounded-lg bg-[#9ee701] text-[#001A70] my-4 hover:text-white hover:bg-[#001A70] transition-all duration-300 hover:shadow-2xl"
        >
          {t("button")}
        </a>
      </div>
    </div>
  )
}
