import Image from "next/image"
import { useTranslations } from "next-intl"

export default function Customers() {
  const t = useTranslations("Customers")
  return (
    <div className="relative flex flex-col items-center bg-gray-100 w-full overflow-hidden py-10">
      <h2 className="text-center text-3xl text-[#001A70] font-bold mb-2">
        {t("h2")}
      </h2>
      <p className="w-10/12 sm:w-6/12 text-center text-lg text-gray-500 mb-10">
        {t("p")}
      </p>
      <div className="flex justify-center flex-wrap items-center gap-10 sm:gap-20 ">
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
    </div>
  )
}
