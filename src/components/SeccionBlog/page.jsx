import BlogUltimosArticulos from "../BlogUltimosArticulos/page"

export default function SeccionBlog() {
  return (
    <div className="w-full flex flex-col items-center py-20">
      <h2 className="text-4xl font-bold text-center pb-4 px-5 text-[#000b7a]">
        Blog
      </h2>
      <p className="text-center text-gray-500 text-lg">
        Aprende acerca de temas imprescindibles para mejorar tu inglés.
      </p>
      <div className="w-full pt-10">
        <BlogUltimosArticulos />
      </div>
    </div>
  )
}
