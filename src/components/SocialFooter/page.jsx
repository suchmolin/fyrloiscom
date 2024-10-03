import Image from "next/image"
import { useTranslations } from "next-intl"

export default function SocialFooter() {
  const t = useTranslations("Footer")
  return (
    <div className="flex flex-col sm:flex-row lg:flex-col justify-center items-center lg:justify-end lg:items-end gap-5 sm:mt-20 text-[#001A70]">
      <h2 className="text-3xl text-[#001A70] font-bold">{t("h2")}</h2>
      <a
        href="https://www.instagram.com/fyrlois"
        target="_blank"
        className="text-sm md:text-base flex gap-2 justify-end hover:text-[#bb29b9] transition-all duration-300 "
      >
        @fyrlois{" "}
        <div className="relative w-[20px] h-[20px] md:w-[24px] md:h-[24px] overflow-hidden">
          <Image
            className="hover:scale-110 transition-all duration-300"
            src="/img/instagram.png"
            objectFit="cover"
            fill
            alt="instagram"
          />
        </div>
      </a>
      <a
        href="https://www.facebook.com/fyrlois.oficial"
        target="_blank"
        className="text-sm md:text-base flex gap-2 justify-end hover:text-[#bb29b9] transition-all duration-300"
      >
        Fyr Lois English Institute{" "}
        <div className="relative w-[20px] h-[20px] md:w-[24px] md:h-[24px] overflow-hidden">
          <Image
            className="hover:scale-110 transition-all duration-300"
            src="/img/facebook.png"
            objectFit="cover"
            fill
            alt="Facebook"
          />
        </div>
      </a>
      <a
        href="https://www.linkedin.com/company/fyr-lois-language-institute"
        target="_blank"
        className="text-sm md:text-base flex gap-2 justify-end hover:text-[#bb29b9] transition-all duration-300"
      >
        Fyr Lois{" "}
        <div className="relative w-[20px] h-[20px] md:w-[24px] md:h-[24px] overflow-hidden">
          <Image
            className="hover:scale-110 transition-all duration-300"
            src="/img/linkedin.png"
            objectFit="cover"
            fill
            alt="Linkedin"
          />
        </div>
      </a>
    </div>
  )
}
