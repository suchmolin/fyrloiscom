import { useState } from "react"
import { useTranslations } from "next-intl"

export default function PersonalDataTest({ setPersonal }) {
  const t = useTranslations("Test.PersonalDataTest")
  const [submited, setSubmited] = useState(false)
  const inputClass =
    "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#001A70] peer"
  const labelClass =
    "absolute text-sm text-gray-500 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#001A70] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.targer)
    const data = {}
    formData.forEach((value, key) => {
      data[key] = value
    })
    setSubmited(true)

    setTimeout(() => {
      setPersonal(data)
    }, 1000)
  }

  return (
    <div
      id="personalBox"
      className={`h-full px-3 py-5 transition-all duration-700 ${submited ? "ml-[1500px]" : ""}`}
    >
      <form
        onSubmit={(e) => handleSubmit(e)}
        action=""
        className="relative h-full flex flex-col sm:flex-row gap-y-7 sm:gap-y-0 gap-x-10 flex-wrap"
      >
        <div className="relative z-0 w-[200px] sm:w-[300px]">
          <input
            required
            type="email"
            id="email"
            className={inputClass}
            placeholder=" "
          />
          <label htmlFor="email" className={labelClass}>
            {t("email")}
          </label>
        </div>
        <div className="relative z-0 w-[200px] sm:w-[300px]">
          <input
            required
            type="text"
            id="name"
            className={inputClass}
            placeholder=" "
          />
          <label htmlFor="name" className={labelClass}>
            {t("name")}
          </label>
        </div>
        <div className="relative z-0 w-[200px] sm:w-[300px]">
          <input
            required
            type="text"
            id="city"
            className={inputClass}
            placeholder=" "
          />
          <label htmlFor="city" className={labelClass}>
            {t("city")}
          </label>
        </div>
        <div className="relative z-0 w-[200px] sm:w-[300px]">
          <input
            required
            type="date"
            id="date"
            className={inputClass}
            placeholder=" "
          />
          <label htmlFor="date" className={labelClass}>
            {t("bithdate")}
          </label>
        </div>
        <div className="relative z-0 w-[200px] sm:w-[300px]">
          <input
            required
            type="number"
            id="city"
            className={inputClass}
            placeholder=" "
          />
          <label htmlFor="city" className={labelClass}>
            {t("cel")}
          </label>
        </div>
        <button
          className=" absolute right-5 bottom-3 py-2 px-4 rounded-xl bg-[#001A70] text-white hover:bg-[#90d400] hover:text-[#001A70] transition-all duration-300"
          type="submit"
        >
          {t("start")}
        </button>
      </form>
    </div>
  )
}
