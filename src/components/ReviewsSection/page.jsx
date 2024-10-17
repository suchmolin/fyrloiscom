"use client"
import { Carousel } from "flowbite-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useState, useEffect } from "react"
import ReviewCard from "../ReviewCard/page"

export default function ReviewsSection({ modalidad }) {
  const [data, setData] = useState([])
  const t = useTranslations("ReviewsSection")
  const reviews = data.filter((item) => item.modalidad === modalidad)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await import(`/src/${t("data")}/reviews`)
        setData(data)
      } catch (error) {
        console.log("Error importing data", error)
      }
    }
    fetchData()
  }, [t])

  return (
    <div className="w-full flex flex-col justify-center items-center py-20">
      <h2 className="text-3xl text-[#001a70] text-center font-bold">
        {t("h2")} <br /> {t("h2b")}
      </h2>
      <div className="flex flex-col xl:flex-row gap-x-10 items-center justify-center">
        <div className="w-[270px] xs:w-[350px] sm:w-[450px]  aspect-square relative">
          <Image
            src="/img/reviewsSection.png"
            alt="reviews section"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="w-[280px] xs:w-[360px] sm:w-[620px] md:w-[750px]">
          <Carousel pauseOnHover className="xl:py-10">
            {reviews.map((item) => (
              <ReviewCard key={item.id} item={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}
