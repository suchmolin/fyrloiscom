import { Dropdown } from "flowbite-react"
import { useTranslations } from "next-intl"
import { IoIosArrowDown } from "react-icons/io"

export default function BotonFranquicias({ data, seter }) {
  const t = useTranslations("BotonFranquicias")
  const boton = (
    <div className="px-5 w-full mt-2 flex justify-center md:justify-end">
      <div className="pr-1 pl-4 py-1 text-black bg-white rounded-full flex gap-3 justify-between items-center transition-all duration-300 w-fit">
        {t("boton")}
        <span className="p-2 rounded-full bg-[#9ee701]">
          <IoIosArrowDown className="text-gray-800" />
        </span>
      </div>
    </div>
  )

  return (
    <div className="py-1 px-3 rounded-lg bg-[#001a70] text-white w-fit">
      <Dropdown label={boton} arrowIcon={false} inline>
        {data.map((country, i) => (
          <button onClick={() => seter(country)} key={i} className="w-full">
            <Dropdown.Item className="flex gap-2 mr-4">
              {country.toUpperCase()}
            </Dropdown.Item>
          </button>
        ))}
      </Dropdown>
    </div>
  )
}
