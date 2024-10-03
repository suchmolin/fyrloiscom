"use client"
import PersonalDataTest from "@/components/PersonalDataTest/page"
import QuestionsTest from "@/components/QuestionsTest/page"
import { testdata } from "@/data/testdata"
import { useState } from "react"
import { useTranslations } from "next-intl"

export default function Test() {
  const t = useTranslations("Test")
  const initialData = {
    email: "",
    name: "",
    city: "",
    birthday: "",
    phone: "",
  }
  const [answer, setAnswer] = useState([])
  const [position, setPosition] = useState(0)
  const [personal, setPersonal] = useState(initialData)
  const [result, setResult] = useState(-1)

  return (
    <div className="w-full flex flex-col items-center pb-10 pt-44 min-h-screen">
      <h1 className="text-2xl font-bold text-[#001A70] text-center px-1">
        {t("h1")}
      </h1>
      <p className="text-lg text-gray-500 text-center px-1">{t("p")}</p>

      {result >= 0 && (
        <p className="text-gray-500">
          {t("pb")} {result} {t("pb2")} {testdata.length}
        </p>
      )}
      {result < 0 && (
        <div className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 h-[500px] sm:h-[400px] relative rounded-md border shadow-xl my-10 pl-2 py-7 sm:p-7 overflow-hidden">
          <h4 className="text-lg text-[#001A70] text center">{t("h4")}</h4>
          {personal.email === "" && (
            <PersonalDataTest setPersonal={setPersonal} />
          )}
          {personal.email !== "" && (
            <>
              <QuestionsTest
                position={position}
                setPosition={setPosition}
                answer={answer}
                setAnswer={setAnswer}
                setResult={setResult}
              />
              <p className="absolute w-full bottom-0  text-gray-500 text-center py-4 z-0">
                {t("pc")} {position + 1} {t("pc2")} {testdata.length}
              </p>
            </>
          )}
        </div>
      )}
    </div>
  )
}
