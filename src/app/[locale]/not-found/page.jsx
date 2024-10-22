import Image from "next/image"

export default function Page() {
  return (
    <>
      <div className="flex gap-3 items-center justify-center text-center pt-48 ">
        <div className="relative w-[400px] aspect-square">
          <Image
            src="/img/404.png"
            layout="fill"
            objectFit="contain"
            alt="404"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-8xl text-[#001a70] font-bold">404</h1>
          <h2 className="text-3xl  text-[#001a70] font-bold">Not Found</h2>
        </div>
      </div>
      <div className="w-full flex justify-center mb-20">
        <a href="/es/" className="py-2 px-4 bg-[#001a70] text-white rounded-xl">
          Volver a Fyr Lois
        </a>
      </div>
    </>
  )
}
