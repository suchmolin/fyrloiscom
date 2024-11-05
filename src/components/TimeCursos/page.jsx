export default function TimeCursos({ data }) {
  return (
    <div className="w-full bg-[#001a70] flex justify-center items-center py-10">
      <div className="w-full sm:w-10/12 xl:w-9/12 xxl:w-7/12 flex flex-col sm:flex-row items-center gap-y-7 px-4 sm:px-0 sm:justify-between text-white">
        {data.map((item) => (
          <div
            key={item.titulo}
            className="w-[270px] flex flex-col text-center items-center"
          >
            <p className="rounded-full w-24 lg:w-32 aspect-square border-[5px] lg:border-[7px] border-[#9ee701] flex justify-center items-center text-5xl lg:text-7xl font-bold mb-4">
              {item.num}
            </p>
            <p className="text-xl lg:text-2xl font-bold">{item.titulo}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
