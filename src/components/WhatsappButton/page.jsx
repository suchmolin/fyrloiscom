"use client"
import { OpenModalContext } from "@/context/openModal"
import { useContext } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"

export default function WhatsappButton() {
  const { waButton, setWaButton } = useContext(OpenModalContext)
  const wa = [{ titulo: "", href: "" }]

  return (
    <>
      <div
        className={`fixed ${waButton ? "bottom-10" : "bottom-5"}  md:bottom-10 right-5 md:right-8 z-50 transition-all duration-300`}
      >
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
            aria-label="whatsapp"
            target="_blank"
            className={`absolute ${waButton ? "-top-16 left-2 opacity-100" : "top-2 left-2 opacity-0"} transition-all duration-300 flex flex-col items-center`}
            href="https://wa.me/13055105259"
          >
            <IoLogoWhatsapp className="bg-white rounded-full p-1 text-3xl text-[#25D366]" />
            <p className="font-bold text-[#25D366] text-xs whitespace-nowrap ">
              Online
            </p>
          </a>
          <a
            aria-label="whatsapp"
            target="_blank"
            className={`absolute ${waButton ? "-top-9 -left-11 opacity-100" : "top-2 left-2 opacity-0"} transition-all duration-300 flex flex-col items-center`}
            href="https://wa.me/13055105259"
          >
            <IoLogoWhatsapp className="bg-white rounded-full p-1 text-3xl text-[#25D366]" />
            <p className="font-bold text-[#25D366] text-xs whitespace-nowrap ">
              USA
            </p>
          </a>
          <a
            aria-label="whatsapp"
            target="_blank"
            className={`absolute ${waButton ? "top-5 -left-20 opacity-100" : "top-2 left-2 opacity-0"} transition-all duration-300 flex flex-col items-center`}
            href="https://wa.me/message/UO55JH5EAKQZN1"
          >
            <IoLogoWhatsapp className="bg-white rounded-full p-1 text-3xl text-[#25D366]" />
            <p className="font-bold text-[#25D366] text-xs whitespace-nowrap ">
              Venezuela
            </p>
          </a>
        </div>
      </div>
      <div
        className={`fixed bottom-0 right-0 ${waButton ? "w-[140px] sm:w-0" : "w-0"} aspect-square rounded-tl-full bg-white z-40 transition-all duration-200`}
      ></div>
    </>
  )
}
