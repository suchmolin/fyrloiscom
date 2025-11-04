import { handleCheckoutPromo } from "@/checkoutPromo";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { FaRegCheckCircle } from "react-icons/fa";

export default function CardPromo({ item, curso, horizontal }) {
  const t = useTranslations("promo");
  const { destacar, recomendado } = item;
  const searchParams = useSearchParams();
  const pricing = searchParams.get("pc");


  return (
    <div className={`${destacar || recomendado ? "scale-[120%] " : ""}`}>
      <div className="w-full">
        <div
          className={`bg-[#001a70] px-5 py-1 font-bold text-2xl text-white rounded-t-3xl w-fit ${recomendado ? "w-full" : ""}`}
        >
          {item.titulo}
        </div>
      </div>
      <div
        className={`${horizontal ? "w-[270px] sm:w-[500px] lg:w-[450px] xl:w-[500px] flex-col sm:flex-row" : "w-[270px] md:w-[220px] lg:w-[270px] flex-col pb-20 "}  relative rounded-b-xl ${recomendado ? "" : "rounded-tr-xl"}  flex  border-[#97D700] ${destacar ? "border-4 " : "overflow-hidden"} bg-white dropShadow3`}
      >
        <div
          className={` flex items-center justify-center text-white  ${destacar ? "bg-[#97D700] -ml-1 -mt-1 rounded-t-lg sm:w-[300px]" : "bg-[#001a70] "} py-7`}
        >
          <p
            className={`flex flex-col items-center justify-center text-3xl  font-[latoblack] ${destacar ? "text-[#001a70]" : "text-white"}`}
          >
            {item.descuento ? (
              <>
                <span className={`${destacar ? "scale-125" : ""} text-6xl px-12`}>
                  {item.descuento}
                  <span className="text-5xl">%</span>
                </span>
                Descuento
              </>
            ) : (
              <span className={`flex flex-col items-center text-center ${pricing == 'bs*' ? "text-5xl sm:text-5xl lg:text-4xl xl:text-5xl" : "text-5xl"}`}>
                {item.sindescuento}
              </span>
            )}
          </p>
        </div>
        <div className="flex flex-col gap-3 pt-10 px-7">
          <p className="text-[#001a70]">Detalles de curso</p>
          <div className="flex gap-4 items-center">
            <FaRegCheckCircle className="text-2xl text-[#ADC823]" />
            <p>{item.tiempoUnitario}</p>
          </div>
          {item.tiempoTotal && (
            <div className="flex gap-4 items-center">
              <FaRegCheckCircle className="text-2xl text-[#ADC823]" />
              <p>{item.tiempoTotal}</p>
            </div>
          )}
          <div className="flex flex-col text-center mt-4">
            {(item.precioAnterior || item.precioAnteriorString) && (
              <p className={`text-center text-[#001a70] `}>
                {t("antes")}
                <span className="line-through font-bold">
                  {pricing == "bs*" ? "" : item.precioAnteriorString ? "" : "$"}
                  {pricing == "bs*"
                    ? item.precioAnterior.toLocaleString() + " Bs"
                    : item.precioAnterior
                      ? `${item.precioAnterior}.00`
                      : `${item.precioAnteriorString}`}
                </span>
              </p>
            )}
            {item.financiado ? (
              <>
                <p className={`text-center md:text-xl lg:text-2xl font-bold text-[#001a70] ${pricing == 'bs*' ? "text-3xl sm:text-2xl" : "text-2xl"}`}>
                  {item.financiado.descripcion}
                </p>
                <p className="">{item.financiado.descripcion2}</p>
              </>
            ) : (
              <p className="text-center text-2xl md:text-xl lg:text-2xl font-bold text-[#001a70]">
                {pricing == "bs*" ? "" : "$"}
                {pricing == "bs*" ? item.precioPromo.toLocaleString() + " Bs" : `${item.precioPromo}.00`}
              </p>
            )}
          </div>
          <div
            className={`w-full ${horizontal ? "" : "absolute"} bottom-0 py-7 flex justify-center`}
          >
            {pricing === "bs*" ? (
              <a
                href={`https://wa.me/13055105259?text=Hola, me interesa la promoción: ${item.titulo} - ${curso.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold px-4 w-fit bg-[#25D366] rounded-lg hover:bg-[#20b358] transition-colors text-sm text-nowrap py-2 duration-200 flex items-center gap-2"
              >
                Más Información
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </a>
            ) : (
              <button
                onClick={(e) => {
                  e.target.disabled = true;
                  handleCheckoutPromo([
                    {
                      id: item.id,
                      cantidad: 1,
                      precio: item.precioPromo,
                      curso: curso.title,
                    },
                  ]);
                }}
                className={`text-white py-1 font-bold px-4 w-fit bg-[#001a70] rounded-lg`}
              >
                {item.financiado ? `${item.financiado.boton}` : t("boton")}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
