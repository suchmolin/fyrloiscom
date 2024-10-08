import Image from "next/image"
import SingleCourse from "../SingleCourse/page"
import { Spinner } from "flowbite-react"
import { HiOutlineShoppingCart } from "react-icons/hi"
import { GoArrowRight } from "react-icons/go"

export default function HeroSingleCourse({ courseData }) {
  return courseData ? (
    <div className="w-full pt-32 pb-20 flex justify-center">
      <div className="w-10/12 flex flex-col-reverse md:flex-row gap-5 md:gap-20 justify-center items-center">
        <div className="sm:w-5/12 lg:w-4/12 flex flex-col text-center md:text-start items-center md:items-start">
          <h1 className="text-4xl font-bold text-[#001A70] mb-2">
            {courseData.title}
          </h1>
          <div className="flex gap-2 text-[#020203] font-bold items-center mt-2">
            <div className="relative w-[30px] aspect-square">
              <Image
                src="/img/singleCourse.png"
                layout="fill"
                objectFit="contain"
                alt="image"
              />
            </div>
            <p>{courseData.etapa}</p>
            <div className="relative w-[30px] aspect-square">
              <Image
                src="/img/singleCourse2.png"
                layout="fill"
                objectFit="contain"
                alt="image"
              />
            </div>
            <p>${courseData.price}.00</p>
          </div>
          <p className="text-lg text-[#001A70] mb-4">
            {courseData.description2}
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="dropShadow3 pr-1 pl-4 py-1 bg-white/80 rounded-full flex gap-3 justify-between items-center hover:bg-white transition-all duration-300 w-fit text-black"
            >
              Comprar
              <span className="p-2 rounded-full bg-[#9ee701]">
                <GoArrowRight className="text-gray-800" />
              </span>
            </a>
            <button className="dropShadow3 p-2 bg-[#9ee701] rounded-full overflow-hidden text-xl text-black">
              <HiOutlineShoppingCart />
            </button>
          </div>
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
