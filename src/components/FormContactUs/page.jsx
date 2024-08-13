"use client"
import { FloatingLabel, Label, Select } from "flowbite-react"
import Image from "next/image"
import { useState } from "react"
import { useTranslations } from "next-intl"

export default function FormContactUs() {
  const [sended, setSended] = useState(false)
  const t = useTranslations("contactUs.FormContactUs")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSended(false)
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    const responseJson = await response.json()
    if (responseJson.message === "Email sent") {
      setSended(true)
    } else {
      console.log("Error al enviar el correo")
    }
    e.target.reset()
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="w-11/12 md:w-10/12 rounded-xl shadow-2xl mt-40 mb-20 flex flex-col justify-center items-center"
    >
      <div className="w-10/12  flex flex-col md:flex-row gap-5 justify-center py-10 border-gray-500 border-b-[1px]">
        <div className="w-8/12">
          <h2 className="text-[#000b7a] text-5xl py-4">{t("h2")}</h2>
          <p className="text-gray-500">{t("p")}</p>
        </div>
        <div className="w-[90px] h-[90px] p-4 rounded-full shadow-2xl">
          <Image
            src="/img/sobre.svg"
            alt="Contact Us"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="w-11/12 md:w-10/12  py-10 flex flex-wrap gap-5 justify-center">
        <div className="w-10/12 md:w-5/12">
          <FloatingLabel
            variant="filled"
            label={t("fullname")}
            name="fullname"
            required
          />
        </div>
        <div className="w-10/12 md:w-5/12">
          <FloatingLabel
            variant="filled"
            label={t("email")}
            name="email"
            required
          />
        </div>
        <div className="w-10/12">
          <FloatingLabel
            variant="filled"
            label={t("tellphone")}
            name="tellphone"
            required
          />
        </div>
        <div className="w-10/12">
          <div className="mb-2 block">
            <Label
              htmlFor="porqueAprender"
              value={t("porqueAprender.title")}
              className="text-xl text-[#000b7a]"
            />
          </div>
          <Select id="porqueAprender" required name="porqueAprender">
            <option>{t("porqueAprender.opt1")}</option>
            <option>{t("porqueAprender.opt2")}</option>
            <option>{t("porqueAprender.opt3")}</option>
            <option>{t("porqueAprender.opt4")}</option>
            <option>{t("porqueAprender.opt5")}</option>
          </Select>
        </div>
        <div className="w-10/12">
          <div className="mb-2 block">
            <Label
              htmlFor="comoNosConociste"
              value={t("comoNosConociste.title")}
              className="text-xl text-[#000b7a]"
            />
          </div>
          <Select id="comoNosConociste" required name="comoNosConociste">
            <option>{t("comoNosConociste.opt1")}</option>
            <option>{t("comoNosConociste.opt2")}</option>
            <option>{t("comoNosConociste.opt3")}</option>
            <option>{t("comoNosConociste.opt4")}</option>
            <option>{t("comoNosConociste.opt5")}</option>
            <option>{t("comoNosConociste.opt6")} ads</option>
          </Select>
        </div>
        <div className="w-10/12">
          <div className="mb-2 block">
            <Label
              htmlFor="hasEstudiadoAntes"
              value={t("hasEstudiadoAntes.title")}
              className="text-xl text-[#000b7a]"
            />
          </div>
          <Select id="hasEstudiadoAntes" required name="hasEstudiadoAntes">
            <option>{t("hasEstudiadoAntes.opt1")}</option>
            <option>{t("hasEstudiadoAntes.opt2")}</option>
            <option>{t("hasEstudiadoAntes.opt3")}</option>
          </Select>
        </div>
        <div className="w-10/12 h-[70px] flex items-center">
          <button
            type="submit"
            aria-label="TConoce nuestros cursos"
            className=" py-4 px-7 bg-[#ffa101] hover:bg-[#000b7a] hover:mb-1 rounded-md text-bold text-white transition-all duration-500 font-bold text-xs md:text-base"
          >
            {t("button")}
          </button>
        </div>
        {sended && <p className="text-md text-[#000b7a] py-2">{t("sended")}</p>}
      </div>
    </form>
  )
}
