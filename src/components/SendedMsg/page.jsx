import { useTranslations } from "next-intl"
import { Fade } from "react-awesome-reveal"
import { FaCheckCircle } from "react-icons/fa"

export default function SendedMsg() {
  const t = useTranslations("SendedMsg")
  return (
    <div className="fixed w-full bottom-20 sm:bottom-10 left-0 h-[80px] flex justify-center items-center">
      <Fade direction="up" triggerOnce>
        <div className="px-10 py-4 bg-gray-50 rounded-xl flex gap-3 items-center">
          <FaCheckCircle className="text-[#cdea80] text-base sm:text-xl" />
          <p className="text-base sm:text-xl">{t("sended")}</p>
        </div>
      </Fade>
    </div>
  )
}
