export default function HorariosPresencialAE() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex flex-col sm:flex-row gap-4 justify-center">
        <div className="sm:w-6/12 gap-2 text-center">
          <p className="text-[#000b7a] text-base sm:text-xl lg:text-2xl font-[EastmanBold] py-1">
            Lunes y Miércoles
          </p>
          <div className="py-10 px-10 flex flex-col justify-center rounded-lg bg-[#cdea80] h-[120px] sm:h-[188px]">
            <p className="font-[EastmanBold] text-sm xs:text-base sm:text-xl lg:text-2xl 2xl:text-3xl text-gray-700">
              2:00 - 3:20 pm
            </p>
            <p className="font-[EastmanBold] text-sm xs:text-base sm:text-xl lg:text-2xl 2xl:text-3xl text-gray-700">
              3:30 - 4:50 pm
            </p>
            <p className="font-[EastmanBold] text-sm xs:text-base sm:text-xl lg:text-2xl 2xl:text-3xl text-gray-700">
              5:00 - 6:20 pm
            </p>
          </div>
        </div>
        <div className="sm:w-6/12 gap-2 text-center">
          <p className="text-[#000b7a] text-base sm:text-xl lg:text-2xl font-[EastmanBold] py-1">
            Martes y Jueves
          </p>
          <div className="py-10 px-10 flex flex-col justify-center rounded-lg bg-[#cdea80] h-[120px] sm:h-[188px]">
            <p className="font-[EastmanBold]  text-sm xs:text-base sm:text-xl lg:text-2xl 2xl:text-3xl text-gray-700">
              2:00 - 3:20 pm
            </p>
            <p className="font-[EastmanBold]  text-sm xs:text-base sm:text-xl lg:text-2xl 2xl:text-3xl text-gray-700">
              3:30 - 4:50 pm
            </p>
            <p className="font-[EastmanBold]  text-sm xs:text-base sm:text-xl lg:text-2xl 2xl:text-3xl text-gray-700">
              5:00 - 6:20 pm
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row gap-4 justify-center mt-10">
        <div className="sm:w-6/12 gap-2 text-center">
          <p className="text-[#000b7a] text-base sm:text-xl lg:text-2xl font-[EastmanBold] py-1">
            Viernes
          </p>
          <div className="py-10 px-10 flex flex-col justify-center rounded-lg bg-[#cdea80] h-[120px] sm:h-[188px]">
            <p className="font-[EastmanBold]  text-sm xs:text-base sm:text-xl lg:text-2xl 2xl:text-3xl text-gray-700">
              2:00 - 5:00 pm
            </p>
            <p className="font-[EastmanBold]  text-sm xs:text-base sm:text-xl lg:text-2xl 2xl:text-3xl text-gray-700">
              5:00 - 8:00 pm
            </p>
            <p className="font-[EastmanBold]  text-sm xs:text-base xl:text-lg text-gray-700">
              (Exclusivo para High School)
            </p>
          </div>
        </div>
        <div className="sm:w-6/12 gap-2 text-center">
          <p className="text-[#000b7a] text-base sm:text-xl lg:text-2xl font-[EastmanBold] py-1">
            Sábados
          </p>
          <div className="py-10 px-10 flex flex-col justify-center rounded-lg bg-[#cdea80] h-[120px] sm:h-[188px]">
            <p className="font-[EastmanBold]  text-sm xs:text-base sm:text-xl lg:text-2xl 2xl:text-3xl text-gray-700">
              9:00 - 12:00 pm
            </p>
            <p className="font-[EastmanBold]  text-sm xs:text-base sm:text-xl lg:text-2xl 2xl:text-3xl text-gray-700">
              2:00 - 5:00 pm
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
