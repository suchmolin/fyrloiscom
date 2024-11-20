"use client"
import Image from "next/legacy/image"
import { IoArrowForwardCircleOutline } from "react-icons/io5"
import { FaSquare } from "react-icons/fa"

export default function CardDescEtapaAE({
  icon,
  color,
  titulo,
  img,
  items,
  id,
  alt
}) {
  return (
    <div id={id} className="w-full flex">
      <div className="hidden lg:flex w-2/12 justify-center items-center">
        <Image src={icon} alt="Bombillo" width={80} height={80} unoptimized />
      </div>
      <div className="w-full lg:w-10/12 xl:w-9/12 bg-[#000b7a] text-white rounded-xl flex justify-between">
        <div className="w-full sm:w-8/12 flex flex-col pl-5 sm:pl-10 md:pl-20 pr-5 sm:pr-0 py-7">
          <h3
            className={`text-xl md:text-2xl text-[${color}] sm:pl-10 font-[EastmanBold]`}
          >
            {titulo}
          </h3>
          <div>
            {items.map((item, i) => (
              <div key={i} className="flex gap-4 items-center mt-1 md:mt-4">
                <div
                  className={`text-xs md:text-sm text-[${color}] text-center `}
                >
                  <FaSquare />
                </div>
                <p
                  key={`parrafo${i}`}
                  className="text-base md:text-xl flex items-center justify-start"
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center pt-5 ">
            <a
              href="#contacto"
              className="flex sm:hidden w-fit justify-between items-center px-2 bg-[#f0f0f1] py-1 rounded-full text-[#000b7a] hover:scale-105 transition-all duration-300"
            >
              Comenzar
              <span className="bg-[#000b7a] p-1 ml-2 rounded-full">
                <IoArrowForwardCircleOutline
                  className={`text-3xl text-[${color}]`}
                />
              </span>
            </a>
          </div>
        </div>
        <div className="w-4/12 h-full hidden sm:flex justify-center items-center">
          <div
            className={`relative h-[106%] w-[250px] 2xl:w-[270px] bg-[${color}] rounded-lg shadow-lg`}
          >
            <Image
              src={img}
              alt={alt}
              layout="fill"
              objectFit="contain"
              unoptimized
            />
            <div className="w-full absolute bottom-5 flex justify-center">
              <a
                href="#contacto"
                className="flex justify-between items-center px-2 bg-[#f0f0f1] py-1 rounded-full text-[#000b7a] hover:scale-105 transition-all duration-300"
              >
                Comenzar
                <span className="bg-[#000b7a] p-1 ml-2 rounded-full">
                  <IoArrowForwardCircleOutline
                    className={`text-3xl text-[${color}]`}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
