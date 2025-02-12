import { handleCheckoutPromo } from "@/checkoutPromo"
import { useTranslations } from "next-intl"
import { FaRegCheckCircle } from "react-icons/fa"
export default function CardPromo({ item, curso }) {
  const t = useTranslations("promo")
  const { destacar, recomendado } = item
  return (
    <div
      className={`${destacar || recomendado ? "scale-[120%] order-1 md:order-2" : "order-2"}`}
    >
      <div className="w-full">
        <div
          className={`bg-[#001a70] px-5 py-1 font-bold text-2xl text-white rounded-t-3xl w-fit ${recomendado ? "w-full" : ""}`}
        >
          {item.titulo}
        </div>
      </div>
      <div
        className={`w-[270px] md:w-[220px] lg:w-[270px] relative rounded-b-xl ${recomendado ? "" : "rounded-tr-xl"}  flex flex-col pb-20 border-[#97D700] ${destacar ? "border-4 " : "overflow-hidden"} bg-white dropShadow3`}
      >
        <div
          className={` flex items-center justify-center text-white ${destacar ? "bg-[#97D700] w-[102%] md:w-[103%] lg:w-[102%] -ml-1 -mt-1 rounded-t-lg" : "bg-[#001a70] w-full"} py-7`}
        >
          <p
            className={`flex flex-col items-center justify-center text-3xl  font-[latoblack] ${destacar ? "text-[#001a70]" : "text-white"}`}
          >
            {item.descuento ? (
              <>
                <span className={`${destacar ? "scale-125" : ""} text-6xl`}>
                  {item.descuento}
                  <span className="text-5xl">%</span>
                </span>
                Descuento
              </>
            ) : (
              <span className="text-5xl flex flex-col items-center text-center">
                {item.sindescuento}
              </span>
            )}
          </p>
        </div>
        <div className="flex flex-col gap-3 pt-10 px-7 ">
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
            {item.descuento && (
              <p className={`text-center text-[#001a70] `}>
                {t("antes")}:{" "}
                <span className="line-through font-bold">
                  ${item.precioAnterior}.00
                </span>
              </p>
            )}
            {item.financiado ? (
              <>
                <p className="text-center text-2xl md:text-xl lg:text-2xl font-bold text-[#001a70]">
                  {item.financiado.descripcion}
                </p>
                <p className="">{item.financiado.descripcion2}</p>
              </>
            ) : (
              <p className="text-center text-3xl md:text-2xl lg:text-3xl font-bold text-[#001a70]">
                Total: ${item.precioPromo}.00
              </p>
            )}
          </div>
        </div>
        <div className="w-full absolute bottom-0 py-7 flex justify-center">
          <button
            onClick={(e) => {
              e.target.disabled = true
              handleCheckoutPromo([
                {
                  id: item.id,
                  cantidad: 1,
                  precio: item.precioPromo,
                  curso: curso.title,
                },
              ])
            }}
            className={`text-white py-1 font-bold px-4 w-fit bg-[#001a70] rounded-lg`}
          >
            {item.financiado ? `${item.financiado.boton}` : t("boton")}
          </button>
        </div>
      </div>
    </div>
  )
}
