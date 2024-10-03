import Image from "next/image"
import SingleCourse from "../SingleCourse/page"
import { Spinner } from "flowbite-react"

export default function HeroSingleCourse({ courseData }) {
  return courseData ? (
    <div className="w-full flex flex-col lg:flex-row pt-44 pb-20">
      <div className="w-full sm:w-11/12 lg:w-8/12 flex flex-col items-center px-3 sm:px-0">
        <h1 className="text-center text-5xl text-[#001A70] font-bold pb-4">
          {courseData.title}
        </h1>
        <p className="text-gray-500 text-sm pt-1 pb-4 text-center">
          descripcion Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Hic, labore.
        </p>
        <div className="sm:pl-20">
          <p className="flex gap-2 pb-3 text-sm text-gray-500 items-center">
            <Image
              src="/img/iconCourse1.png"
              width={25}
              height={25}
              alt="diferenciadores"
            />
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
          <p className="flex gap-2 pb-3 text-sm text-gray-500 items-center">
            <Image
              src="/img/iconCourse2.png"
              width={25}
              height={25}
              alt="diferenciadores"
            />
            Lorem ipsum dolor sit amet
          </p>
          <p className="flex gap-2 pb-3 text-sm text-gray-500 items-center">
            <Image
              src="/img/iconCourse3.png"
              width={25}
              height={25}
              alt="diferenciadores"
            />
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
          <p className="flex gap-2 pb-3 text-sm text-gray-500 items-center">
            <Image
              src="/img/iconCourse4.png"
              width={25}
              height={25}
              alt="diferenciadores"
            />
            Lorem ipsum dolor sit amet, consectetur adipisicing consectetur
            adipisicing.
          </p>
        </div>
        <div className="flex gap-3 w-full justify-center mt-5">
          <button className="bg-[#ffa101] text-white px-4 py-2 rounded-md text-sm sm:text-base">
            Comprar
          </button>
          <button className="bg-[#001A70] text-white px-4 py-2 rounded-md text-sm sm:text-base">
            Agregar al carrito
          </button>
        </div>
      </div>
      <div className="flex sm:hidden lg:block w-full sm:w-fit justify-center mt-10 sm:mt-0">
        <SingleCourse key={courseData.id} item={courseData} comprar={false} />
      </div>
      <div className="w-full hidden sm:flex justify-center lg:hidden mt-10">
        <div className="w-11/12 md:w-10/12 rounded-lg  overflow-hidden flex shadow-md">
          <div className="relative  w-[250px]">
            <Image
              src={`/img/${courseData.img}`}
              objectFit="cover"
              fill
              alt={courseData.title}
            />
          </div>
          <div className="w-full flex flex-col">
            <div className="w-full flex justify-center">
              <div className="w-10/12 flex justify-between py-2 border-b border-gray-100">
                <h2 className="text-xl font-bold text-[#001A70] pl-2">
                  {courseData.title}
                </h2>
                <p className="text-[#bb29b9]">{courseData.price}</p>
              </div>
            </div>
            <p className="w-full px-10 text-gray-500 text-center py-2">
              {courseData.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full h-[600px] flex justify-center items-center">
      <Spinner aria-label="Extra large spinner example" size="xl" />
    </div>
  )
}
