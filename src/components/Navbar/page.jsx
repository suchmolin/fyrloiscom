"use client"
import Image from "next/image"
import { Slide } from "react-awesome-reveal"
import NavbarMenu from "../NavbarMenu/page"
import { LanguageSelector } from "../LanguageSelector/page"
import Link from "next/link"

export default function Navbar({ lang }) {
  return (
    <nav className="absolute flex flex-col md:flex-row items-center justify-center md:justify-end pr-0 md:pr-10 xl:mr-0 xl:justify-center w-full h-40 z-10 font-[lato]">
      <LanguageSelector />
      <Slide className="w-[150px] h-[50px] md:w-[200px] md:h-[77px] relative md:absolute md:left-16 2xl:left-28 flex items-center mb-3 md:mb-0">
        <Link href="/">
          <Image src="/img/1.png" fill objectFit="cover" alt="" />
        </Link>
      </Slide>
      <NavbarMenu lang={lang} />
    </nav>
  )
}
