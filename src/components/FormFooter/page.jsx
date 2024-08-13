import { useTranslations } from "next-intl"
export default function FormFooter() {
  const t = useTranslations("Footer.form")

  return (
    <div>
      <div className="relative z-0 my-6">
        <input
          type="text"
          id="Nombre"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#000b7a]/50 appearance-none focus:outline-none focus:ring-0 focus:border-[#9ee701] peer"
          placeholder=" "
        />
        <label
          htmlFor="Nombre"
          className="absolute text-sm text-[#000b7a]/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#9ee701]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          {t("input")}
        </label>
      </div>
      <div className="relative z-0 my-4">
        <input
          type="number"
          id="Teléfono"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#000b7a]/50 appearance-none focus:outline-none focus:ring-0 focus:border-[#9ee701] peer"
          placeholder=" "
        />
        <label
          htmlFor="Teléfono"
          className="absolute text-sm text-[#000b7a]/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#9ee701]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          {t("input2")}
        </label>
      </div>
      <div className="relative z-0 my-4">
        <input
          type="mail"
          id="Correo Electrónico"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-
          0 border-b-2 border-[#000b7a]/50 appearance-none focus:outline-none focus:ring-0 focus:border-[#9ee701] peer"
          placeholder=" "
        />
        <label
          htmlFor="Correo Electrónico"
          className="absolute text-sm text-[#000b7a]/40 duration-300 transform -translate-y-
          6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#9ee701]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          {t("input3")}
        </label>
      </div>
      <textarea
        id={t("input4")}
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 rounded-lg  bg-[#000b7a]/5 focus:outline-none focus:ring-0 ring-0 focus:border-[#9ee701] transition-all duration-300 placeholder-[#000b7a]/40"
        placeholder="Escribenos tu mensaje ..."
      ></textarea>

      <button className="w-full py-2.5 text-sm text-white bg-[#000b7a] rounded-lg hover:bg-[#9ee701] transition-all duration-300 mt-4">
        {t("button")}
      </button>
    </div>
  )
}
