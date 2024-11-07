import Image from "next/image"

export default function HorariosCursos({ data }) {
  return (
    <div className="w-11/12 xl:w-10/12 flex flex-col lg:flex-row items-center py-20">
      <div className="lg:w-4/12 flex flex-col items-center lg:items-start">
        <div className="relative w-[200px] xxl:w-[250px] aspect-square">
          <Image
            src="/img/horariocurso.png"
            layout="fill"
            objectFit="contain"
            alt="horario curso"
          />
        </div>
        <h2 className="text-3xl xs:text-4xl xxl:text-5xl font-bold text-[#001a70] mt-5 text-center lg:text-start">
          Conoce nuestros <br /> horarios
        </h2>
      </div>
      <div className="w-full md:w-11/12 lg:w-8/12 grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-y-7 mt-7 lg:mt-0">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${index === data.length - 1 && data.length % 2 !== 0 ? "col-span-2" : ""}`}
          >
            {item.titulo && (
              <h3 className="text-3xl text-[#001a70]  mb-5 ">{item.titulo}</h3>
            )}
            <div className="w-[285px] xs:w-[300px] xxl:w-[330px] dropShadow3 bg-gray-100 rounded-2xl py-6 px-6 xxl:py-8 flex flex-col items-center text-center">
              <p className="text-xl xs:text-2xl text-[#001a70] font-bold mb-5">
                {item.dia}
              </p>
              {item.horas.map((hora, i) => (
                <p key={`parrafo${i}`} className="text-xl font-bold mb-1">
                  {hora}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
