import { Carousel } from "flowbite-react"
import ReviewCourse from "../ReviewCourse/page"
import "./page.css"

export default function CarruselReviews() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <div className="flex h-full items-center justify-center">
          <ReviewCourse />
        </div>
        <div className="flex h-full items-center justify-center">
          <ReviewCourse />
        </div>
        <div className="flex h-full items-center justify-center">
          <ReviewCourse />
        </div>
      </Carousel>
    </div>
  )
}
