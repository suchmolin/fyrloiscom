"use client"
import Image from "next/image"
import { data } from "@/data/sedes"
import { useTranslations } from "next-intl"
import MasInfoContactUs from "@/components/MasInfoContactUs/page"
import { useContext, useEffect } from "react"
import { OpenModalContext } from "@/context/openModal"

export default function CheckoutSuccessPage() {
  const t = useTranslations("MasInfoContactUs")
  const { setCantCart, setCartInfo } = useContext(OpenModalContext)

  useEffect(() => {
    setCantCart(0)
    setCartInfo([])
    localStorage.removeItem("cartInfo")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <div className="w-full flex flex-col items-center pt-36 pb-20">
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
        <p className="sm:w-[500px] px-5 sm:px-0 text-center mt-5 text-2xl text-gray-600">
          Si tienes alguna duda puedes llamarnos a
        </p>
        <div className="w-fit flex gap-5 items-center justify-center mt-5 py-2 px-4 bg-[#9ee701] rounded-xl text-xl">
          <Image src="/img/telefono.png" width={20} height={20} alt="phone" />
          +1 (305) 5105259
        </div>
      </div>
      <MasInfoContactUs titulo={t("titulo")} data={data[0]} />
    </>
  )
}
