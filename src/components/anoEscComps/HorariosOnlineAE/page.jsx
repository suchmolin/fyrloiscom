export default function HorariosOnlineAE() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col items-center sm:-mt-20">
        <p className="text-[#000b7a] text-base sm:text-xl lg:text-3xl font-[EastmanBold] py-3">
          De lunes a jueves
        </p>
        <div className="py-10 px-10 sm:px-20 flex flex-col justify-center rounded-lg bg-[#cdea80] min-h-[188px]">
          <p className="font-[EastmanBold] text-xl sm:text-3xl text-gray-700 py-1">
            2:00 - 2:50 pm
          </p>
          <p className="font-[EastmanBold] text-xl sm:text-3xl text-gray-700 py-1">
            3:00 - 3:50 pm
          </p>
          <p className="font-[EastmanBold] text-xl sm:text-3xl text-gray-700 py-1">
            4:00 - 4:50 pm
          </p>
          <p className="font-[EastmanBold] text-xl sm:text-3xl text-gray-700 py-1">
            5:00 - 5:50 pm
          </p>
        </div>
        <p className="py-2 text-xs sm:text-sm text-center font-[EastmanBold]">
          Exclusivo para Elementary y High School
        </p>
      </div>
    </div>
  )
}
