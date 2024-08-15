"use client"
import Image from "next/image"
import { Slide } from "react-awesome-reveal"
import NavbarMenu from "../NavbarMenu/page"
import { LanguageSelector } from "../LanguageSelector/page"
import { IoIosArrowUp } from "react-icons/io"
import { GrMenu } from "react-icons/gr"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="absolute flex flex-col md:flex-row items-center justify-center md:justify-end pr-0 md:pr-10 xl:mr-0 xl:justify-center w-full h-40 z-10 font-[lato]">
      <LanguageSelector />
      <Slide className="w-[160px] h-[60px] mt-6 md:w-[200px] md:h-[77px] relative md:absolute md:left-16 2xl:left-28 flex items-center mb-3 md:mb-0">
        <Link href="/" aria-label="imagen fyrlois">
          <Image src="/img/1.png" fill objectFit="cover" alt="" />
        </Link>
      </Slide>
      {open && (
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 text-[#000b7a] bg-white text-lg font-extralight p-1 rounded-full border border-gray-200 shadow-md z-10"
        >
          <IoIosArrowUp />
        </button>
      )}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="absolute block sm:hidden top-3 right-20 text-[#000b7a] text-lg font-extralight p-2 rounded-full z-10"
        >
          <GrMenu />
        </button>
      )}
      <div className="hidden sm:block">
        <NavbarMenu />
      </div>
      {open && <NavbarMenu setOpen={setOpen} />}
    </nav>
  )
}
