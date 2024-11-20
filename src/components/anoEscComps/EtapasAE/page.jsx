import { IoArrowForwardCircleOutline } from "react-icons/io5"
import CardEtapaAE from "../CardEtapaAE/page"

export default function EtapasAE() {
  return (
    <div
      id="programas"
      className="w-full flex flex-col items-center justify-center -mt-1  bg-white pt-10 pb-20 xl:py-16 bg-[url('/img/AE/curva.png')] bg-contain bg-no-repeat bg-bottom"
    >
      <div className="w-11/12 xl:w-10/12">
        <h2 className="text-xl xs:text-3xl sm:text-4xl text-[#000b7a] font-[EastmanBold] flex flex-col leading-9">
          Acompañamiento <span>académico</span>
        </h2>
        <p className="font-[EastmanBold] text-xl sm:text-2xl">
          adaptado a su etapa y competencias de lenguaje
        </p>
        <div className="w-full py-5 flex flex-col md:flex-row justify-center gap-16 md:gap-5 xl:gap-10 items-center">
          <CardEtapaAE
            fondo="[#cdea80]"
            titulo="Kids"
            edades="3 a 5 años"
            colorEdades="#cdea80"
            imagen="nino.webp"
            tituloSize="text-3xl xl:text-5xl"
            idref="kidsdesc"
            alt="niño de 4 años, con el pulgar izquierdo alzado, feliz por sus clases de inglés"
            />
          <CardEtapaAE
            fondo="[#f37eb5]"
            titulo="Elementary"
            edades="6 a 11 años"
            colorEdades="#f37eb5"
            imagen="azul.png"
            tituloSize="text-2xl xl:text-4xl"
            idref="elementarydesc"
            alt="niña de 8 años con cabello negro ondulado, feliz por sus clases de inglés inglés"
            />
          <CardEtapaAE
            fondo="[#fbd874]"
            titulo="High School"
            edades="12 a 16 años"
            colorEdades="#cdea80"
            imagen="rosada.webp"
            tituloSize="text-2xl xl:text-4xl"
            idref="highschooldesc"
            alt="adolescente femenina de 17 años con los brazos cruzados y cabello marron, 
sonriendo por sus clases de inglés"
            />
        </div>
      </div>
      <a
        href="#contacto"
        className={`comienzaAhora flex justify-center items-center mt-16 sm:mt-20 bg-[#fbd874] rounded-xl text-2xl font-[EastmanBold] hover:bg-[#cdea80] transition-all duration-300`}
      >
        <span
          className={`px-4 py-2 rounded-xl font-bold text-white bg-[#001a6f]`}
        >
          Conoce más
        </span>
        <span className="flecha px-1 transition-all duration-300">
          <IoArrowForwardCircleOutline className="text-3xl" />{" "}
        </span>
      </a>
    </div>
  )
}
