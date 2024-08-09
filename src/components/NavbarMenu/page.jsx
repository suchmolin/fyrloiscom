import { Slide } from "react-awesome-reveal"

export default function NavbarMenu() {
  return (
    <Slide direction="down">
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
    </Slide>
  )
}
