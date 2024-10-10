import SingleCourse from "../SingleCourse/page"
import { useSearchParams } from "next/navigation"

export default function SubCourses({ data }) {
  const searchParams = useSearchParams()
  const sede = searchParams.get("s")

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {data.map((item) => {
        return (
          <SingleCourse key={item.id} item={item} sede={sede} comprar={true} />
        )
      })}
    </div>
  )
}
