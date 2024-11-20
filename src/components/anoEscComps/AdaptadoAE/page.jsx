import { IoArrowForwardCircleOutline } from "react-icons/io5"
import IconsAE from "../IconsAE/page"

export default function AdaptadoAE() {
  return (
    <div className="w-full bg-[#cdea80] bg-[url('/img/AE/grisss.png')] bg-contain bg-top bg-no-repeat flex flex-col items-center">
      <div className="w-10/12 flex flex-col-reverse lg:flex-row gap-8 mt-16 justify-center items-center">
        <div className="flex gap-4 sm:gap-8 justify-center items-center">
          <div className="w-[80px] xs:w-[100px] sm:w-[150px] h-[200px] sm:h-[230px] bg-[url('/img/AE/cuadro-blanco.png')] bg-contain bg-no-repeat bg-center flex flex-col gap-3 justify-center items-center font-[EastmanBold] text-[#000b7a]">
            <p className="text-6xl sm:text-8xl">3</p>
            <p className="text-xl sm:text-3xl -rotate-12">Lapsos</p>
          </div>
          <div className="w-[80px] xs:w-[100px] sm:w-[150px] h-[200px] sm:h-[230px] bg-[url('/img/AE/cuadro-azul2.webp')] bg-contain bg-no-repeat bg-center flex flex-col gap-3 justify-center items-center font-[EastmanBold] text-[#fbd874]">
            <p className="text-6xl sm:text-8xl">10</p>
            <p className="text-xl sm:text-3xl -rotate-12">Meses</p>
          </div>
          <div className="w-[80px] xs:w-[100px] sm:w-[150px] h-[200px] sm:h-[230px] bg-[url('/img/AE/cuadro-blanco.png')] bg-contain bg-no-repeat bg-center flex flex-col justify-center items-center font-[EastmanBold] text-[#000b7a] pt-4">
            <p className="text-4xl xs:text-5xl sm:text-7xl leading-[30px] xs:leading-[35px] sm:leading-[45px]">
              23
            </p>
            <p className="text-sm sm:text-xl text-[#f37eb5] leading-[30px] xs:leading-[35px] sm:leading-[45px]">
              Septiembre
            </p>
            <div className="w-[15px] h-[7px] bg-[#000b7a] mb-2 hidden sm:block"></div>
            <p className="text-4xl xs:text-5xl sm:text-7xl leading-[30px] xs:leading-[35px] sm:leading-[45px]">
              18
            </p>
            <p className="text-sm sm:text-xl text-[#f37eb5] leading-[30px] xs:leading-[35px] sm:leading-[45px]">
              Julio
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <IconsAE />
          <h2 className="text-center text-2xl xs:text-3xl font-[EastmanBold]">
            Adaptado al año <br /> escolar venezolano
          </h2>
        </div>
      </div>
      <a
        href="#contacto"
        className={`comienzaAhora flex sm:hidden justify-center items-center mt-5 sm:mt-10 bg-[#fbd874] rounded-xl text-2xl font-[EastmanBold] hover:bg-[#fbd874] transition-all duration-300`}
      >
        <span
          className={`px-4 py-2 rounded-xl font-bold text-white bg-[#001a6f]`}
        >
          Inicia ahora
        </span>
        <span className="flecha px-1 transition-all duration-300">
          <IoArrowForwardCircleOutline className="text-3xl" />{" "}
        </span>
      </a>
      <div className="w-full h-[100px] lg:h-[250px] bg-white bg-[url('/img/AE/verdeee.png')] bg-cover bg-no-repeat bg-top"></div>
    </div>
  )
}
