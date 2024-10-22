"use client"
import Image from "next/image"
import { data } from "@/data/sedes"
import { useTranslations } from "next-intl"
import MasInfoContactUs from "@/components/MasInfoContactUs/page"
import { useContext } from "react"
import { OpenModalContext } from "@/context/openModal"
import { useEffect } from "react"

export default function CheckoutSuccessPage() {
  const t = useTranslations("MasInfoContactUs")
  const { setCantCart, setCartInfo } = useContext(OpenModalContext)

  useEffect(() => {
    setCantCart(0)
    setCartInfo([])
    localStorage.removeItem("cartInfo")
  }, [])
  return (
    <>
      <div className="w-full flex flex-col items-center pt-48 pb-20">
        <div className="relative w-[290px] xs:w-[300px] aspect-square">
          <Image
            src="/img/checkout-success.png"
            layout="fill"
            objectFit="contain"
            alt="checkoutSuccess"
          />
        </div>
        <h1 className="text-4xl mt-3 font-bold text-center text-[#001a70]">
          Su pago fue exitoso
        </h1>
        <p className="sm:w-[500px] px-5 sm:px-0 text-center mt-5 text-xl text-gray-600">
          En breve recibirás un email, con los detalles de tu compra y serás
          contactado para completar el proceso de inscripción.
        </p>
      </div>
      <MasInfoContactUs titulo={t("titulo")} data={data[0]} />
    </>
  )
}
