"use client"
import { Select, Textarea, TextInput } from "flowbite-react"
import { useState } from "react"
import SendedMsg from "../SendedMsg/page"

export default function FormContactoAE() {
  const [sended, setSended] = useState(false)

  const sendGS = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    data.modality = data.sede !== "online" ? "presencial" : "online"
    document.getElementById("BtnEnviar").disabled = true

    const resp = await fetch("/api/fetchOdoo", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })

    document.getElementById("myForm").reset()
    setSended(true)
    document.getElementById("BtnEnviar").disabled = false

    setTimeout(() => {
      setSended(false)
    }, 5000)
  }

  return (
    <div className="w-full flex items-center justify-center">
      <form
        id="myForm"
        onSubmit={(e) => sendGS(e)}
        className="formContactanosAE w-full sm:w-9/12 bg-[#cdea80] rounded-xl py-14 px-2 xs:px-7 font-[EastmanBold] flex flex-col gap-3 sm:gap-7 justify-center items-center shadow-xl"
      >
        <TextInput
          className="w-full"
          required
          id="fullname"
          name="name"
          type="text"
          sizing="lg"
          placeholder="Nombre y Apellido"
        />
        <div className="w-full flex gap-2">
          <TextInput
            className="w-full "
            required
            id="city"
            name="city"
            type="text"
            sizing="lg"
            placeholder="Ciudad"
          />
          <TextInput
            className="w-full "
            required
            id="phone"
            name="phone"
            type="number"
            sizing="lg"
            placeholder="Teléfono"
          />
        </div>
        <TextInput
          className="w-full"
          required
          id="email"
          name="email"
          type="email"
          sizing="lg"
          placeholder="Correo Electrónico"
        />
        <Select
          name="sede"
          className="w-full"
          sizing="lg"
          id="countries"
          required
        >
          <option value="">Seleccione la Sede</option>
          <option value="FYR LOIS ONLINE">Online</option>
          <option value="FYR LOIS CCCT">Caracas - CCCT</option>
          <option value="FYR LOIS UCAB">Caracas - UCAB</option>
          <option value="FYR LOIS PRADOS DEL ESTE">
            Caracas - Prados del Este
          </option>
          <option value="FYR LOIS PZO">Puerto Ordaz</option>
          <option value="FYR LOIS BQTO">Barquisimeto</option>
          <option value="FYR LOIS MATURIN">Maturín</option>
        </Select>
        <Textarea
          id="comment"
          name="description"
          placeholder="Mensaje"
          required
          rows={4}
        />
        <input
          type="hidden"
          value="Landing Regreso a Clases Fyr Lois"
          name="social_media"
        />
        <input type="hidden" value="Fyr Lois English Institute" name="from" />
        <button
          id="BtnEnviar"
          className="w-fit px-24 mt-3 bg-[#fbd874] text-lg py-2 rounded-xl hover:shadow-xl transition-all duration-500 disabled:opacity-50 disabled:cursor-wait"
        >
          Enviar
        </button>
      </form>
      {sended && <SendedMsg />}
    </div>
  )
}
