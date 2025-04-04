"use client"
import Image from "next/image"
import BlogUltimosArticulos from "@/components/BlogUltimosArticulos/page"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

export default function ArticulosBlog({ params }) {
  const t = useTranslations("ArticulosBlog")
  const { blogArticle } = params

  const [blog, setBlog] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await import(`/src/${t("data")}/blog`)

        setBlog(data.find((item) => item.id === blogArticle))
      } catch (error) {
        console.log("Error importing data", error)
      }
    }
    fetchData()
  }, [t, blogArticle])

  return blog.length === 0 ? (
    <div className="h-[600px]"></div>
  ) : (
    <div className="w-full flex flex-col items-center pt-36 pb-10">
      <div className="relative w-10/12 h-[300px] sm:h-[400px] rounded-2xl overflow-hidden">
        <Image
          layout="fill"
          objectFit="cover"
          src={`/img/${blog.tarjeta?.imgPrincipal}`}
          alt={blog.tarjeta?.titulo}
        />
      </div>
      <div className="w-11/12 lg:w-7/12 py-5  border-b-2 border-gray-200">
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
            {item.subtitulo && (
              <h3
                key={"subtitulo" + i}
                className="text-[#001A70] text-xl py-10 px-5 font-bold"
              >
                {item.subtitulo}
              </h3>
            )}
            {item.texto &&
              item.texto.map((parr, i) => {
                return parr.indexOf("<<") >= 0 ? (
                  <p
                    key={"texto" + i}
                    className="text-gray-500 text-lg py-5 px-1 md:px-5"
                  >
                    {parr.slice(0, parr.indexOf("<<"))}

                    {
                      <a
                        className="text-[#001A70] font-bold transition-all duration-300"
                        href={parr.slice(
                          parr.indexOf("==") + 2,
                          parr.indexOf(">>")
                        )}
                      >
                        {parr.slice(parr.indexOf("<<") + 2, parr.indexOf("=="))}
                      </a>
                    }

                    {parr.slice(parr.indexOf(">>") + 2, parr.lenght)}
                  </p>
                ) : parr.indexOf("<br>") >= 0 ? (
                  <p
                    key={"texto" + i}
                    className="text-gray-500 text-lg py-5 px-1 md:px-5"
                  >
                    {parr.slice(0, parr.indexOf("<br>"))}
                    <br />
                    {parr.slice(parr.indexOf("<br>") + 4, parr.lenght)}
                  </p>
                ) : parr.indexOf("<b>") >= 0 ? (
                  <p
                    key={"textob" + i}
                    className="text-gray-500 text-lg py-5 px-1 md:px-5"
                  >
                    {parr.slice(0, parr.indexOf("<b>"))}
                    <b>
                      {parr.slice(
                        parr.indexOf("<b>") + 3,
                        parr.indexOf("</b>")
                      )}
                    </b>

                    {parr.slice(parr.indexOf("</b>") + 4, parr.lenght)}
                  </p>
                ) : (
                  <p
                    key={"texto" + i}
                    className="text-gray-500 text-lg py-5 px-1 md:px-5"
                  >
                    {parr}
                  </p>
                )
              })}
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
          </>
        ))}
      </div>
      <div className="w-full flex flex-col">
        <h2 className="text-[#001A70] font-bold text-5xl py-10 px-5 text-center">
          {t("h2")}
        </h2>
        <BlogUltimosArticulos />
      </div>
    </div>
  )
}
