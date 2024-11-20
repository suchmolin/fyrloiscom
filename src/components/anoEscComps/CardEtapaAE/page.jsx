import Image from "next/legacy/image"

export default function CardEtapaAE({
  fondo,
  titulo,
  edades,
  colorEdades,
  imagen,
  tituloSize,
  idref,
  alt
}) {
  return (
    <a
      href={`#${idref}`}
      className={`w-[280px] xl:w-[350px] relative h-[350px] xl:min-h-[500px] rounded-lg bg-${fondo} flex justify-center items-center cursor-pointer hover:scale-[1.02] hover:shadow-lg shadow-[#000b7a] transition-all duration-300`}
    >
      <div className="relative w-11/12 h-full xl:mt-6">
        <Image
          src={`/img/AE/${imagen}`}
          layout="fill"
          objectFit="contain"
          alt={alt}
        />
      </div>
      <div className="absolute bottom-0 w-full flex justify-center">
        <div
          className={`font-[EastmanBold] text-center w-[180px] xl:w-[270px] h-[75px] xl:h-[96px] flex items-center justify-center bg-[url('/img/AE/cuadro-azul.webp')] bg-cover bg-no-repeat ${tituloSize} text-white`}
        >
          <p className="mt-3">{titulo}</p>
        </div>
      </div>
      <div className="absolute -bottom-[45px] xl:-bottom-[50px] w-full flex justify-center">
        <div
          className={`font-[EastmanBold] h-[45px] xl:h-[50px] text-center w-[180px] xl:w-[270px] bg-[${colorEdades}] bg-[url('/img/AE/school30.webp')] bg-tra bg-cover bg-no-repeat text-2xl xl:text-4xl text-[#000b7a] flex justify-center items-center`}
        >
          {edades}
        </div>
      </div>
    </a>
  )
}
