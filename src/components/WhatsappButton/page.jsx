import { FaWhatsapp } from "react-icons/fa"

export default function WhatsappButton() {
  return (
    <a
      aria-label="whatsapp"
      target="_blank"
      href="https://wa.me/message/UO55JH5EAKQZN1"
      className=" fixed bottom-3 md:bottom-8 right-3 md:right-8 p-[10px] bg-[#25D366] rounded-full cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 z-50"
    >
      <FaWhatsapp className="text-2xl text-white" />
    </a>
  )
}
