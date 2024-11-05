import addCart from "@/addcart"
import { OpenModalContext } from "@/context/openModal"
import { useLocale } from "next-intl"
import Image from "next/image"
import { GoArrowRight } from "react-icons/go"
import { useContext } from "react"
import { handleCheckout } from "@/checkoutCart"

export default function SingleCourse({ item, comprar, sede, shrink, sombra }) {
  const locale = useLocale()
  const { setIsOpen, setCartInfo, setCantCart } = useContext(OpenModalContext)
  return (
    <div
      key={item.id}
      className={`${sombra ? "dropShadow3" : ""} relative w-[280px] xs:w-[300px] rounded-xl bg-white py-3 px-3 z-0 ${shrink ? "flex-shrink-0" : ""}`}
    >
      <div className="flex justify-between">
        <h4 className="text-[#001A70] font-bold">{item.title}</h4>
      </div>
      <div className="w-full flex justify-end items-end">
        {item.modalityPayment === "nivel" && (
          <p className="text-gray-400 mb-1 mr-3 text-lg">Por nivel:</p>
        )}
        {item.modalityPayment === "hora" && (
          <p className="text-gray-400 mb-1 mr-3 text-lg">Por hora:</p>
        )}
        {item.price ? (
          <div className="w-fit py-2 px-5 mt-2 bg-[#001A70] rounded-t-xl flex justify-center items-center text-white text-sm">
            <p>${item.price}</p>
          </div>
        ) : (
          <div className="h-[44px]"></div>
        )}
      </div>
      <div className="relative w-full aspect-video rounded-s-[20px] rounded-b-xl overflow-hidden">
        <Image src={`/img/${item.img}`} fill objectFit="cover" alt="curso" />
      </div>
      <div
        className={`w-full flex flex-col justify-between py-4 px-4 ${comprar ? "min-h-[250px]" : "min-h-[270px] xl:min-h-[200px]"}`}
      >
        <div className="flex flex-col gap-5 py-3">
          <p className="text-gray-500 text-sm">
            <b>{item.etapa}</b>

            {item.description2}
          </p>
        </div>

        {comprar && (
          <div className="flex justify-between ">
            <a
              href={`/${locale}/courses/${item.id}${sede ? `?s=${sede}&langCourse=${item.lang}` : `?langCourse=${item.lang}`}`}
              className="dropShadow3 pr-1 pl-4 py-1 bg-white/80 rounded-full flex gap-3 justify-between items-center hover:bg-white transition-all duration-300 w-fit text-black"
            >
              Ver más
              <span className="p-2 rounded-full bg-[#9ee701]">
                <GoArrowRight className="text-gray-800" />
              </span>
            </a>

            {item.compra && (
              <button
                onClick={() =>
                  addCart(item.id, setIsOpen, setCartInfo, setCantCart)
                }
                className="dropShadow3 px-2 bg-[#9ee701] rounded-full overflow-hidden text-2xl text-black flex items-center justify-center"
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
            )}
          </div>
        )}
      </div>
    </div>
  )
}
