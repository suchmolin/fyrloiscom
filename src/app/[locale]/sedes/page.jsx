"use client"
import SedesList from "@/components/SedesList/page"
import { useTranslations } from "next-intl"
import { data } from "@/data/sedes"
import { useSearchParams } from "next/navigation"
import SedePrincipal from "@/components/SedePrincipal/page"
import { FaAnglesDown } from "react-icons/fa6"
import BotonFranquicias from "@/components/BotonFranquicias/page"
import { useState } from "react"

export default function Sedes() {
  const searchParams = useSearchParams()
  const lang = searchParams.get("lang")
  const count = searchParams.get("count")
  const [countrySelected, setCountrySelected] = useState(count || "")
  const sedes = lang
    ? data.filter((sede) => sede.language.includes(lang))
    : data
  const sedesFiltered = data.filter((sede) => sede.country === countrySelected)

  const t = useTranslations("sedes")

  const array = sedes.map((sede) => {
    if (sede.sector !== "USA") return sede.sector
  })
  let sedesArray = [...new Set(array)]
  sedesArray = sedesArray.filter((sector) => sector !== undefined)

  let countries = sedes.map((sede) => {
    if (sede.country !== "USA") return sede.country
  })
  countries = [...new Set(countries)]
  countries = countries.filter((country) => country !== undefined)

  return (
    <div className="w-full pt-40 flex flex-col items-center justify-center">
      <div className="w-full mt-20">
        <SedePrincipal boton="Visitar" href="/sedes/kissimmee" />
      </div>
      <div className="w-full h-[50px] flex justify-center text-3xl">
        <a className="h-full" href="#franquicias">
          <FaAnglesDown id="mtAnimation" />
        </a>
      </div>
      <div className="w-full h-[90px] md:h-[300px]  xxl:h-[370px] xxxl:h-[370px] bg-[url('/img/curvaAzul.png')] bg-cover bg-no-repeat bg-center -mt-1"></div>
      <div
        id="franquicias"
        className="w-full md:-mt-52 flex flex-col items-center bg-[#001a70] -mt-1"
      >
        <h2 className="text-white text-6xl text-center mb-7">Franquicias</h2>
        <div className="w-full flex justify-center mb-10">
          <BotonFranquicias data={countries} seter={setCountrySelected} />
        </div>
        {countrySelected !== "" && (
          <h3 className="text-white text-5xl text-center mb-7">
            {countrySelected.toUpperCase()}
          </h3>
        )}

        {/*****SEDES FULL****** */}
        <div className="w-full hidden sm:block bg-[#001a70]">
          <SedesList sedes={sedesFiltered} />
        </div>
        {/*****SEDES MOBILE****** */}
        {countrySelected === "Venezuela" && (
          <div className="w-11/12 block sm:hidden pb-20">
            {sedesArray.map((item, i) => (
              <div key={i} className="flex flex-col justify-center">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium py-2 rounded-full dropShadow pr-2 pl-5 bg-white">
                    <span className="text-sm sm:text-xl"> {item}</span>
                    <span className="transition group-open:rotate-180 bg-[#9ee701] rounded-full p-1 sm:p-3 group-open:bg-[#001A70] group-open:text-white">
                      <svg
                        fill="none"
                        height="27"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="27"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 px-10 transition-all duration-300">
                    <SedesList
                      sedes={sedes.filter((sede) => sede.sector === item)}
                    />
                  </p>
                </details>
              </div>
            ))}
          </div>
        )}

        {countrySelected === "usa" && (
          <div className="block sm:hidden">
            <SedesList sedes={sedes.filter((sede) => sede.country === "usa")} />
          </div>
        )}
      </div>
    </div>
  )
}
