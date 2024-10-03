import { FiMapPin } from "react-icons/fi"
import { FiPhone } from "react-icons/fi"
import { useTranslations, useLocale } from "next-intl"

export default function HeroSede({ sedeData }) {
  const locale = useLocale()
  const t = useTranslations("SedePrincipal")

  return (
    <div
      style={{ backgroundImage: `url('${sedeData.src}')` }}
      className={"w-full relative bottom2 min-h-[500px] bg-cover bg-center"}
    >
      <div className="w-12/12 md:w-8/12 lg:w-6/12 gradient h-[500px] flex flex-col justify-center items-center text-white text-lg bg-white/60 md:bg-white/80">
        <h2 className="text-4xl text-[#001A70] font-bold mb-3">Sede</h2>
        <h2 className="text-4xl text-[#001A70] font-bold">{sedeData.title}</h2>
        <p className="text-sm sm:text-xl text-[#001A70] flex py-2 px-5 sm:px-28 text-center">
          <span className="text-[#bb29b9] font-bold mt-1">
            <FiMapPin />
          </span>{" "}
          {sedeData.direccion}
        </p>
        <p className="text-base sm:text-xl text-[#001A70] flex gap-2 py-2 items-center">
          <span className="text-[#bb29b9] font-bold">
            <FiPhone />
          </span>{" "}
          {sedeData.telefono}
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
