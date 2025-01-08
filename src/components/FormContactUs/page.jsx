"use client"
import { FloatingLabel, Label, Select } from "flowbite-react"
import Image from "next/image"
import { useState } from "react"
import { useTranslations } from "next-intl"
import { IoIosArrowDown } from "react-icons/io"
import SendedMsg from "../SendedMsg/page"

export default function FormContactUs() {
  const t = useTranslations("contactUs.FormContactUs")
  const [sended, setSended] = useState(false)
  const [datags, setDatags] = useState({ nombre: "", numero: "", email: "" })
  const urlGS =
    "https://script.google.com/macros/s/AKfycbzug2ZkhEyG9NtgfhvuRp_QOai1poNPCA3n3A1ievIEmTBUvwZO9CNJlOiDBXksLHYo/exec"

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    data.modality = data.sede !== "online" ? "presencial" : "online"
    data.description = `como nos conociste : ${data.comoNosConociste}. has estudiado antes: ${data.hasEstudiadoAntes}. porque aprender: ${data.porqueAprender}`

    document.getElementById("BtnEnviar").disabled = true

    setSended(true)
    if (data.sede === "kissimmee") {
      try {
        await fetch(urlGS, { method: "POST", body: formData })
      } catch (error) {
        console.log(error)
      }
    } else {
      const resp = await fetch("/api/fetchOdoo", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
    }

    document.getElementById("myForm").reset()

    document.getElementById("BtnEnviar").disabled = false

    setTimeout(() => {
      setSended(false)
    }, 5000)
  }

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-center sm:px-16 xl:px-32">
      <div className="w-[290px] xs:w-[350px] sm:w-[600px] lg:w-[400px] xxl:w-[600px] flex flex-col items-center lg:items-start mt-32 lg:mt-0 text-center lg:text-start">
        <div className="relative w-[250px] aspect-square mb-7">
          <Image
            src="/img/contactUsnueva.png"
            objectFit="contain"
            layout="fill"
            alt="message"
          />
        </div>
        <h2 className="fontTitulo font-bold text-[#001a70] text-center lg:text-start">
          {t("h2")}
        </h2>
        <p className="fontSubtitulo">{t("p")}</p>
      </div>
      <form
        id="myForm"
        onSubmit={(e) => handleSubmit(e)}
        className="dropShadow2 w-[290px] xs:w-[350px] sm:w-[500px] md:w-[700px] rounded-2xl shadow-2xl mt-10 lg:mt-40 mb-20 flex flex-col justify-center items-center bg-gradient-to-b from-white to-[#E5E8E0] pt-10 pb-32 px-4 sm:px-10"
      >
        <div className="w-full flex gap-3 flex-col sm:flex-row">
          <div className="mb-3 w-full">
            <label
              htmlFor="nombre"
              className="block mb-1 text-sm text-gray-600"
            >
              {t("fullname")}
            </label>
            <input
              onChange={(e) => setDatags({ ...datags, nombre: e.target.value })}
              name="name"
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
              onChange={(e) => setDatags({ ...datags, numero: e.target.value })}
              name="phone"
              type="number"
              id="telefono"
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
            onChange={(e) => setDatags({ ...datags, email: e.target.value })}
            name="email"
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
            {t("sedesList.title")}
          </label>
          <select
            name="sede"
            className="dropShadow2 border-none ring-0 text-sm rounded-full  block w-full p-2.5 focus:ring-0 focus:border-gray-300 cursor-pointer"
          >
            <option>{t("sedesList.opt1")}</option>
            <option value="FYR LOIS ONLINE">{t("sedesList.opt2")}</option>
            <option value="kissimmee">{t("sedesList.opt3")}</option>
            <option value="FYR LOIS CCCT">{t("sedesList.opt4")}</option>
            <option value="FYR LOIS UCAB">{t("sedesList.opt5")}</option>
            <option value="FYR LOIS PRADOS DEL ESTE">
              {t("sedesList.opt6")}
            </option>
            <option value="FYR LOIS PZO">{t("sedesList.opt7")}</option>
            <option value="FYR LOIS MATURIN">{t("sedesList.opt8")}</option>
            <option value="FYR LOIS BQTO">{t("sedesList.opt9")}</option>
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
            {t("porqueAprender.title")}
          </label>
          <select
            name="porqueAprender"
            id="porqueAprender"
            className="dropShadow2 border-none ring-0 text-sm rounded-full  block w-full p-2.5 focus:ring-0 focus:border-gray-300 cursor-pointer"
          >
            <option>{t("porqueAprender.opt1")}</option>
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
            name="comoNosConociste"
            id="comoNosConociste"
            className="dropShadow2 border-none ring-0 text-sm rounded-full  block w-full p-2.5 focus:ring-0 focus:border-gray-300 cursor-pointer"
          >
            <option>{t("comoNosConociste.opt1")}</option>
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
            name="hasEstudiadoAntes"
            id="hasEstudiadoAntes"
            className="dropShadow2 border-none ring-0 text-sm rounded-full  block w-full p-2.5 focus:ring-0 focus:border-gray-300 cursor-pointer"
          >
            <option>{t("hasEstudiadoAntes.opt1")}</option>
            <option value="si">{t("hasEstudiadoAntes.opt2")}</option>
            <option value="no">{t("hasEstudiadoAntes.opt3")}</option>
          </select>
          <span className="absolute right-2 bottom-1 p-2 rounded-full bg-[#9ee701]">
            <IoIosArrowDown className="text-gray-800" />
          </span>
        </div>
        <input type="hidden" value="Página Web Fyr Lois" name="social_media" />{" "}
        {/*map odoo*/}
        <input type="hidden" value="Fyr Lois English Institute" name="from" />
        <input type="hidden" value={new Date().toLocaleString()} name="Fecha" />
        <input type="hidden" value={datags.nombre} name="Nombre" />
        <input type="hidden" value={datags.numero} name="Numero" />
        <input type="hidden" value={datags.email} name="EMAIL" />
        <input type="hidden" value="Pagina Web" name="Origen" />
        <input type="hidden" value="Kissimmee" name="Ubicacion" />
        <div className="w-full flex justify-end mt-4">
          <button
            id="BtnEnviar"
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
      {sended && <SendedMsg />}
    </div>
  )
}
