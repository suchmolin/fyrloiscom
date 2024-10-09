import LlevaTuProyecto from "@/components/LlevaTuProyecto/page";
import NuestrosTeachers from "@/components/NuestrosTeachers/page";

export default function Teacher() {
  return (
    <div className="text-center flex flex-col items-center">
      <NuestrosTeachers />
      <LlevaTuProyecto />
    </div>
  );
}
