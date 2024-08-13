import Image from "next/image"
import { useTranslations } from "next-intl"

export default function Customers() {
  const t = useTranslations("Customers")
  return (
    <div className="bottomCustomer relative flex flex-col items-center bg-gray-100 min-h-[200px] w-full pb-20 overflow-hidden pt-10">
      <Image
        className="absolute -rotate-45 left-20 md:-top-5 scale-130 md:scale-[130%]"
        src="/img/contrato.webp"
        width={400}
        height={500}
        alt="contrato"
      />
      <div className="flex justify-center flex-wrap items-center gap-10 sm:gap-20  mt-20  text-7xl py-10 z-10">
        <div className="relative w-[100px] h-[50px]">
          <Image src="/img/empresa1.png" objectFit="cover" fill alt="client" />
        </div>
        <div className="relative w-[100px] h-[50px]">
          <Image src="/img/empresa2.png" objectFit="cover" fill alt="client" />
        </div>
        <div className="relative w-[100px] h-[50px]">
          <Image src="/img/empresa3.png" objectFit="cover" fill alt="client" />
        </div>
        <div className="relative w-[100px] h-[50px]">
          <Image src="/img/empresa4.png" objectFit="cover" fill alt="client" />
        </div>
        <div className="relative w-[100px] h-[50px]">
          <Image src="/img/empresa5.png" objectFit="cover" fill alt="client" />
        </div>
        <div className="relative w-[100px] h-[50px]">
          <Image src="/img/empresa6.png" objectFit="cover" fill alt="client" />
        </div>
      </div>
      <h2 className="text-center text-3xl text-[#000b7a] font-bold z-10 mb-4">
        {t("h2")}
      </h2>
      <p className="z-10 w-10/12 sm:w-6/12 text-center text-lg text-gray-500 mb-10">
        {t("p")}
      </p>
    </div>
  )
}
