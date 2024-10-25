"use client"
import { Spinner } from "flowbite-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useEffect, useState } from "react"
export default function FAQSection() {
  const t = useTranslations("FAQSection")

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await import(`/src/${t("data")}/faq`)
        setData(data)
      } catch (error) {
        console.log("Error importing data", error)
      }
    }
    fetchData()
  }, [t])

  return (
    <div className="w-full flex justify-center pb-10">
      <div className="relative w-full xl:w-10/12 bg-white pt-10 pb-8 sm:mt-8 sm:px-10 sm:mb-10">
        <div className="w-full lg:w-fit mx-auto px-5 sm:px-0">
          <div className="flex flex-col items-center mb-3 lg:mb-10">
            <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl text-[#001A70]">
              {t("h2")}
            </h2>
            <p className="mt-3 text-lg text-neutral-500 md:text-2xl">
              {t("p")}
            </p>
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:gap-20 justify-center items-center lg:items-start">
            <div className="relative w-[290px] xs:w-[350px] sm:w-[400px] 2xl:w-[500px] aspect-square mt-10">
              <Image
                src="/img/faq.png"
                layout="fill"
                objectFit="contain"
                alt="faq"
              />
            </div>
            <div className="mt-5 lg:mt-16 w-full sm:w-11/12 lg:w-[500px] xl:w-[600px] flex flex-col gap-3">
              {data.length !== 0 ? (
                data?.map((item) => (
                  <div key={item.id} className="flex flex-col justify-center">
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between font-medium py-2 rounded-full dropShadow pr-2 pl-5">
                        <span className="text-sm sm:text-xl"> {item.ask}</span>
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
                        {item.ans}
                      </p>
                    </details>
                  </div>
                ))
              ) : (
                <div className="w-full flex justify-center">
                  <Spinner aria-label="Extra large spinner example" size="xl" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
