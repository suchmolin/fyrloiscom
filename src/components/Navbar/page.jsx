"use client"
import Image from "next/image"
import { Slide } from "react-awesome-reveal"
import NavbarMenu from "../NavbarMenu/page"
import { LanguageSelector } from "../LanguageSelector/page"
import { TfiClose } from "react-icons/tfi"
import { GrMenu } from "react-icons/gr"
import Link from "next/link"
import { useState } from "react"
import { useLocale } from "next-intl"
import CartModal from "../CartModal/page"
import { useContext } from "react"
import { OpenModalContext } from "@/context/openModal"
import CartButtonPage from "../CartButton/page"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState()
  const locale = useLocale()
  const { isOpen, setIsOpen, cantCart, setCantCart } =
    useContext(OpenModalContext)

  return (
    <nav className="absolute flex flex-col-reverse md:flex-row items-start lg:items-center justify-end  xl:mr-0  w-full h-32 xl:h-40 z-20 font-[lato] pt-0">
      <div className="hidden lg:block">
        <LanguageSelector locale={locale} />
      </div>
      <Slide
        triggerOnce
        className="w-[150px] xs:w-[200px] sm:w-[260px] h-[58px] xs:h-[75px] sm:h-[100px] lg:w-[200px] lg:h-[77px] mt-5 xs:mt-3 lg:mt-0 xl:mt-0 absolute left-3 sm:left-3 md:left-16 xl:left-28 flex items-center mb-3 md:mb-0"
      >
        <Link
          onClick={() => {
            setPage("home")
            setOpen(false)
          }}
          href="/"
          aria-label="imagen fyrlois"
        >
          <Image src="/img/1.png" fill objectFit="cover" alt="" />
        </Link>
      </Slide>
      {open && (
        <>
          <button
            aria-label="close"
            onClick={() => setOpen(false)}
            className="fixed top-5 right-5 bg-white text- font-extralight p-2 rounded-full border border-gray-200 shadow-md z-50"
          >
            <TfiClose />
          </button>
        </>
      )}
      {!open && (
        <>
          <div className="lg:hidden block z-50">
            <LanguageSelector locale={locale} />
          </div>
          <button
            aria-label="menu"
            onClick={() => setOpen(true)}
            className="absolute block lg:hidden top-7 right-7 text-gray-700 text-lg p-2 rounded-full z-50 bg-white shadow-md"
          >
            <GrMenu />
          </button>
          <div className="absolute block lg:hidden top-[70px] right-6">
            <CartButtonPage
              cantCart={cantCart}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />
          </div>
        </>
      )}
      <div className="hidden lg:block">
        <NavbarMenu page={page} setPage={setPage} setOpen={setOpen} />
      </div>
      {open && <NavbarMenu setOpen={setOpen} />}
      <CartModal />
    </nav>
  )
}
