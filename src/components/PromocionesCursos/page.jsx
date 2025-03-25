import { data as dataCursos } from "@/data/cursos";
import CardPromo from "../CardPromo/page";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function PromocionesCursos({ promoList, cursoId }) {
  const curso = dataCursos.find((item) => item.id === cursoId);
  const [promos, setPromos] = useState([]);

  const t = useTranslations("promo");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await import(`/src/${t("data")}/promociones`);

        const array = promoList.map((item) =>
          data.find((prom) => prom.id === item)
        );

        setPromos(array);
      } catch (error) {
        console.log("Error importing data", error);
      }
    };
    fetchData();
  }, [t, promoList]);

  return (
    <div
      className={`w-full bg-gray-100 py-20 flex flex-col lg:flex-row gap-20 lg:gap-20 justify-center items-center overflow-hidden`}
    >
      {promos.map((prom) => {
        return (
          <>
            <CardPromo
              key={prom.id}
              item={prom}
              curso={curso}
              horizontal={promos.length === 2}
            />
          </>
        );
      })}
    </div>
  );
}
