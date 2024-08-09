import { FiMapPin } from "react-icons/fi"
import { FiPhone } from "react-icons/fi"
export default function SedePrincipal() {
  return (
    <div className="relative bottom2 min-h-[500px] bg-[url('/img/kissimmee1.webp')] bg-cover bg-center">
      <div className="w-12/12 md:w-8/12 lg:w-6/12 gradient h-[500px] flex flex-col justify-center items-center text-white text-lg bg-white/60 md:bg-white/80">
        <h2 className="text-5xl text-[#000b7a] font-bold mb-3">
          Sede Principal
        </h2>
        <h2 className="text-4xl text-[#000b7a] font-bold">Kissimmee</h2>
        <p className="text-sm sm:text-xl text-[#000b7a] flex gap-2 py-2 items-center">
          <span className="text-[#bb29b9] font-bold">
            <FiMapPin />
          </span>{" "}
          928 East Osceola Parkway, Kissimmee, FL 34744
        </p>
        <p className="text-base sm:text-xl text-[#000b7a] flex gap-2 py-2 items-center">
          <span className="text-[#bb29b9] font-bold">
            <FiPhone />
          </span>{" "}
          +1 (305) 5105259
        </p>
        <button className="shadow-xl py-2 px-4 rounded-lg bg-[#9ee701] text-[#000b7a] my-4 hover:text-white hover:bg-[#000b7a] transition-all duration-300 hover:shadow-2xl">
          Todas las Sedes
        </button>
      </div>
    </div>
  )
}
