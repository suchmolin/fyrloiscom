"use client"
import { Spinner } from "flowbite-react"
import { useTranslations } from "next-intl"
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
    <div className="w-full flex justify-center">
      <div className="relative w-12/12 sm:w-10/12 bg-white px-6 pt-10 pb-8 mt-8 sm:shadow-xl sm:ring-1 ring-gray-900/5  sm:rounded-lg sm:px-10 mb-10">
        <div className="mx-auto px-5">
          <div className="flex flex-col items-center">
            <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl text-[#000b7a]">
              {t("h2")}
            </h2>
            <p className="mt-3 text-lg text-neutral-500 md:text-xl">{t("p")}</p>
          </div>
          <div className=" mt-8 grid divide-y divide-neutral-200">
            {data.length !== 0 ? (
              data?.map((item) => (
                <div key={item.id} className="py-5">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                      <span className="text-[#000b7a] font-bold">
                        {" "}
                        {item.ask}
                      </span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
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
  )
}
