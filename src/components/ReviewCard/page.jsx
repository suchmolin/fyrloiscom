import Image from "next/image"
import { FaStar } from "react-icons/fa6"

export default function ReviewCard() {
  return (
    <div className="dropShadow3 w-[350px] rounded-2xl bg-gradient-to-b from-white to-gray-200 px-4 py-3 flex flex-col gap-3">
      <div className="flex gap-1 w-full text-xl text-yellow-200">
        {[...Array(5)].map((e, index) => (
          <FaStar key={index} />
        ))}
      </div>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
        aspernatur maxime reiciendis ipsam a magni enim voluptatum minima
        cupiditate natus voluptatem pariatur itaque. Sunt, quos.
      </p>
      <div className="flex gap-3">
        <div className="w-[30px] aspect-square relative rounded-full overflow-hidden">
          <Image
            src="/img/prof.png"
            alt="estudiantes"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <p className="text-gray-600">name lastname</p>
      </div>
    </div>
  )
}
