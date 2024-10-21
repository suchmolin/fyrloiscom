"use client"
import { useTranslations, useLocale } from "next-intl"
import IdiomasSelector from "../IdiomasSelector/page"
import Link from "next/link"
import { useContext } from "react"
import CursosSelector from "../CursosSelector/page"
import { MdOutlineShoppingCart } from "react-icons/md"
import { OpenModalContext } from "@/context/openModal"
import CartModal from "../CartModal/page"
import { useEffect } from "react"

export default function NavbarMenu({ setOpen, setPage, page }) {
  const { isOpen, setIsOpen, cantCart, setCantCart } =
    useContext(OpenModalContext)
  const t = useTranslations("navbarMenu")
  const locale = useLocale()

  useEffect(() => {
    const cartInfo = JSON.parse(localStorage.getItem("cartInfo") || "[]")
    const totalCantidad = cartInfo?.reduce((acumulador, item) => {
      return acumulador + (item.cantidad || 0)
    }, 0)
    setCantCart(totalCantidad)
  })

  return (
    <>
      <ul className="fixed h-full lg:relative flex flex-col lg:flex-row lg:items-center justify-center lg:justify-start gap-7 xl:gap-10 text-[#001A70] text-2xl sm:text-base lg:text-lg  font-bold bg-gradient-to-b from-white lg:from-transparent to-gray-300 sm:bg-transparent w-full lg:w-fit pb-20 lg:py-0 pl-5 md:pr-32 lg:pr-24 xl:pr-52 2xl:pr-80 z-40">
        <li className="hover:text-[#bb29b9] transition-all duration-300 ">
          <IdiomasSelector />
        </li>
        <li
          className={`hover:text-[#bb29b9] transition-colors duration-300 border-[#001a70] ${page == "aboutUs" ? "border-b-[3px]" : ""}`}
        >
          <Link
            onClick={() => {
              setPage("aboutUs")
              setOpen(false)
            }}
            href={`/${locale}/aboutUs`}
            className=""
          >
            {t("item4")}
          </Link>
        </li>
        <li
          className={`hover:text-[#bb29b9] transition-colors duration-300 border-[#001a70] ${page == "contactUs" ? "border-b-[3px]" : ""}`}
        >
          <Link
            onClick={() => {
              setPage("contactUs")
              setOpen(false)
            }}
            href={`/${locale}/contactUs`}
            className=""
          >
            {t("item5")}
          </Link>
        </li>
        <li
          className={`hover:text-[#bb29b9] transition-colors duration-300 border-[#001a70]  ${page == "blog" ? "border-b-[3px]" : ""}`}
        >
          <Link
            onClick={() => {
              setPage("blog")
              setOpen(false)
            }}
            href={`/${locale}/blog`}
            className=""
          >
            Blog
          </Link>
        </li>
        <li className="hover:text-[#bb29b9] transition-all duration-300 ">
          <CursosSelector setOpen={setOpen} />
        </li>
        <li
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-2 rounded-full flex items-center justify-center bg-[#9ee701] cursor-pointer hover:shadow-lg "
        >
          <MdOutlineShoppingCart className="text-2xl" />
          {cantCart > 0 && (
            <span className="absolute -top-1 -right-3 bg-red-500 text-white rounded-full px-2 py-1 text-xs flex items-center justify-center">
              {cantCart}
            </span>
          )}
        </li>
      </ul>
      <CartModal />
    </>
  )
}
