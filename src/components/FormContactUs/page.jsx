"use client"
import { FloatingLabel, Label, Select } from "flowbite-react"
import Image from "next/image"
import { useState } from "react"
import { useTranslations } from "next-intl"
import { IoIosArrowDown } from "react-icons/io"

export default function FormContactUs() {
  const t = useTranslations("contactUs.FormContactUs")

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-center sm:px-16 xl:px-32">
      <div className="w-11/12 sm:w-10/12 lg:w-3/12 flex flex-col items-center lg:items-start mt-32 lg:mt-0">
        <div className="relative w-[200px] aspect-square">
          <Image
            src="/img/contactUs.png"
            objectFit="contain"
            layout="fill"
            alt="message"
          />
        </div>
        <h2 className="text-3xl text-[#001a70] text-center lg:text-start">
          {t("h2")}
        </h2>
        <p>{t("p")}</p>
      </div>
      <form className="dropShadow2 w-[290px] xs:w-[350px] sm:w-[500px] md:w-[700px] rounded-2xl shadow-2xl mt-10 lg:mt-40 mb-20 flex flex-col justify-center items-center bg-gradient-to-b from-white to-[#E5E8E0] pt-10 pb-32 px-4 sm:px-10">
        <div className="w-full flex gap-3 flex-col sm:flex-row">
          <div className="mb-3 w-full">
            <label
              htmlFor="nombre"
              className="block mb-1 text-sm text-gray-600"
            >
              {t("fullname")}
            </label>
            <input
              type="text"
              id="nombre"
              className="dropShadow4 text-gray-900 border-none ring-0 text-sm rounded-full block w-full p-2.5 "
              required
            />
          </div>
          <div className="mb-3 w-full">
            <label
              htmlFor="telefono"
              className="block mb-1 text-sm text-gray-600"
            >
              {t("tellphone")}
            </label>
            <input
              type="number"
              id="teleofno"
              className="dropShadow4 text-gray-900 border-none ring-0 text-sm rounded-full block w-full p-2.5 "
              required
            />
          </div>
        </div>
        <div className="mb-3 w-full">
          <label htmlFor="email" className="block mb-1 text-sm text-gray-600">
            {t("email")}
          </label>
          <input
            type="email"
            id="email"
            className="dropShadow4 text-gray-900 border-none ring-0 text-sm rounded-full block w-full p-2.5 "
            required
          />
        </div>
        <div className="relative mb-3 w-full">
          <label
            htmlFor="countries"
            className="block mb-1 text-sm text-gray-600"
          >
            {t("porqueAprender.title")}
          </label>
          <select
            id="countries"
            className="dropShadow2 border-none ring-0 text-sm rounded-full  block w-full p-2.5 focus:ring-0 focus:border-gray-300 cursor-pointer"
          >
            <option selected>{t("porqueAprender.opt1")}</option>
            <option value="social">{t("porqueAprender.opt2")}</option>
            <option value="personal">{t("porqueAprender.opt3")}</option>
            <option value="familiar">{t("porqueAprender.opt4")}</option>
            <option value="laboral">{t("porqueAprender.opt5")}</option>
          </select>
          <span className="absolute right-2 bottom-1 p-2 rounded-full bg-[#9ee701]">
            <IoIosArrowDown className="text-gray-800" />
          </span>
        </div>
        <div className="relative mb-3 w-full">
          <label
            htmlFor="countries"
            className="block mb-1 text-sm text-gray-600"
          >
            {t("comoNosConociste.title")}
          </label>
          <select
            id="countries"
            className="dropShadow2 border-none ring-0 text-sm rounded-full  block w-full p-2.5 focus:ring-0 focus:border-gray-300 cursor-pointer"
          >
            <option selected>{t("comoNosConociste.opt1")}</option>
            <option value="un amigo">{t("comoNosConociste.opt2")}</option>
            <option value="facebook">{t("comoNosConociste.opt3")}</option>
            <option value="instagram">{t("comoNosConociste.opt4")}</option>
            <option value="google">{t("comoNosConociste.opt5")}</option>
          </select>
          <span className="absolute right-2 bottom-1 p-2 rounded-full bg-[#9ee701]">
            <IoIosArrowDown className="text-gray-800" />
          </span>
        </div>
        <div className="relative mb-3 w-full">
          <label
            htmlFor="countries"
            className="block mb-1 text-sm text-gray-600"
          >
            {t("hasEstudiadoAntes.title")}
          </label>
          <select
            id="countries"
            className="dropShadow2 border-none ring-0 text-sm rounded-full  block w-full p-2.5 focus:ring-0 focus:border-gray-300 cursor-pointer"
          >
            <option selected>{t("hasEstudiadoAntes.opt1")}</option>
            <option value="si">{t("hasEstudiadoAntes.opt2")}</option>
            <option value="no">{t("hasEstudiadoAntes.opt3")}</option>
          </select>
          <span className="absolute right-2 bottom-1 p-2 rounded-full bg-[#9ee701]">
            <IoIosArrowDown className="text-gray-800" />
          </span>
        </div>
        <div className="w-full flex justify-end mt-4">
          <button
            type="submit"
            className="pr-1 pl-4 py-1 bg-white/80 rounded-full flex gap-3 justify-between items-center hover:bg-white transition-all duration-300 w-fit"
          >
            {t("button")}
            <span className="p-2 rounded-full bg-[#9ee701]">
              <IoIosArrowDown className="text-gray-800" />
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}
