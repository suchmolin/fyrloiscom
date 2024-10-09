import { testdata } from "@/data/testdata"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { GoArrowLeft, GoArrowRight } from "react-icons/go"

export default function QuestionsTest(props) {
  const t = useTranslations("Test.QuestionsTest")
  const { position, setPosition, answer, setAnswer, setResult } = props
  const [next, setNext] = useState(false)
  const [previo, setPrevio] = useState(false)
  const [isSelected, setIsSelected] = useState(false)
  const item = testdata[position]

  const handlePosition = (type) => {
    setIsSelected(false)
    const boton = document.getElementById(type)
    boton.disabled = true

    if (type === "next") {
      const selected = document.querySelector("input:checked")
      if (!selected) {
        setIsSelected(true)
      } else {
        setNext(true)

        updateAnswer(selected.value)
        selected.checked = false

        setTimeout(() => {
          setNext(false)
          setPosition((prev) => prev + 1)
        }, 500)
      }
    } else {
      setPrevio(true)
      setTimeout(() => {
        setPrevio(false)
        setPosition((prev) => prev - 1)
      }, 500)
    }

    boton.disabled = false
  }

  const updateAnswer = (selectedAnswer) => {
    const index = answer.findIndex((ans) => ans.id === item.id)

    if (index >= 0) {
      const array = [...answer]
      array[index] = { ...answer[index], resp: selectedAnswer }
      setAnswer(array)
    } else {
      const array = [...answer]

      array.push({ id: item.id, resp: selectedAnswer, ok: item.ok })
      setAnswer(array)
    }
  }

  const handleFinal = () => {
    setIsSelected(false)
    const selected = document.querySelector("input:checked")
    if (!selected) {
      setIsSelected(true)
      return
    } else {
      const array = [...answer]
      array.push({ id: item.id, resp: selected.value, ok: item.ok })

      const res = getResult(array)
      setResult(res)
    }
  }

  const getResult = (answer) => {
    let cont = 0
    answer.forEach((element) => {
      if (element.resp === element.ok) cont++
    })
    return cont
  }

  return (
    <div
      id="personalBox"
      className={`h-full pl-2 sm:pl-10 py-5 transition-all duration-700 ${next ? "ml-[1500px]" : ""} ${previo ? "-ml-[1500px]" : ""}`}
    >
      <p className="text-lg text-gray-500 mb-4">{`${item.id}) ${item.question}`}</p>

      {item.options.map((option, index) => (
        <div key={index} className="flex items-ceter py-2 px-2">
          <input
            id={`default-radio-${index}`}
            type="radio"
            value={option}
            name="default-radio"
            className="w-4 h-4 text-[#001A70] bg-gray-100 border-gray-300 focus:ring-[#001A70] focus:ring-2 hover:cursor-pointer"
          />
          <label
            htmlhtmlFor={`default-radio-${index}`}
            className="ms-2 text-sm font-medium text-gray-900  hover:cursor-pointer"
          >
            {option}
          </label>
        </div>
      ))}
      <div className="">
        {position !== 0 && (
          <button
            onClick={() => handlePosition("prev")}
            id="prev"
            disabled={previo}
            className="absolute left-5 bottom-12 sm:bottom-7 pr-1 pl-4 py-1 bg-white/80 rounded-full flex gap-3 justify-between items-center hover:bg-white transition-all duration-300 disabled:cursor-wait w-fit z-20"
          >
            {t("prev")}
            <span className="p-2 rounded-full bg-[#001a70]">
              <GoArrowLeft className="text-white" />
            </span>
          </button>
        )}
        {isSelected && <p className="text-red-500 text-center">{t("error")}</p>}
        {position !== testdata.length - 1 && (
          <>
            <button
              onClick={() => handlePosition("next")}
              id="next"
              disabled={next}
              className="absolute right-5 bottom-12 sm:bottom-7 pr-1 pl-4 py-1 bg-white/80 rounded-full flex gap-3 justify-between items-center hover:bg-white transition-all duration-300 disabled:cursor-wait w-fit z-20"
            >
              {t("next")}
              <span className="p-2 rounded-full bg-[#9ee701]">
                <GoArrowRight className="text-gray-800" />
              </span>
            </button>
          </>
        )}
        {position === testdata.length - 1 && (
          <button
            onClick={handleFinal}
            id="finalizar"
            disabled={next}
            className="absolute right-5 bottom-12 sm:bottom-7 pr-1 pl-4 py-1 bg-white/80 rounded-full flex gap-3 justify-between items-center hover:bg-white transition-all duration-300 disabled:cursor-wait w-fit z-20"
          >
            {t("end")}

            <span className="p-2 rounded-full bg-[#9ee701]">
              <GoArrowRight className="text-gray-800" />
            </span>
          </button>
        )}
      </div>
    </div>
  )
}
