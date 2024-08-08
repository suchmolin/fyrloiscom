import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="absolute flex flex-col md:flex-row items-center justify-center md:justify-end pr-0 md:pr-10 xl:mr-0 xl:justify-center w-full h-40">
      <div className="w-[150px] h-[50px] md:w-[200px] md:h-[77px] relative md:absolute md:left-16 2xl:left-28 flex items-center mb-3 md:mb-0">
        <Image src="/img/1.png" fill objectFit="cover" alt="" />
      </div>
      <ul className="flex items-center gap-3 sm:gap-7 lg:gap-10 text-[#000b7a] text-base xs:text-sm  sm:text-lg  md:text-base lg:text-lg font-bold ">
        <li className="hover:text-[#bb29b9] transition-all duration-300">
          <a href="#" className="">
            Idiomas
          </a>
        </li>
        <li className="hover:text-[#bb29b9] transition-all duration-300">
          <a href="#" className="">
            Online
          </a>
        </li>
        <li className="hover:text-[#bb29b9] transition-all duration-300">
          <a href="#" className="">
            Presencial
          </a>
        </li>
        <li className="hidden md:block hover:text-[#bb29b9] transition-all duration-300">
          <a href="#" className="">
            Conócenos
          </a>
        </li>
        <li className="hover:text-[#bb29b9] transition-all duration-300">
          <a href="#" className="">
            Contáctanos
          </a>
        </li>
      </ul>
    </nav>
  )
}
