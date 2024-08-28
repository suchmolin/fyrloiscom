import Image from "next/image"
import SingleCourse from "../SingleCourse/page"

export default function HeroSingleCourse({ courseData }) {
  return (
    <div className="w-full flex pt-44 pb-20">
      <div className="w-8/12 flex flex-col items-center">
        <h1 className="text-center text-5xl text-[#000b7a] font-bold pb-4">
          {courseData.title}
        </h1>
        <p className="text-gray-500 text-sm pt-1 pb-4">
          descripcion Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Hic, labore.
        </p>
        <div className="pl-20">
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
          <button className="bg-[#ffa101] text-white px-4 py-2 rounded-md">
            Comprar
          </button>
          <button className="bg-[#000b7a] text-white px-4 py-2 rounded-md">
            Agregar al carrito
          </button>
        </div>
      </div>
      <div className="">
        <SingleCourse key={courseData.id} item={courseData} comprar={false} />
      </div>
    </div>
  )
}
