import DiferenciadoresList from "@/components/DiferenciadoresList/page"
import HeroSingleCourse from "@/components/HeroSingleCourse/page"
import { data as dataDif } from "@/data/diferenciadores"
import { data } from "@/data/cursos"
import CarruselReviews from "@/components/CarruselReviews/page"
import VideoYoutube from "@/components/VideoYoutube/page"
import SimilarCourses from "@/components/SimilarCourses/page"

export default function CoursePage({ params }) {
  const { course } = params
  const courseData = data.find((item) => item.id === course)

  return (
    <>
      <HeroSingleCourse courseData={courseData} />
      <div className="w-full h-fit flex justify-center">
        <DiferenciadoresList data={dataDif} />
      </div>
      <div className="w-full h-fit flex justify-center">
        <div className="w-7/12 h-fit]">
          <h2 className="text-3xl font-bold text-[#000b7a] text-center mt-10 mb-10">
            ¿Porqué elegir Fyrlois?
          </h2>
          <VideoYoutube
            href={
              "https://www.youtube.com/embed/UKz1ZAASx_M?si=BA8fUqxUQnV4V96m"
            }
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-8/12">
          <h2 className="text-3xl font-bold text-[#000b7a] text-center mt-10">
            Opiniones
          </h2>
          <CarruselReviews />
        </div>
      </div>
      <div className="w-full flex justify-center py-10">
        <div className="w-10/12 flex flex-col gap-2">
          <h2 className="text-3xl font bold text-[#000b7a] pb-2 text-center font-bold">
            Cursos Relacionados
          </h2>
          <div className="w-full flex gap-2 justify-center">
            <SimilarCourses />
          </div>
        </div>
      </div>
    </>
  )
}
