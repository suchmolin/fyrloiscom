import Image from "next/image"
import { useTranslations } from "next-intl"

export default function SocialFooter() {
  const t = useTranslations("Footer")
  return (
    <div className="w-full sm:w-fit flex flex-row lg:flex-col justify-between sm:justify-center lg:justify-end gap-5 text-[#001A70]">
      <div className="relative w-[199px] aspect-video">
        <Image
          src="/img/1.png"
          objectFit="contain"
          alt="fyrlois logo"
          layout="fill"
        />
      </div>
      <p className="font-bold text-lg text-[#001a70] hidden sm:block">
        Síguenos
      </p>
      <div className="flex gap-5">
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
      </div>
    </div>
  )
}
