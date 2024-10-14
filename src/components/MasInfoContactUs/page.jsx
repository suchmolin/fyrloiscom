import Image from "next/image"

export default function MasInfoContactUs({ titulo, subtitulo, data, mt }) {
  return (
    <>
      <div
        className={`relative w-full pb-20 text-center flex flex-col items-center pt-10  bg-[#001a70] text-white ${mt}`}
      >
        <h2 className="text-4xl sm:text-5xl font-bold py-4 px-3 sm:px-0">
          {titulo}
        </h2>
        <p className="w-8/12 mb-5 text-xl">{subtitulo}</p>
        <div className="w-10/12 flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="rounded-xl h-[190px] w-[290px] xs:w-[300px] sm:w-[400px] bg-white text-[#001a70] px-4 py-4 text-lg sm:text-xl flex flex-col gap-3">
            <a
              href={`mailto:${data.email}`}
              className="flex gap-4 items-center  "
            >
              <div className="relative w-[25px] aspect-square">
                <Image
                  src="/img/correo.png"
                  layout="fill"
                  objectFit="contain"
                  alt="correo"
                />
              </div>
              <p>{data.email}</p>
            </a>
            <div className="flex gap-4 items-center  ">
              <div className="relative w-[25px] aspect-square">
                <Image
                  src="/img/telefono.png"
                  layout="fill"
                  objectFit="contain"
                  alt="correo"
                />
              </div>
              <p>{data.telefono}</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="relative w-[25px] aspect-square">
                <Image
                  src="/img/location.png"
                  layout="fill"
                  objectFit="contain"
                  alt="correo"
                />
              </div>
              <p className="w-fit text-start">{data.direccion}</p>
            </div>
          </div>
          <div className="rounded-xl h-[190px] w-[290px] xs:w-[300px] sm:w-[400px] bg-white text-[#001a70] px-4 py-4 text-lg sm:text-xl flex gap-3 flex-col justify-center">
            <a
              href={data.social.instagram.href}
              className="flex gap-4 items-center"
            >
              <div className="relative w-[25px] aspect-square">
                <Image
                  src="/img/instagram.png"
                  layout="fill"
                  objectFit="contain"
                  alt="correo"
                />
              </div>
              <p className="w-fit text-start">{data.social.instagram.tag}</p>
            </a>
            <a
              href={data.social.facebook.href}
              className="flex gap-4 items-center  "
            >
              <div className="relative w-[25px] aspect-square">
                <Image
                  src="/img/facebook.png"
                  layout="fill"
                  objectFit="contain"
                  alt="correo"
                />
              </div>
              <p>{data.social.facebook.tag}</p>
            </a>
            <a
              href={data.social.linkedin.href}
              className="flex gap-4 items-center  "
            >
              <div className="relative w-[25px] aspect-square">
                <Image
                  src="/img/linkedin.png"
                  layout="fill"
                  objectFit="contain"
                  alt="correo"
                />
              </div>
              <p className="w-fit text-start">{data.social.linkedin.tag}</p>
            </a>
            <a href={data.social.x.href} className="flex gap-4 items-center  ">
              <div className="relative w-[25px] aspect-square">
                <Image
                  src="/img/x.png"
                  layout="fill"
                  objectFit="contain"
                  alt="correo"
                />
              </div>
              <p>{data.social.x.tag}</p>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
