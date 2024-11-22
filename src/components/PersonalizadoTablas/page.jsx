import { GrStatusGood } from "react-icons/gr"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { Carousel } from "flowbite-react"
import { useSearchParams } from "next/navigation"
import { useTranslations } from "next-intl"

export default function PersonalizadoTablas() {
  const t = useTranslations("PersonalizadoTablas")
  const searchParams = useSearchParams()
  const lang = searchParams.get("langCourse")

  return (
    <div className="w-full flex flex-col items-center justify-center py-20">
      <h2 className="w-11/12 md:w-7/12 xl:w-5/12 fontTitulo text-[#001a70] font-bold mb-10 text-center">
        {t("h2")}
      </h2>
      <div className="w-[350px] sm:w-[640px] lg:w-[1000px] dropShadow3 bg-gray-100 text-[#001a70] rounded-2xl p-3 sm:p-10 font-bold text-xl sm:text-2xl h-[420px] sm:h-fit">
        <table className="tablaPersonalizado hidden sm:block w-full">
          <thead>
            <tr>
              <th></th>
              <th className="border-l px-2 sm:px-7">{t("regular")}</th>
              <th className="border-l px-2 sm:px-7">{t("personalizado")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {t("clases100")} {lang === "spanish" ? "español" : "inglés"}
              </td>
              <td className="border-l">
                <GrStatusGood className="text-[#ADC823] text-3xl" />
              </td>
              <td className="border-l">
                <GrStatusGood className="text-[#ADC823] text-3xl" />
              </td>
            </tr>
            <tr>
              <td>{t("adaptado")}</td>
              <td className="border-l">
                <GrStatusGood className="text-[#ADC823] text-3xl" />
              </td>
              <td className="border-l">
                <GrStatusGood className="text-[#ADC823] text-3xl" />
              </td>
            </tr>
            <tr>
              <td>{t("metodologia")}</td>
              <td className="border-l">
                <GrStatusGood className="text-[#ADC823] text-3xl" />
              </td>
              <td className="border-l">
                <GrStatusGood className="text-[#ADC823] text-3xl" />
              </td>
            </tr>
            <tr>
              <td>{t("profesor")}</td>
              <td className="border-l">
                <AiOutlineCloseCircle className="text-[#001a70] text-3xl" />
              </td>
              <td className="border-l">
                <GrStatusGood className="text-[#ADC823] text-3xl" />
              </td>
            </tr>
            <tr>
              <td>{t("clasesind")}</td>
              <td className="border-l">
                <AiOutlineCloseCircle className="text-[#001a70] text-3xl" />
              </td>
              <td className="border-l">
                <GrStatusGood className="text-[#ADC823] text-3xl" />
              </td>
            </tr>
            <tr>
              <td>{t("objetivos")}</td>
              <td className="border-l">
                <AiOutlineCloseCircle className="text-[#001a70] text-3xl" />
              </td>
              <td className="border-l">
                <GrStatusGood className="text-[#ADC823] text-3xl" />
              </td>
            </tr>
          </tbody>
        </table>
        <Carousel className="sm:hidden">
          <table className="tablaPersonalizado">
            <thead>
              <tr>
                <th colSpan={2}>Regular</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {t("clases100")} {lang === "spanish" ? "español" : "inglés"}
                </td>
                <td className="border-l">
                  <GrStatusGood className="text-[#ADC823] text-3xl" />
                </td>
              </tr>
              <tr>
                <td>{t("adaptado")}</td>
                <td className="border-l">
                  <GrStatusGood className="text-[#ADC823] text-3xl" />
                </td>
              </tr>
              <tr>
                <td>{t("metodologia")}</td>
                <td className="border-l">
                  <GrStatusGood className="text-[#ADC823] text-3xl" />
                </td>
              </tr>
              <tr>
                <td>{t("profesor")}</td>
                <td className="border-l">
                  <AiOutlineCloseCircle className="text-[#001a70] text-3xl" />
                </td>
              </tr>
              <tr>
                <td>{t("clasesind")}</td>
                <td className="border-l">
                  <AiOutlineCloseCircle className="text-[#001a70] text-3xl" />
                </td>
              </tr>
              <tr>
                <td>{t("objetivos")}</td>
                <td className="border-l">
                  <AiOutlineCloseCircle className="text-[#001a70] text-3xl" />
                </td>
              </tr>
            </tbody>
          </table>
          <table className="tablaPersonalizado sm:hidden">
            <thead>
              <tr>
                <th colSpan={2}>{t("personalizado")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {t("clases100")} {lang === "spanish" ? "español" : "inglés"}
                </td>
                <td className="border-l">
                  <GrStatusGood className="text-[#ADC823] text-3xl" />
                </td>
              </tr>
              <tr>
                <td>{t("adaptado")}</td>
                <td className="border-l">
                  <GrStatusGood className="text-[#ADC823] text-3xl" />
                </td>
              </tr>
              <tr>
                <td>{t("metodologia")}</td>
                <td className="border-l">
                  <GrStatusGood className="text-[#ADC823] text-3xl" />
                </td>
              </tr>
              <tr>
                <td>{t("profesor")}</td>
                <td className="border-l">
                  <GrStatusGood className="text-[#ADC823] text-3xl" />
                </td>
              </tr>
              <tr>
                <td>{t("clasesind")}</td>
                <td className="border-l">
                  <GrStatusGood className="text-[#ADC823] text-3xl" />
                </td>
              </tr>
              <tr>
                <td>{t("objetivos")}</td>
                <td className="border-l">
                  <GrStatusGood className="text-[#ADC823] text-3xl" />
                </td>
              </tr>
            </tbody>
          </table>
        </Carousel>
      </div>
    </div>
  )
}
