import { GrStatusGood } from "react-icons/gr"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { Carousel } from "flowbite-react"

export default function PersonalizadoTablas() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20">
      <h2 className="w-11/12 md:w-7/12 xl:w-5/12 text-2xl sm:text-4xl text-[#001a70] font-bold mb-10 text-center">
        Conoce las diferencias entre nuestro Curso Regular y Curso Personalizado
      </h2>
      <div className="w-[350px] sm:w-[640px] lg:w-[1000px] dropShadow3 bg-gray-100 text-[#001a70] rounded-2xl p-3 sm:p-10 font-bold text-xl sm:text-2xl h-[420px] sm:h-fit">
        <table className="tablaPersonalizado hidden sm:block w-full">
          <tr>
            <th></th>
            <th className="border-l px-2 sm:px-7">Regular</th>
            <th className="border-l px-2 sm:px-7">Personalizado</th>
          </tr>
          <tr>
            <td>Clases 100% en ingles</td>
            <td className="border-l">
              <GrStatusGood className="text-[#ADC823] text-3xl" />
            </td>
            <td className="border-l">
              <GrStatusGood className="text-[#ADC823] text-3xl" />
            </td>
          </tr>
          <tr>
            <td>Adaptado a tus necesidades</td>
            <td className="border-l">
              <GrStatusGood className="text-[#ADC823] text-3xl" />
            </td>
            <td className="border-l">
              <GrStatusGood className="text-[#ADC823] text-3xl" />
            </td>
          </tr>
          <tr>
            <td>Metodología única</td>
            <td className="border-l">
              <GrStatusGood className="text-[#ADC823] text-3xl" />
            </td>
            <td className="border-l">
              <GrStatusGood className="text-[#ADC823] text-3xl" />
            </td>
          </tr>
          <tr>
            <td>Profesor exclusivo</td>
            <td className="border-l">
              <AiOutlineCloseCircle className="text-[#001a70] text-3xl" />
            </td>
            <td className="border-l">
              <GrStatusGood className="text-[#ADC823] text-3xl" />
            </td>
          </tr>
          <tr>
            <td>Clases individuales</td>
            <td className="border-l">
              <AiOutlineCloseCircle className="text-[#001a70] text-3xl" />
            </td>
            <td className="border-l">
              <GrStatusGood className="text-[#ADC823] text-3xl" />
            </td>
          </tr>
          <tr>
            <td>Objetivos personalizados</td>
            <td className="border-l">
              <AiOutlineCloseCircle className="text-[#001a70] text-3xl" />
            </td>
            <td className="border-l">
              <GrStatusGood className="text-[#ADC823] text-3xl" />
            </td>
          </tr>
        </table>
        <Carousel>
          <table className="tablaPersonalizado sm:hidden">
            <tr>
              <th colSpan={2}>Regular</th>
            </tr>
            <tr>
              <td>Clases 100% en ingles</td>
              <td className="border-l">
                <GrStatusGood className="text-[#ADC823] text-3xl" />
              </td>
            </tr>
            <tr>
              <td>Adaptado a tus necesidades</td>
              <td className="border-l">
                <GrStatusGood className="text-[#ADC823] text-3xl" />
              </td>
            </tr>
            <tr>
              <td>Metodología única</td>
              <td className="border-l">
                <GrStatusGood className="text-[#ADC823] text-3xl" />
              </td>
            </tr>
            <tr>
              <td>Profesor exclusivo</td>
              <td className="border-l">
                <AiOutlineCloseCircle className="text-[#001a70] text-3xl" />
              </td>
            </tr>
            <tr>
              <td>Clases individuales</td>
              <td className="border-l">
                <AiOutlineCloseCircle className="text-[#001a70] text-3xl" />
              </td>
            </tr>
            <tr>
              <td>Objetivos personalizados</td>
              <td className="border-l">
                <AiOutlineCloseCircle className="text-[#001a70] text-3xl" />
              </td>
            </tr>
          </table>
          <table className="tablaPersonalizado sm:hidden">
            <tr>
              <th colSpan={2}>Personalizado</th>
            </tr>
            <tr>
              <td>Clases 100% en ingles</td>
              <td className="border-l">
                <GrStatusGood className="text-[#ADC823] text-3xl" />
              </td>
            </tr>
            <tr>
              <td>Adaptado a tus necesidades</td>
              <td className="border-l">
                <GrStatusGood className="text-[#ADC823] text-3xl" />
              </td>
            </tr>
            <tr>
              <td>Metodología única</td>
              <td className="border-l">
                <GrStatusGood className="text-[#ADC823] text-3xl" />
              </td>
            </tr>
            <tr>
              <td>Profesor exclusivo</td>
              <td className="border-l">
                <GrStatusGood className="text-[#ADC823] text-3xl" />
              </td>
            </tr>
            <tr>
              <td>Clases individuales</td>
              <td className="border-l">
                <GrStatusGood className="text-[#ADC823] text-3xl" />
              </td>
            </tr>
            <tr>
              <td>Objetivos personalizados</td>
              <td className="border-l">
                <GrStatusGood className="text-[#ADC823] text-3xl" />
              </td>
            </tr>
          </table>
        </Carousel>
      </div>
    </div>
  )
}
