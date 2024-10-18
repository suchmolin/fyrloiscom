import Image from "next/image"
import { FaStar } from "react-icons/fa"

export default function ReviewCard({ item }) {
  return (
    <div className="w-full h-full flex justify-center items-center py-10">
      <div className="dropShadow2 w-11/12 rounded-xl bg-gradient-to-b from-white to-gray-100 p-4 flex justify-between items-center">
        <div
          className={`${item.img ? "w-12/12 sm:w-7/12" : "w-12/12"} flex flex-col justify-center items-center h-full`}
        >
          {item.opinion.map((op, i) => (
            <p key={i} className="text-gray-600 p-2 text-sm">
              {op}
            </p>
          ))}
          {item.img && (
            <div className="block sm:hidden w-[210px] xs:w-[280px] aspect-square relative mb-3">
              <Image
                src={item.img}
                layout="fill"
                objectFit="contain"
                alt="review"
              />
            </div>
          )}
          <div className="w-full flex gap-2 mb-2 border-gray-400 border-t pt-4">
            {[...Array(5)].map((e, i) => (
              <FaStar key={i} className="text-yellow-300 text-2xl" />
            ))}
          </div>
          <p className="w-full">
            <b>{item.name}, </b> {item.descripcion}
          </p>
        </div>
        {item.img && (
          <div className="hidden sm:block w-[200px] aspect-square relative">
            <Image
              src={item.img}
              layout="fill"
              objectFit="contain"
              alt="review"
            />
          </div>
        )}
      </div>
    </div>
  )
}
