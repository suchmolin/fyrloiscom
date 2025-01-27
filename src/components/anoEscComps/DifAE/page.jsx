import { IoArrowForwardCircleOutline } from "react-icons/io5"

export default function DifAE() {
  return (
    <div id="conocenos" className="w-full bg-[#fdd26e] -mt-1 py-5 sm:py-10">
      <h2 className="font-[EastmanBold] text-lg xs:text-xl sm:text-3xl lg:text-4xl text-white text-center flex flex-col pb-6">
        Una enseñanza estimulante,
        <br /> divertida y transformadora
      </h2>
      <div className="flex flex-wrap gap-x-4 justify-center items-center">
        <div className=" w-[100px] lg:w-[150px] h-[200px] lg:h-[230px] bg-[url('/img/AE/cuadro-blanco.png')] bg-contain bg-no-repeat bg-center flex flex-col gap-3 justify-center items-center font-[EastmanBold] text-[#000b7a]">
          <p className="text-6xl lg:text-8xl leading-[60px]">26</p>
          <p className="text-sm lg:text-xl leading-[20px]">
            años de <br /> experiencia.
          </p>
        </div>
        <div className=" w-[100px] lg:w-[150px] h-[200px] lg:h-[230px] bg-[url('/img/AE/cuadro-azul2.webp')] bg-contain bg-no-repeat bg-center flex flex-col gap-3 justify-center items-center font-[EastmanBold] text-[#fbd874]">
          <p className="text-[10px] lg:text-base text-white leading-[20px]">
            Comunicacional <br /> y vivencial.
          </p>
          <p className="text-white leading-[10px]">Clases</p>
          <p className=" leading-[20px] text-3xl">100%</p>
          <p className="text-white leading-[10px]">en ingles.</p>
        </div>
        <div className=" w-[100px] lg:w-[150px] h-[200px] lg:h-[230px] bg-[url('/img/AE/cuadro-blanco.png')] bg-contain bg-no-repeat bg-center flex flex-col gap-3 justify-center pl-4 font-[EastmanBold] text-[#000b7a]">
          <p className="text-xs lg:text-base text-[#000b7a] leading-[20px]">
            Metodología <br /> alineada al
          </p>
          <p className="text-[#000b7a] text-base lg:text-xl leading-[20px]">
            Marco <br />
            Común <br /> Europeo
          </p>
        </div>
        <div className=" w-[100px] lg:w-[150px] h-[200px] lg:h-[230px] bg-[url('/img/AE/cuadro-azul2.webp')] bg-contain bg-no-repeat bg-center flex flex-col gap-3 justify-center items-center font-[EastmanBold] text-[#fbd874]">
          <p className="text-white text-4xl lg:text-5xl">100</p>
          <p className=" leading-[20px] text-2xl lg:text-3xl">Celtas.</p>
          <p className="text-xs lg:text-base text-white leading-[15px]">
            Profesores <br />
            certificados.
          </p>
        </div>
        <div className=" w-[100px] lg:w-[150px] h-[200px] lg:h-[230px] bg-[url('/img/AE/cuadro-blanco.png')] bg-contain bg-no-repeat bg-center flex flex-col gap-3 justify-center items-center font-[EastmanBold] text-[#000b7a]">
          <p className="text-sm lg:text-lg text-[#000b7a] leading-[15px] lg:leading-[20px]">
            Cupos <br /> limitados.
          </p>
          <p className="text-5xl lg:text-6xl leading-[15px] lg:leading-[25px] mb-1">
            8
          </p>
          <p className="text-[#000b7a] text-base lg:text-xl leading-[20px]">
            alumnos <br />
            por salón.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <a
          href="#contacto"
          className={`comienzaAhora flex justify-center items-center mt-5 sm:mt-10 bg-[#cdea80] rounded-xl text-2xl font-[EastmanBold] hover:bg-[#cdea80] transition-all duration-300 w-fit`}
        >
          <span
            className={`px-4 py-2 rounded-xl font-bold text-white bg-[#001a6f]`}
          >
            Empezar
          </span>
          <span className="flecha px-1 transition-all duration-300">
            <IoArrowForwardCircleOutline className="text-3xl" />{" "}
          </span>
        </a>
      </div>
    </div>
  )
}
