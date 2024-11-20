import { IoArrowForwardCircleOutline } from "react-icons/io5"

export default function BotonAE({
  texto,
  color1,
  color2,
  colorHover,
  colorTexto,
}) {
  return (
    <a
      href="#contacto"
      className={`comienzaAhora flex justify-center items-center mt-10 bg-[${color2}] rounded-xl overflow-hidden text-2xl font-[EastmanBold] hover:bg-[${colorHover}] transition-all duration-300`}
    >
      <span
        className={`px-4 py-2 rounded-xl font-bold text-${colorTexto} bg-${color1}`}
      >
        {texto}
      </span>
      <span className="flecha px-1 transition-all duration-300">
        <IoArrowForwardCircleOutline className="text-3xl" />{" "}
      </span>
    </a>
  )
}
