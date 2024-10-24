import { useState } from "react"
import { useTranslations } from "next-intl"
import { GoArrowRight } from "react-icons/go"

export default function PersonalDataTest({ setPersonal }) {
  const t = useTranslations("Test.PersonalDataTest")
  const [submited, setSubmited] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
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
        className="relative h-full flex flex-col sm:flex-row gap-y-0 gap-x-10 flex-wrap"
      >
        <div className="w-full flex gap-3 flex-col sm:flex-row">
          <div className="mb-3 w-full">
            <label htmlFor="email" className="block mb-1 text-sm text-gray-600">
              {t("email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="dropShadow4 text-gray-900 border-none ring-0 text-sm rounded-full block w-full p-2.5 "
              required
            />
          </div>
          <div className="mb-3 w-full">
            <label htmlFor="name" className="block mb-1 text-sm text-gray-600">
              {t("name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="dropShadow4 text-gray-900 border-none ring-0 text-sm rounded-full block w-full p-2.5 "
              required
            />
          </div>
        </div>
        <div className="w-full flex gap-3 flex-col sm:flex-row">
          <div className="mb-3 w-full">
            <label htmlFor="email" className="block mb-1 text-sm text-gray-600">
              {t("city")}
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="dropShadow4 text-gray-900 border-none ring-0 text-sm rounded-full block w-full p-2.5 "
              required
            />
          </div>
          <div className="mb-3 w-full">
            <label htmlFor="name" className="block mb-1 text-sm text-gray-600">
              {t("birthday")}
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="dropShadow4 text-gray-900 border-none ring-0 text-sm rounded-full block w-full p-2.5 "
              required
            />
          </div>
        </div>
        <div className="w-full flex gap-3 flex-col sm:flex-row">
          <div className="mb-3 sm:w-6/12">
            <label htmlFor="email" className="block mb-1 text-sm text-gray-600">
              {t("cel")}
            </label>
            <input
              type="number"
              id="cel"
              name="cel"
              className="dropShadow4 text-gray-900 border-none ring-0 text-sm rounded-full block w-full p-2.5 "
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="absolute right-1 sm:right-5 bottom-0 sm:bottom-5 pr-1 pl-4 py-1 bg-white/80 rounded-full flex gap-3 justify-between items-center hover:bg-white transition-all duration-300 w-fit"
        >
          {t("start")}

          <span className="p-2 rounded-full bg-[#9ee701]">
            <GoArrowRight className="text-gray-800" />
          </span>
        </button>
      </form>
    </div>
  )
}
