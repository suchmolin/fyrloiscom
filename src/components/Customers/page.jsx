import Image from "next/image"

export default function Customers() {
  return (
    <div className="bottomCustomer relative flex flex-col bg-gray-100 min-h-[200px] w-full pb-20 overflow-hidden">
      <Image
        className="absolute -rotate-45 md:-top-16 scale-130 md:scale-100"
        src="/img/contrato.webp"
        width={400}
        height={500}
        alt="contrato"
      />
      <div className="flex justify-center flex-wrap items-center gap-10 sm:gap-20  mt-20  text-7xl py-10 z-10">
        <div className="relative w-[100px] h-[50px]">
          <Image src="/img/empresa1.png" objectFit="cover" fill alt="client" />
        </div>
        <div className="relative w-[100px] h-[50px]">
          <Image src="/img/empresa2.png" objectFit="cover" fill alt="client" />
        </div>
        <div className="relative w-[100px] h-[50px]">
          <Image src="/img/empresa3.png" objectFit="cover" fill alt="client" />
        </div>
        <div className="relative w-[100px] h-[50px]">
          <Image src="/img/empresa4.png" objectFit="cover" fill alt="client" />
        </div>
        <div className="relative w-[100px] h-[50px]">
          <Image src="/img/empresa5.png" objectFit="cover" fill alt="client" />
        </div>
        <div className="relative w-[100px] h-[50px]">
          <Image src="/img/empresa6.png" objectFit="cover" fill alt="client" />
        </div>
      </div>
      <h2 className="text-center text-3xl text-[#000b7a] font-bold z-10">
        Nuestros Clientes
      </h2>
    </div>
  )
}
