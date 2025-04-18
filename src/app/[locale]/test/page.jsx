"use client"
import PersonalDataTest from "@/components/PersonalDataTest/page"
import QuestionsTest from "@/components/QuestionsTest/page"
import { testdata } from "@/data/testdata"
import { useState, useEffect, Suspense } from "react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import ResultTestSection from "@/components/ResultTestSection/page"
import { useSearchParams } from "next/navigation"

function TestComp() {
  const searchParams = useSearchParams()
  const campFrom = searchParams.get("from")
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

  useEffect(() => {
    const fetchData = async () => {
      if (result >= 0) {
        const data = { personal, answer, result }
        const resp = await fetch("/api/sendEmailTest", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        })

        const forOdoo = {
          name: personal.name,
          email: personal.email,
          phone: personal.cel,
          sede: "FYR LOIS ONLINE",
          from: "Fyr Lois English Institute",
          modality: "Online",
          social_media: "Test",
          description: `resultado del test: ${result}/${answer.length}`,
          camp: campFrom || "page",
        }
        const resp2 = await fetch("/api/fetchOdoo", {
          method: "POST",
          body: JSON.stringify(forOdoo),
          headers: {
            "Content-Type": "application/json",
          },
        })
      }
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result])

  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center pb-10 pt-32 min-h-screen">
      {result >= 0 && (
        <ResultTestSection
          result={result}
          testdata={testdata}
          personal={personal}
          answer={answer}
        />
      )}
      {result < 0 && (
        <>
          <div className="w-11/12 sm:w-7/12 lg:w-4/12 flex flex-col px-10 items-center lg:items-start">
            <div className="relative w-[240px] aspect-square mb-7">
              <Image
                src="/img/test.png"
                objectFit="contain"
                layout="fill"
                alt="test"
              />
            </div>
            <h1 className="fontTitulo font-bold text-[#001A70] px-1 text-center sm:text-start mb-3">
              {t("h1")}
            </h1>
            <p className="fontSubtitulo text-gray-500 px-1 text-center sm:text-start">
              {t("p")}
            </p>
          </div>
          <div className="w-11/12 sm:w-[630px] h-[580px] sm:h-[450px] relative rounded-2xl border dropShadow2 my-10 px-7 py-7 sm:p-7 overflow-hidden bg-gradient-to-b from-white to-[#E5E8E0]">
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
                  personal={personal}
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

export default function Test() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TestComp />
    </Suspense>
  )
}
