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

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const locale = useLocale()
  return (
    <nav className="absolute flex flex-col-reverse md:flex-row items-start lg:items-center justify-end  xl:mr-0  w-full h-32 xl:h-40 z-10 font-[lato] pt-0">
      <div className="hidden lg:block">
        <LanguageSelector locale={locale} />
      </div>
      <Slide
        triggerOnce
        className="w-[200px] sm:w-[260px] h-[75px] sm:h-[100px] lg:w-[200px] lg:h-[77px] mt-3 lg:mt-0 xl:mt-6 absolute left-3 sm:left-3 md:left-16 xl:left-28 flex items-center mb-3 md:mb-0"
      >
        <Link href="/" aria-label="imagen fyrlois">
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
          <div className="lg:hidden block z-50">
            <LanguageSelector locale={locale} />
          </div>
        </>
      )}
      {!open && (
        <button
          aria-label="menu"
          onClick={() => setOpen(true)}
          className="absolute block lg:hidden top-7 right-7 text-gray-700 text-lg p-2 rounded-full z-50 bg-white shadow-md"
        >
          <GrMenu />
        </button>
      )}
      <div className="hidden lg:block">
        <NavbarMenu setOpen={setOpen} />
      </div>
      {open && <NavbarMenu setOpen={setOpen} />}
    </nav>
  )
}
