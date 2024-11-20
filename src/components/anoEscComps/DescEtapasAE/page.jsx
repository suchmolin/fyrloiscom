"use client"
import { FaSquare } from "react-icons/fa"
import CardDescEtapaAE from "../CardDescEtapaAE/page"
import { IoArrowForwardCircleOutline } from "react-icons/io5"
import Image from "next/legacy/image"

export default function DescEtapasAE() {
  const Desciptions = {
    kids: [
      "Metodología divertida, pensada para su etapa de aprendizaje.",
      "Aprovecha la plasticidad de su cerebro para aprender el idioma",
      "Amplía su conocimiento del mundo, cultura y colerancia.",
      "Logra una pronunciación más precisa del inglés a temprana edad.",
    ],
    elementary: [
      "Mejora su rendimiento académico del colegio.",
      "Desarrolla su capacidad para adaptarse a nuevos entornos y situaciones",
      "Potencia sus habilidades comunicativas, fomenta su comprensión y empatia hacia diferentes culturas.",
      "Le brinda acceso a recursos educativos globales.",
    ],
    highSchool: [
      "Metodología práctica y estimulante, especial para que se mantenga motivado hasta dominar el inglés.",
      "Temas pensados para su edad e intereses",
      "Preparación para pruebas académicas: TOEFL y IELTS.",
      "Potencia sus oportunidades de becas y de estudios en el extranjero.",
    ],
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[#f0f0f1] py-10 bg-[url('/img/AE/school2.webp')] bg-contain bg-no-repeat bg-right">
      <div className="w-11/12 lg:w-11/12 flex flex-col gap-10">
        <div className="w-full flex">
          <div className="hidden lg:flex w-2/12 justify-center items-center">
            <Image
              src="/img/AE/bombillo.png"
              alt="Bombillo"
              width={90}
              height={90}
              unoptimized
            />
          </div>
          <div
            id="kidsdesc"
            className="w-full lg:w-10/12 xl:w-9/12 bg-[#000b7a] text-white rounded-xl flex justify-between"
          >
            <div className="w-full sm:w-8/12 flex flex-col pl-5 sm:pl-10 md:pl-20 pr-5 sm:pr-0 py-7">
              <h3
                className={`text-xl md:text-2xl text-[#cdea80] sm:pl-10 font-[EastmanBold]`}
              >
                Kids (3 a 5 años)
              </h3>
              <div>
                {Desciptions.kids.map((item, i) => (
                  <div key={i} className="flex gap-4 items-center mt-1 md:mt-4">
                    <div
                      className={`text-xs md:text-sm text-[#cdea80] text-center `}
                    >
                      <FaSquare />
                    </div>
                    <p
                      key={`parrafo${i}`}
                      className="text-base md:text-xl flex items-center justify-start"
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <div className="w-full flex justify-center pt-5 ">
                <a
                  href="#contacto"
                  className="flex sm:hidden w-fit justify-between items-center px-2 bg-[#f0f0f1] py-1 rounded-full text-[#000b7a] hover:scale-105 transition-all duration-300"
                >
                  Comenzar
                  <span className="bg-[#000b7a] p-1 ml-2 rounded-full">
                    <IoArrowForwardCircleOutline
                      className={`text-3xl text-[#cdea80]`}
                    />
                  </span>
                </a>
              </div>
            </div>
            <div className="w-4/12 h-full hidden sm:flex justify-center items-center">
              <div
                className={`relative h-[106%] w-[250px] 2xl:w-[270px] bg-[#cdea80] rounded-lg shadow-lg`}
              >
                <Image
                  src="/img/AE/nino.webp"
                  alt="niño de 4 años sonriendo y levantando el dedo pulgar de la mano izquierda en señal de 
aprobación del curso de ingles"
                  layout="fill"
                  objectFit="contain"
                  unoptimized
                />
                <div className="w-full absolute bottom-5 flex justify-center">
                  <a
                    href="#contacto"
                    className="flex justify-between items-center px-2 bg-[#f0f0f1] py-1 rounded-full text-[#000b7a] hover:scale-105 transition-all duration-300"
                  >
                    Comenzar
                    <span className="bg-[#000b7a] p-1 ml-2 rounded-full">
                      <IoArrowForwardCircleOutline
                        className={`text-3xl text-[#cdea80]`}
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*
        <CardDescEtapaAE
          icon="/img/AE/bombillo.png"
          color="#cdea80"
          titulo="Kids (3 a 5 años)"
          img="/img/AE/nino.png"
          items={Desciptions.kids}
        />
        */}
        <CardDescEtapaAE
          icon="/img/AE/estrella.png"
          color="#f37eb5"
          titulo="Elementary (6 a 11 años)"
          img="/img/AE/azul.png"
          items={Desciptions.elementary}
          id="elementarydesc"
          alt="niña de 8 años con cabello negro ondulado, sonriendo por el curso ingles"
          />
        <CardDescEtapaAE
          icon="/img/AE/iconohello.png"
          color="#fbd874"
          titulo="High School (12 a 16 años)"
          img="/img/AE/rosada.webp"
          items={Desciptions.highSchool}
          id="highschooldesc"
          alt="adolescente femenina de 17 años con los brazos cruzados y cabello marron, sonriendo por
el curso de inglés
"
        />
      </div>
    </div>
  )
}
