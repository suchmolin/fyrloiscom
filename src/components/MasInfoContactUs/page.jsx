import Image from "next/image"

export default function MasInfoContactUs({ titulo, data, mt }) {
  return (
    <>
      <div
        className={`relative w-full pb-20 flex flex-col-reverse lg:flex-row justify-center items-center pt-10  bg-[#001a70] text-white ${mt}`}
      >
        <div className="lg:w-6/12 flex gap-5 flex-col items-center lg:items-start">
          <h2 className="w-full fontTitulo font-bold py-4 px-3 sm:px-0 text-center md:text-start">
            {titulo}
          </h2>
          <div className="flex flex-col items-center sm:flex-row gap-5 text-black">
            <a
              href="#"
              className="w-fit flex gap-5 items-center justify-center py-2 px-4 bg-[#9ee701] rounded-xl text-xl"
            >
              <Image src="/img/email.png" width={20} height={20} alt="email" />
              {data.email}
            </a>
            <a
              href="#"
              className="w-fit flex gap-5 items-center justify-center py-2 px-4 bg-[#9ee701] rounded-xl text-xl"
            >
              <Image
                src="/img/telefono.png"
                width={20}
                height={20}
                alt="phone"
              />
              {data.telefono}
            </a>
          </div>
          <div className="flex flex-col items-center sm:flex-row gap-5 text-black">
            <a
              href={data.social.instagram.href}
              className="w-fit flex gap-5 items-center justify-center py-2 px-4 bg-white rounded-xl text-xl"
            >
              <Image
                src="/img/instagram.png"
                width={20}
                height={20}
                alt="email"
              />
              {data.social.instagram.tag}
            </a>
            <a
              href={data.social.facebook.href}
              className="w-fit flex gap-5 items-center justify-center py-2 px-4 bg-white rounded-xl text-xl"
            >
              <Image
                src="/img/facebook.png"
                width={20}
                height={20}
                alt="phone"
              />
              {data.social.facebook.tag}
            </a>
          </div>
          <div className="flex flex-col items-center sm:flex-row gap-5 text-black">
            <a
              href={data.social.linkedin.href}
              className="w-fit flex gap-5 items-center justify-center py-2 px-4 bg-white rounded-xl text-xl"
            >
              <Image
                src="/img/linkedin.png"
                width={20}
                height={20}
                alt="email"
              />
              {data.social.linkedin.tag}
            </a>
            <a
              href={data.social.x.href}
              className="w-fit flex gap-5 items-center justify-center py-2 px-4 bg-white rounded-xl text-xl"
            >
              <Image src="/img/x.png" width={20} height={20} alt="phone" />
              {data.social.x.tag}
            </a>
          </div>
        </div>
        <div className="relative w-[230px] xs:8-[280px] sm:w-[350px] aspect-square">
          <Image
            src="/img/masInfo.png"
            layout="fill"
            objectFit="contain"
            alt="mas info contact us"
          />
        </div>
      </div>
    </>
  )
}
