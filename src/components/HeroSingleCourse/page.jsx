import Image from "next/image"

import { Spinner } from "flowbite-react"
import { GoArrowRight } from "react-icons/go"
import { useContext } from "react"
import { OpenModalContext } from "@/context/openModal"
import addCart from "@/addcart"
import { handleCheckout } from "@/checkoutCart"
import { useLocale, useTranslations } from "next-intl"

export default function HeroSingleCourse({ courseData }) {
  const t = useTranslations("HeroSingleCourse")
  const locale = useLocale()
  const { setIsOpen, setCartInfo, setCantCart } = useContext(OpenModalContext)
  return courseData ? (
    <div className="w-full pt-32 pb-20 flex justify-center">
      <div className="w-11/12 flex flex-col-reverse md:flex-row gap-5 md:gap-20 justify-center items-center">
        <div className="sm:w-5/12 lg:w-4/12 flex flex-col text-center md:text-start items-center md:items-start justify-center">
          <h1 className="text-4xl font-bold text-[#001A70] mb-2">
            {courseData.title}
          </h1>
          <div className="flex flex-col md:flex-row gap-2 text-[#020203] font-bold items-center mt-2 justify-center">
            {courseData.etapa && (
              <div className="flex gap-4 items-center">
                <div className="relative w-[30px] aspect-square">
                  <Image
                    src="/img/singleCourse.png"
                    layout="fill"
                    objectFit="contain"
                    alt="image"
                  />
                </div>
                <p className="w-fit text-[#001a70] text-center md:text-start">
                  {courseData.etapa}
                </p>
              </div>
            )}

            {courseData.price && !courseData.promo && (
              <div className="flex gap-4 items-center">
                <div className="relative w-[30px] aspect-square">
                  <Image
                    src="/img/singleCourse2.png"
                    layout="fill"
                    objectFit="contain"
                    alt="image"
                  />
                </div>
                <p className="w-fit text-[#001a70] text-center md:text-start">{`Por ${courseData.modalityPayment} $${courseData.price}.00`}</p>
              </div>
            )}
          </div>
          <p className="text-lg text-[#001A70] mb-4 pr-3">
            {courseData.description2}
          </p>

          {courseData.compra ? (
            <div className="flex gap-4">
              <button
                onClick={(e) => {
                  e.target.disabled = true
                  handleCheckout([
                    {
                      id: courseData.id,
                      cantidad: 1,
                      precio: courseData.price,
                    },
                  ])
                }}
                className="dropShadow3 pr-1 pl-4 py-1 bg-white/80 rounded-full flex gap-3 justify-between items-center hover:bg-white transition-all duration-300 w-fit text-black disabled:opacity-50 disabled:cursor-wait"
              >
                {t("Comprar")}
                <span className="p-2 rounded-full bg-[#9ee701]">
                  <GoArrowRight className="text-gray-800" />
                </span>
              </button>
              <button
                onClick={() =>
                  addCart(courseData.id, setIsOpen, setCartInfo, setCantCart)
                }
                className="dropShadow3 p-2 bg-[#9ee701] rounded-full overflow-hidden text-2xl text-black"
              >
                <div className="w-[25px] aspect-square relative -ml-[1px] mt-[1px]">
                  <Image
                    src="/img/cartplus.png"
                    layout="fill"
                    objectFit="contain"
                    alt="arrow"
                  />
                </div>
              </button>
            </div>
          ) : (
            <a
              href={`/${locale}/contactUs`}
              className="dropShadow3 pr-1 pl-4 py-1 bg-white/80 rounded-full flex gap-3 justify-between items-center hover:bg-white transition-all duration-300 w-fit text-black disabled:opacity-50 disabled:cursor-wait"
            >
              {t("Contacto")}
              <span className="p-2 rounded-full bg-[#9ee701]">
                <GoArrowRight className="text-gray-800" />
              </span>
            </a>
          )}
        </div>
        <div className="relative w-[200px] md:w-[350px] lg:w-[500px] aspect-square">
          <Image
            src={`/img/${courseData.imgAlternative}`}
            layout="fill"
            objectFit="contain"
            alt={courseData.title}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full h-[600px] flex justify-center items-center">
      <Spinner aria-label="Extra large spinner example" size="xl" />
    </div>
  )
}
