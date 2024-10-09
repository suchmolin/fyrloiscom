"use client"
import PersonalDataTest from "@/components/PersonalDataTest/page"
import QuestionsTest from "@/components/QuestionsTest/page"
import { testdata } from "@/data/testdata"
import { useState } from "react"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import { GoArrowRight } from "react-icons/go"
import { Progress } from "flowbite-react"

export default function Test() {
  const locale = useLocale()
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
    <div className="w-full flex flex-col lg:flex-row justify-center items-center pb-10 pt-32 min-h-screen">
      {result >= 0 && (
        <div className="flex flex-col gap-5 items-center">
          <div className="relative w-[200px] sm:w-[280px] aspect-square">
            <Image
              src="/img/testOk.png"
              objectFit="contain"
              layout="fill"
              alt="test"
            />
          </div>
          <p className="text-center text-3xl sm:text-5xl font-bold text-[#001a70]">
            {t("pb")} <br /> {result} / {testdata.length}
          </p>
          <a
            href={`/${locale}/sedes`}
            className="dropShadow3 pr-1 pl-4 py-1 bg-white/80 rounded-full flex gap-3 justify-between items-center hover:bg-white transition-all duration-300 w-fit"
          >
            Ver Cursos
            <span className="p-2 rounded-full bg-[#9ee701]">
              <GoArrowRight className="text-gray-800" />
            </span>
          </a>
        </div>
      )}
      {result < 0 && (
        <>
          <div className="w-11/12 sm:w-7/12 lg:w-4/12 flex flex-col px-10 items-center lg:items-start">
            <div className="relative w-[200px] aspect-square">
              <Image
                src="/img/test.png"
                objectFit="contain"
                layout="fill"
                alt="test"
              />
            </div>
            <h1 className="text-2xl font-bold text-[#001A70] px-1 text-center sm:text-start">
              {t("h1")}
            </h1>
            <p className="text-lg text-gray-500 px-1 text-center sm:text-start">
              {t("p")}
            </p>
          </div>
          <div className="w-11/12 sm:w-[630px] h-[550px] sm:h-[450px] relative rounded-2xl border dropShadow2 my-10 px-7 py-7 sm:p-7 overflow-hidden bg-gradient-to-b from-white to-[#E5E8E0]">
            <h4 className="text-lg text-[#001A70] text center mt-7">
              {t("h4")}
            </h4>
            {personal.email === "" && (
              <PersonalDataTest setPersonal={setPersonal} />
            )}
            {personal.email !== "" && (
              <>
                <div className="absolute top-7 w-10/12 sm:w-11/12">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-[#9ee701] h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${(position * 100) / 60}%` }}
                    ></div>
                  </div>
                </div>
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
        </>
      )}
    </div>
  )
}
