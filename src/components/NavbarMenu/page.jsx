"use client"
import { useTranslations, useLocale } from "next-intl"
import IdiomasSelector from "../IdiomasSelector/page"
import Link from "next/link"
import { useState } from "react"

export default function NavbarMenu({ setOpen, setPage, page }) {
  const t = useTranslations("navbarMenu")
  const locale = useLocale()
  return (
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
      <li
        className={`hover:text-[#bb29b9] transition-colors duration-300 border-[#001a70]  ${page == "online" ? "border-b-[3px]" : ""}`}
      >
        <Link
          onClick={() => {
            setPage("online")
            setOpen(false)
          }}
          href={`/${locale}/online`}
          className=""
        >
          {t("item2")}
        </Link>
      </li>
      <li className="">
        <Link
          onClick={() => {
            setPage("")
            setOpen(false)
          }}
          href={`/${locale}/sedes`}
          className="w-full h-full hover:bg-[#9ee701] hover:text-[#001a70] rounded-lg px-2 py-1 transition-all duration-300   bg-[#001a70] text-white "
        >
          Cursos
        </Link>
        {/*<PresencialSelector setOpen={setOpen} />*/}
      </li>
    </ul>
  )
}
