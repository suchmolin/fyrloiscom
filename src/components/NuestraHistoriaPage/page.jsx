import { useTranslations } from "next-intl";

export default function NuestraHistoriaPage() {
  const t = useTranslations("AboutUs.NuestraHistoriaPage");

  return (
    <div
      id="nuestraHistoria"
      className="w-full flex flex-coll items-center justify-center text-center sm:text-left"
    >
      <div id="nuestraHistoria" className="w-10/12 pt-20 border-gray-300 ">
        <h2 className="text-[#000b7a] text-3xl font-bold pb-5">{t("h2")}</h2>
        <p className="text-gray-500 text-xl pb-5">{t("p")}</p>
        <p className="text-gray-500 text-lg">{t("p2")}</p>
      </div>
    </div>
  );
}
