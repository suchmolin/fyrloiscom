import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
export default function SocialMenuAE() {
  return (
    <div className="fixed right-0 top-0 h-screen flex flex-col justify-center items-end z-50">
      <a
        aria-label="Instagram"
        href="https://www.instagram.com/fyrloisgrancaracas/?hl=en"
        target="_blank"
        className="w-[35px] sm:w-[45px] h-[40px] sm:h-[50px] text-white text-2xl sm:text-3xl flex items-center justify-center bg-[#000b7a] rounded-l-md hover:w-[47px] transition-all duration-300"
      >
        <FaInstagram />
      </a>
      <a
        aria-label="Whatsapp"
        href="https://wa.me/584242760113"
        target="_blank"
        className="w-[35px] sm:w-[45px] h-[40px] sm:h-[50px] text-white text-2xl sm:text-3xl flex items-center justify-center bg-[#f37eb5] rounded-l-md hover:w-[47px] transition-all duration-300"
      >
        <FaWhatsapp />
      </a>
    </div>
  )
}
