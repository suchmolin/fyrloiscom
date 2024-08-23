import Image from "next/image"

export default function MasInfoContactUs({ titulo, subtitulo, data }) {
  return (
    <>
      <div className="pb-10 text-center flex flex-col items-center">
        <h2 className="text-[#000b7a] text-5xl font-bold py-4">{titulo}</h2>
        <p className="text-gray-500 w-8/12">{subtitulo}</p>
      </div>
      <div className="w-11/12 flex flex-wrap gap-10 justify-center pb-10">
        <a
          href="#"
          className="w-full sm:w-fit flex flex-col md:flex-row items-center gap-4 rounded-2xl shadow-xl py-5 px-10 hover:bg-[#bb29b9]/10 transition-all duration-300"
        >
          <div className="relative w-[60px] h-[60px]">
            <Image src="/img/maps.png" fill objectFit="contain" alt="icono" />
          </div>
          <p className="text-xl text-[#000b7a]">{data.direccion}</p>
        </a>
        <a
          href="#"
          className="w-full sm:w-fit flex flex-col md:flex-row items-center gap-4 rounded-2xl shadow-xl py-5 px-10 hover:bg-[#bb29b9]/10 transition-all duration-300"
        >
          <div className="relative w-[60px] h-[60px]">
            <Image src="/img/telphone.jpg" fill objectFit="" alt="icono" />
          </div>
          <p className="text-xl text-[#000b7a]">{data.telefono}</p>
        </a>
        <a
          href="#"
          className="w-full sm:w-fit flex flex-col md:flex-row items-center gap-4 rounded-2xl shadow-xl py-5 px-10 hover:bg-[#bb29b9]/10 transition-all duration-300"
        >
          <div className="relative w-[60px] h-[60px]">
            <Image src="/img/mail.jpg" fill objectFit="contain" alt="icono" />
          </div>
          <p className="text-xl text-[#000b7a]">{data.email}</p>
        </a>

        <a
          href="#"
          className="w-full sm:w-fit flex flex-col md:flex-row items-center gap-4 rounded-2xl shadow-xl py-5 px-10 hover:bg-[#bb29b9]/10 transition-all duration-300"
        >
          <div className="relative w-[60px] h-[60px]">
            <Image
              src="/img/facebook.png"
              fill
              objectFit="contain"
              alt="icono"
            />
          </div>
          <p className="text-xl text-[#000b7a]">{data.social.facebook.tag}</p>
        </a>
        <a
          href="#"
          className="w-full sm:w-fit flex flex-col md:flex-row items-center gap-4 rounded-2xl shadow-xl py-5 px-10 hover:bg-[#bb29b9]/10 transition-all duration-300"
        >
          <div className="relative w-[60px] h-[60px]">
            <Image src="/img/x.png" fill objectFit="contain" alt="icono" />
          </div>
          <p className="text-xl text-[#000b7a]">{data.social.x.tag}</p>
        </a>
        <a
          href="#"
          className="w-full sm:w-fit flex flex-col md:flex-row items-center gap-4 rounded-2xl shadow-xl py-5 px-10 hover:bg-[#bb29b9]/10 transition-all duration-300"
        >
          <div className="relative w-[60px] h-[60px]">
            <Image
              src="/img/instagram.png"
              fill
              objectFit="contain"
              alt="icono"
            />
          </div>
          <p className="text-xl text-[#000b7a]">{data.social.instagram.tag}</p>
        </a>
        <a
          href="#"
          className="w-full sm:w-fit flex flex-col md:flex-row items-center gap-4 rounded-2xl shadow-xl py-5 px-10 hover:bg-[#bb29b9]/10 transition-all duration-300"
        >
          <div className="relative w-[60px] h-[60px]">
            <Image
              src="/img/linkedin.png"
              fill
              objectFit="contain"
              alt="icono"
            />
          </div>
          <p className="text-xl text-[#000b7a]">{data.social.linkedin.tag}</p>
        </a>
      </div>
    </>
  )
}
