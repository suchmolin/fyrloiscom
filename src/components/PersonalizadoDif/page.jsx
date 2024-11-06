import PersonalizadoTablas from "../PersonalizadoTablas/page"
import PersonalizadoSinLimite from "../PersonalizadoSinLimite/page"

export default function PersonalizadoDif({ data }) {
  return (
    <>
      <PersonalizadoTablas />
      <PersonalizadoSinLimite data={data} />
    </>
  )
}
