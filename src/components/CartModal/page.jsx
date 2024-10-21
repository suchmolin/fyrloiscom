/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { Button, Drawer } from "flowbite-react"
import { useContext, useEffect, useState } from "react"
import { OpenModalContext } from "@/context/openModal"
import { data } from "@/data/cursos"
import { RiDeleteBin6Line } from "react-icons/ri"
import Image from "next/image"
import Link from "next/link"
import { handleCheckout } from "@/checkoutCart"
import { useLocale } from "next-intl"

export default function CartModal() {
  const locale = useLocale()
  const { isOpen, setIsOpen, setCantCart, cartInfo, setCartInfo } =
    useContext(OpenModalContext)
  const [subTotal, setSubTotal] = useState(0)
  const handleClose = () => setIsOpen(false)

  useEffect(() => {
    const cartInformacion = JSON.parse(localStorage.getItem("cartInfo"))
    setCartInfo(cartInformacion)
  }, [])

  useEffect(() => {
    const sumarTotal = async () => {
      const cartInformacion = JSON.parse(localStorage.getItem("cartInfo"))
      if (cartInformacion) {
        const total = await cartInformacion.reduce((acumulador, item) => {
          return acumulador + item.cantidad * item.precio
        }, 0)

        setSubTotal(total || 0)
      } else {
        setSubTotal(0)
      }
    }
    sumarTotal()
  }, [cartInfo])

  const deleteOnCart = (id) => {
    const cartInfo = JSON.parse(localStorage.getItem("cartInfo"))
    const index = cartInfo.findIndex((item) => item.id === id)
    cartInfo.splice(index, 1)
    localStorage.setItem("cartInfo", JSON.stringify(cartInfo))
    setCartInfo(cartInfo)
    const totalCantidad = cartInfo?.reduce((acumulador, item) => {
      return acumulador + (item.cantidad || 0)
    }, 0)
    setCantCart(totalCantidad)
  }

  const actualizarCantidad = (e, id) => {
    const cartInfo = JSON.parse(localStorage.getItem("cartInfo"))
    const index = cartInfo.findIndex((item) => item.id === id)
    cartInfo[index].cantidad = Number(e.target.value)
    localStorage.setItem("cartInfo", JSON.stringify(cartInfo))
    setCartInfo(cartInfo)
    const totalCantidad = cartInfo?.reduce((acumulador, item) => {
      return acumulador + (item.cantidad || 0)
    }, 0)
    setCantCart(totalCantidad)
  }

  return (
    <div id="zIndex">
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="Your Cart" />
        <Drawer.Items>
          {cartInfo?.map((item, i) => {
            let curso
            data.forEach((cur) => {
              if (cur.id === item.id) {
                curso = cur
              } else {
                if (cur.subCourse?.some((sub) => sub.id === item.id)) {
                  curso = cur.subCourse.find((sub) => sub.id === item.id)
                }
              }
            })

            return (
              <div
                key={i}
                className="w-full px-2 font-[lato] flex gap-2 items-center border-gray-200 border-b-[1px] py-2"
              >
                <div className="w-[70px] h-[70px] relative">
                  <Image
                    src={"/img/" + curso.img}
                    alt={curso.id || "curso"}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#000b7a] font-bold text-lg">
                    {curso.title}
                  </h3>
                  <p className="text-gray-500 text-xl">$ {curso.price}.00</p>
                  <div className="flex gap-4">
                    <input
                      onChange={(e) => actualizarCantidad(e, curso.id)}
                      type="number"
                      max={10}
                      min={1}
                      className="rounded-sm w-[70px] h-[30px]"
                      defaultValue={item.cantidad}
                      onKeyDown={(e) => {
                        // Permite solo el uso de las flechas arriba y abajo
                        if (e.key !== "ArrowUp" && e.key !== "ArrowDown") {
                          e.preventDefault()
                        }
                      }}
                    />
                    <button
                      onClick={() => deleteOnCart(curso.id)}
                      className="text-[#90d400] text-xl text-start hover:font-bold"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
          {cartInfo?.length > 0 ? (
            <div>
              <p className="text-[#000b7a] text-lg font-bold p-2">
                Subtotal: ${subTotal}.00
              </p>
              <Button
                className="w-full bg-[#ffa101] hover:bg-[#000b7a] text-white"
                onClick={() => handleCheckout(cartInfo)}
              >
                Checkout
              </Button>
            </div>
          ) : (
            <>
              <p className="text-[#000b7a] text-lg font-bold p-2">
                Your cart is empty
              </p>
              <Link
                href={`/${locale}/online/courses`}
                className="w-full bg-[#ffa101] hover:bg-[#000b7a] text-white py-2 px-5 rounded-md mt-3"
              >
                Nuestros Cursos
              </Link>
            </>
          )}
        </Drawer.Items>
      </Drawer>
    </div>
  )
}
