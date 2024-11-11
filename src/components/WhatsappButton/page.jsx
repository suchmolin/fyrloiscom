"use client"
import { OpenModalContext } from "@/context/openModal"
import { useContext } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"

export default function WhatsappButton() {
  const { waButton, setWaButton } = useContext(OpenModalContext)
  const wa = [{ titulo: "", href: "" }]

  return (
    <div className="fixed bottom-5 md:bottom-10 right-3 md:right-8">
      <div className="realtive w-[30px] aspect-square">
        <button
          onClick={() => setWaButton(!waButton)}
          aria-label="whatsapp"
          target="_blank"
          className=" absolute top-0 left-0 p-[10px] bg-[#25D366] rounded-full cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 z-50"
        >
          <FaWhatsapp className="text-2xl text-white" />
        </button>
        <a
          className={`absolute ${waButton ? "-top-14 left-2 opacity-100" : "top-2 left-2 opacity-0"} transition-all duration-300 flex flex-col items-center`}
          href="https://wa.me/message/UO55JH5EAKQZN1"
        >
          <IoLogoWhatsapp className="bg-white rounded-full p-1 text-3xl text-[#25D366]" />
          <p className="font-bold text-[#25D366] text-xs whitespace-nowrap ">
            Online
          </p>
        </a>
        <a
          className={`absolute ${waButton ? "-top-10 -left-10 opacity-100" : "top-2 left-2 opacity-0"} transition-all duration-300 flex flex-col items-center`}
          href="https://wa.me/message/UO55JH5EAKQZN1"
        >
          <IoLogoWhatsapp className="bg-white rounded-full p-1 text-3xl text-[#25D366]" />
          <p className="font-bold text-[#25D366] text-xs whitespace-nowrap ">
            USA
          </p>
        </a>
        <a
          className={`absolute ${waButton ? "top-5 -left-14 opacity-100" : "top-2 left-2 opacity-0"} transition-all duration-300 flex flex-col items-center`}
          href="https://wa.me/message/UO55JH5EAKQZN1"
        >
          <IoLogoWhatsapp className="bg-white rounded-full p-1 text-3xl text-[#25D366]" />
          <p className="font-bold text-[#25D366] text-xs whitespace-nowrap ">
            Venezuela
          </p>
        </a>
      </div>
    </div>
  )
}
