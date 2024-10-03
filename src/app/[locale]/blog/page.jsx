import BlogUltimosArticulos from "@/components/BlogUltimosArticulos/page"

export default function Blog() {
  return (
    <div className="w-full flex flex-col items-center pt-32 pb-20">
      <div className="w-full flex flex-col">
        <h2 className="text-[#001A70] text-5xl py-10 px-5 text-center">
          Últimos Artículos
        </h2>
        <BlogUltimosArticulos />
      </div>
    </div>
  )
}
