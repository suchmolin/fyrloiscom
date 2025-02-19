import { useTranslations } from "next-intl"
import Image from "next/image"

export default function NuestraHistoriaPage() {
  const t = useTranslations("AboutUs.NuestraHistoriaPage")

  return (
    <div
      id="nuestraHistoria"
      className="w-full flex flex-coll items-center justify-center text-center sm:text-left"
    >
      <div id="nuestraHistoria" className="w-9/12 pt-20 border-gray-300 ">
        <h2 className="text-[#001A70] fontTitulo font-bold pb-5">{t("h2")}</h2>

        <div className="w-full flex flex-col md:flex-row gap-5 items-center mb-10">
          <div className="relative w-[150px] sm:w-[250px] aspect-square">
            <Image
              src="/img/26aniversaryAltnueva.png"
              objectFit="contain"
              layout="fill"
              alt="nuestra historia"
            />
          </div>
          <p className="w-fit text-gray-500 sm:text-2xl">{t("p")}</p>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-5 items-center mb-10">
          <div className="relative w-[150px] sm:w-[250px] aspect-square">
            <Image
              src="/img/nuestraHistorianueva.png"
              objectFit="contain"
              layout="fill"
              alt="nuestra historia"
            />
          </div>
          <p className="w-fit text-gray-500 sm:text-2xl">{t("p2")}</p>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-5 items-center mt-4">
          <div className="relative w-[150px] sm:w-[250px] aspect-square pt-10">
            <Image
              src="/img/nuestraHistoria2nueva.png"
              objectFit="contain"
              layout="fill"
              alt="nuestra historia"
            />
          </div>
          <p className="w-fit text-gray-500 sm:text-2xl">{t("p3")}</p>
        </div>
      </div>
    </div>
  )
}
