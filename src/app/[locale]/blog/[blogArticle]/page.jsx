import Image from "next/image"
import { data } from "@/data/blog.js"
import BlogUltimosArticulos from "@/components/BlogUltimosArticulos/page"

export default function ArticulosBlog({ params }) {
  const { blogArticle } = params
  const blog = data.find((item) => item.id === blogArticle)

  return (
    <div className="w-full flex flex-col items-center pt-44 pb-10">
      <div className="relative w-10/12 h-[300px] sm:h-[600px] rounded-2xl overflow-hidden">
        <Image
          layout="fill"
          objectFit="cover"
          src={`/img/${blog.tarjeta.imgPrincipal}`}
          alt={blog.tarjeta.titulo}
        />
      </div>
      <div className="w-11/12 lg:w-7/12 py-10  border-b-2 border-gray-200">
        <h2 className="text-[#001A70] text-3xl sm:text-5xl lg:text-6xl py-10 px-5 text-center font-bold">
          {blog.tarjeta.titulo}
        </h2>
        <div className="flex gap-3 items-center border-b-2 border-gray-200 pb-10">
          <span className="relative rounded-full overflow-hidden w-[50px] h-[50px]">
            <Image
              layout="fill"
              objectFit="cover"
              src={`/img/${blog.tarjeta.fotoAutor}`}
              alt={blog.tarjeta.autor}
            />
          </span>
          <p className="text-[#001A70] text-xl font-bold">
            {blog.tarjeta.autor}
          </p>
          <span className="text-4xl text-[#001A70]">-</span>
          <p className="text-gray-500 text-lg font-bold">
            {blog.tarjeta.fechaPublicado}
          </p>
        </div>
        {blog.contenido.map((item, i) => (
          <>
            {item.titulo && (
              <h2
                key={"titulo" + i}
                className="text-[#001A70] text-3xl sm:text-4xl py-10 px-5 font-bold"
              >
                {item.titulo}
              </h2>
            )}
            {item.texto &&
              item.texto.map((item, i) => (
                <p
                  key={"texto" + i}
                  className="text-gray-500 text-lg py-5 px-1 md:px-5"
                >
                  {item}
                </p>
              ))}
            {item.img && (
              <div className="w-full flex justify-center">
                <Image
                  key={"img" + i}
                  width={800}
                  height={300}
                  src={`/img/${item.img}`}
                  alt={item.titulo}
                  className="rounded-2xl"
                />
              </div>
            )}
            {item.subtitulo && (
              <h3
                key={"subtitulo" + i}
                className="text-[#001A70] text-xl py-10 px-5 font-bold"
              >
                {item.subtitulo}
              </h3>
            )}
          </>
        ))}
      </div>
      <div className="w-full flex flex-col">
        <h2 className="text-[#001A70] text-5xl py-10 px-5 text-center">
          Últimos Artículos
        </h2>
        <BlogUltimosArticulos />
      </div>
    </div>
  )
}
