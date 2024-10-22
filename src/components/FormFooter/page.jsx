"use client"
import { useTranslations } from "next-intl"
import { GoArrowRight } from "react-icons/go"
import { useState } from "react"
import SendedMsgfoot from "../SendedMsgfoot/page"

export default function FormFooter() {
  const t = useTranslations("Footer.form")
  const [sendedfoot, setSendedfoot] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    document.getElementById("BtnEnviar2").disabled = true

    const resp = await fetch("/api/fetchOdoonl", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })

    document.getElementById("myForm2").reset()

    setSendedfoot(true)
    document.getElementById("BtnEnviar2").disabled = false

    setTimeout(() => {
      setSendedfoot(false)
    }, 5000)
  }

  return (
    <>
      <form id="myForm2" onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="nombre" className="block mb-1 text-sm text-gray-600">
            {t("input")}
          </label>
          <input
            type="text"
            name="name"
            id="nombre"
            className="dropShadow4 text-gray-900 border-none ring-0 text-sm rounded-full block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block mb-1 text-sm text-gray-600">
            {t("input3")}
          </label>
          <input
            name="email"
            type="email"
            id="email"
            className="dropShadow4 text-gray-900 border-none ring-0 text-sm rounded-full block w-full p-2.5 "
            required
          />
        </div>
        <input type="hidden" value="Fyr Lois" name="mailing_list" />
        <div className="w-full flex justify-end">
          <button
            id="BtnEnviar2"
            className="dropShadow2 pr-1 pl-4 py-1 bg-white/70 rounded-full flex gap-3 justify-between items-center hover:bg-white transition-all duration-300 w-fit"
          >
            {t("button")}
            <span className="p-2 rounded-full bg-[#9ee701]">
              <GoArrowRight className="text-gray-800" />
            </span>
          </button>
        </div>
      </form>
      {sendedfoot && <SendedMsgfoot />}
    </>
  )
}
