import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"

export default function SocialFooter() {
  const t = useTranslations("Footer")
  const locale = useLocale()
  return (
    <div className="w-full sm:w-fit flex flex-row lg:flex-col justify-between sm:justify-center lg:justify-end gap-5 text-[#001A70]">
      <a href={`/${locale}/`} className="relative w-[199px] aspect-video">
        <Image
          src="/img/logoFyrlois.png"
          objectFit="contain"
          alt="fyrlois logo"
          layout="fill"
        />
      </a>
      <p className="font-bold text-2xl text-[#001a70] hidden sm:block">
        {t("p2")}
      </p>
      <div className="flex gap-5">
        <a
          href="https://www.instagram.com/fyrlois"
          target="_blank"
          className="relative w-[24px] aspect-square"
        >
          <Image
            className="hover:scale-110 transition-all duration-300"
            src="/img/instagram.png"
            objectFit="contain"
            fill
            alt="instagram"
          />
        </a>
        <a
          href="https://www.facebook.com/fyrlois.oficial"
          target="_blank"
          className="relative w-[24px] aspect-square"
        >
          <Image
            className="hover:scale-110 transition-all duration-300"
            src="/img/facebook.png"
            objectFit="contain"
            fill
            alt="Facebook"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/fyr-lois-language-institute"
          target="_blank"
          className="relative w-[24px] aspect-square"
        >
          <Image
            className="hover:scale-110 transition-all duration-300"
            src="/img/linkedin.png"
            objectFit="contain"
            fill
            alt="Linkedin"
          />
        </a>
      </div>
    </div>
  )
}
