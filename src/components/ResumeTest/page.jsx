"use client"
import { FaTimes } from "react-icons/fa"
import { FaCheck } from "react-icons/fa"
import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"

export default function ResumeTest({ answer, result }) {
  const t = useTranslations("Test.ResumeTest")
  const [selected, setSelected] = useState({})

  useEffect(() => {
    console.log(selected)
  }, [selected])
  return (
    <div className="w-full flex gap-5 flex-col items-center">
      {result < 60 && (
        <p className="text-2xl text-gray-500 text-center">
          {t("p")} <br /> {t("pb")}
        </p>
      )}
      <div className="w-10/12 flex gap-3 flex-wrap justify-center">
        {answer.map((item) => {
          const comp = item.ok === item.resp
          return (
            <button
              onClick={() => setSelected(item)}
              key={item.id}
              className={`w-[40px] rounded-lg flex flex-col items-center justify-center overflow-hidden border-gray-200 border ${selected.id === item.id ? "scale-105" : ""} hover:scale-105 transition-all duration-300`}
            >
              <div className="w-full flex justify-center items-center py-1">
                {item.id}
              </div>
              <div
                className={`w-full flex items-center justify-center ${comp ? "bg-[#ADC823]" : "bg-red-600"}  text-white py-1`}
              >
                {comp ? <FaCheck /> : <FaTimes />}
              </div>
            </button>
          )
        })}
      </div>
      {selected.id && (
        <div className="w-full min-h-[300px] flex justify-center">
          <div className="w-[370px] h-fit flex flex-col rounded-2xl border dropShadow2 px-7 py-7 sm:p-7 overflow-hidden bg-gradient-to-b from-white to-[#E5E8E0]">
            <p className="mb-5">
              {selected.id}. {selected.pregunta}
            </p>
            <p
              className={`w-fit px-4 py-2 rounded-lg text-white ${selected.ok === selected.resp ? "bg-[#ADC823]" : "bg-red-600"} flex gap-3 items-center ml-5`}
            >
              {selected.ok === selected.resp ? <FaCheck /> : <FaTimes />}
              {selected.resp}
            </p>
            {selected.ok !== selected.resp && (
              <>
                <p className="my-5">{t("correct")}</p>
                <p
                  className={`w-fit px-4 py-2 rounded-lg text-white bg-[#ADC823] flex gap-3 items-center ml-5`}
                >
                  <FaCheck />
                  {selected.ok}
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
