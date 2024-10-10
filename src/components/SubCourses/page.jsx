"use client"
import { useState, useEffect } from "react"
import SingleCourse from "../SingleCourse/page"
import { useSearchParams } from "next/navigation"
import { PiArrowRightThin } from "react-icons/pi"
import { PiArrowLeftThin } from "react-icons/pi"

export default function SubCourses({ data }) {
  const [left, setLeft] = useState(true)

  const searchParams = useSearchParams()
  const sede = searchParams.get("s")

  return (
    <>
      <div className="w-full lg:hidden flex flex-row flex-wrap gap-5 items-center justify-center">
        {data.map((item) => {
          return (
            <SingleCourse
              key={item.id}
              item={item}
              sede={sede}
              comprar={true}
              shrink={true}
            />
          )
        })}
      </div>
      <div className="w-full hidden lg:flex gap-5 items-center justify-center">
        <div className="h-full w-[50px] flex items-center justify-end">
          <button
            onClick={() => setLeft(!left)}
            className="text-[#001a70] bg-white p-1 rounded-full text-xl h-fit"
          >
            <PiArrowLeftThin />
          </button>
        </div>
        <div className="w-[1000px] xl:w-[1300px] relative flex overflow-hidden justify-center items-center h-[500px]">
          <div className="h-full w-[50px] absolute right-0 bg-gradient-to-r from-transparent to-[#001a70] z-10"></div>
          <div
            className={`relative top-0 flex gap-3 overflow-hidden transition-all duration-500 ${left ? "" : "-ml-[1000px] xl:-ml-[700px]"}`}
          >
            {data.map((item) => {
              return (
                <SingleCourse
                  key={item.id}
                  item={item}
                  sede={sede}
                  comprar={true}
                  shrink={true}
                />
              )
            })}
          </div>
        </div>
        <div className="h-full w-[50px] flex items-center">
          <button
            onClick={() => setLeft(!left)}
            className="text-[#001a70] bg-white p-1 rounded-full text-xl h-fit"
          >
            <PiArrowRightThin />
          </button>
        </div>
      </div>
    </>
  )
}
