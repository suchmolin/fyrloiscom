import Image from "next/legacy/image"

export default function IconsAE() {
  return (
    <div className="flex gap-1">
      <div className="w-[40px] sm:w-[80px] h-[40px] sm:h-[80px] relative">
        <Image
          src="/img/AE/iconohello.png"
          alt="icon"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className="w-[40px] sm:w-[80px] h-[40px] sm:h-[80px] relative">
        <Image
          src="/img/AE/bombillo.png"
          alt="icon"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className="w-[40px] sm:w-[80px] h-[40px] sm:h-[80px] relative">
        <Image
          src="/img/AE/flecha.png"
          alt="icon"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
    </div>
  )
}
