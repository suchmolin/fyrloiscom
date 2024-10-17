import DifCursosOnline from "@/components/DifCursosOnline/page"
import HeaderCursosOnline from "@/components/HeaderCursosOnline/page"
import OnlineCoursesList from "@/components/OnlineCoursesList/page"
import SiguesTeniendoDudas from "@/components/SiguesTeniendoDudas/page"

export default function CursosOnlinePage() {
  return (
    <>
      <HeaderCursosOnline />
      <DifCursosOnline />
      <OnlineCoursesList />
      <SiguesTeniendoDudas />
    </>
  )
}
