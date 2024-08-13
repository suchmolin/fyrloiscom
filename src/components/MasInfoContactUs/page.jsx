import Image from "next/image"
import { useTranslations } from "next-intl"

export default function MasInfoContactUs() {
  const t = useTranslations("contactUs.MasInfoContactUs")

  return (
    <>
      <div className="pb-10 text-center flex flex-col items-center">
        <h2 className="text-[#000b7a] text-4xl font-bold py-4">{t("h2")}</h2>
        <p className="text-gray-500 w-8/12">{t("p")}</p>
      </div>
      <div className="w-11/12 flex flex-wrap gap-10 justify-center pb-20">
        <div className="w-full sm:w-fit flex flex-col md:flex-row items-center gap-4 rounded-2xl shadow-xl py-5 px-10">
          <div className="relative w-[60px] h-[60px]">
            <Image src="/img/maps.png" fill objectFit="contain" alt="icono" />
          </div>
          <p className="text-xl text-[#000b7a]">
            928 East Osceola Parkway, Kissimmee, FL 34744
          </p>
        </div>
        <div className="w-full sm:w-fit flex flex-col md:flex-row items-center gap-4 rounded-2xl shadow-xl py-5 px-10">
          <div className="relative w-[60px] h-[60px]">
            <Image src="/img/telphone.jpg" fill objectFit="" alt="icono" />
          </div>
          <p className="text-xl text-[#000b7a]">+1 (305) 510-5259</p>
        </div>
        <div className="w-full sm:w-fit flex flex-col md:flex-row items-center gap-4 rounded-2xl shadow-xl py-5 px-10">
          <div className="relative w-[60px] h-[60px]">
            <Image src="/img/mail.jpg" fill objectFit="contain" alt="icono" />
          </div>
          <p className="text-xl text-[#000b7a]">info@fyrlois.com</p>
        </div>
        <div className="w-full sm:w-fit flex flex-col md:flex-row items-center gap-4 rounded-2xl shadow-xl py-5 px-10">
          <div className="relative w-[60px] h-[60px]">
            <Image
              src="/img/facebook.png"
              fill
              objectFit="contain"
              alt="icono"
            />
          </div>
          <p className="text-xl text-[#000b7a]">Fyr Lois English Institute</p>
        </div>
        <div className="w-full sm:w-fit flex flex-col md:flex-row items-center gap-4 rounded-2xl shadow-xl py-5 px-10">
          <div className="relative w-[60px] h-[60px]">
            <Image src="/img/x.png" fill objectFit="contain" alt="icono" />
          </div>
          <p className="text-xl text-[#000b7a]">Fyrloisoficial</p>
        </div>
        <div className="w-full sm:w-fit flex flex-col md:flex-row items-center gap-4 rounded-2xl shadow-xl py-5 px-10">
          <div className="relative w-[60px] h-[60px]">
            <Image
              src="/img/instagram.png"
              fill
              objectFit="contain"
              alt="icono"
            />
          </div>
          <p className="text-xl text-[#000b7a]">@fyrlois</p>
        </div>
        <div className="w-full sm:w-fit flex flex-col md:flex-row items-center gap-4 rounded-2xl shadow-xl py-5 px-10">
          <div className="relative w-[60px] h-[60px]">
            <Image
              src="/img/linkedin.png"
              fill
              objectFit="contain"
              alt="icono"
            />
          </div>
          <p className="text-xl text-[#000b7a]">Fyr Lois</p>
        </div>
      </div>
    </>
  )
}
