import Image from "next/image"
import FormFooter from "../FormFooter/page"
import SocialFooter from "../SocialFooter/page"

export default function Footer() {
  return (
    <div className="textureFooter w-full min-h-[450px] flex justify-center bg-[#000b7a]/20 py-10">
      <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row gap-10 justify-between">
        <div className="flex flex-col sm:flex-row w-full lg:w-8/12 justify-between">
          <div className="flex flex-col justify-between items-center sm:items-start text-[#000b7a] sm:mt-20 mb-10 sm:mb-0">
            <div>
              <Image src="/img/1.png" width={150} height={100} alt="fyrlois" />
              <ul className="py-2 flex flex-col items-center sm:items-start gap-2  pl-5">
                <li className="hover:text-[#bb29b9] transition-all duration-300">
                  <a href="#0">Online</a>
                </li>
                <li className="hover:text-[#bb29b9] transition-all duration-300">
                  <a href="#0">Presencial</a>
                </li>
                <li className="hover:text-[#bb29b9] transition-all duration-300">
                  <a href="#0">Conócenos</a>
                </li>
                <li className="hover:text-[#bb29b9] transition-all duration-300">
                  <a href="#0">Contactanos</a>
                </li>
              </ul>
            </div>
            <p className="pl-5 md:pl-0 py-4 sm:py-0 text-center">
              Fyr Lois ® Todos los derechos reservados.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-w-[300px] w-12/12 sm:w-fit">
            <h2 className="text-2xl text-[#000b7a] text-center sm:text-start">
              Escríbenos
            </h2>
            <FormFooter />
          </div>
        </div>
        <div className="">
          <SocialFooter />
        </div>
      </div>
    </div>
  )
}
