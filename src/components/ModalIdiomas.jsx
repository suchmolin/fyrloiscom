import { Modal, Spinner } from "flowbite-react"
import { useLocale } from "next-intl"
import Image from "next/image"
export default function ModalIdiomas({ openModal, setOpenModal, selected }) {
  const locale = useLocale()
  return (
    <Modal
      className=""
      dismissible
      show={openModal}
      onClose={() => setOpenModal(false)}
    >
      <Modal.Body className="">
        <>
          <div className="flex gap-5 w-full text-center justify-center items-center">
            <h2 className="text-lg sm:text-2xl text-[#001A70] text-center font-bold">
              Selecciona el modo de estudio
            </h2>
            <Image
              src={`/img/${selected === "es" ? "spanish" : "united-states"}.png`}
              alt=""
              width={30}
              height={30}
            />
          </div>
          <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-7 justify-center items-center py-2 sm:py-5">
            <div className="w-full sm:w-5/12 flex flex-col gap-3 justify-center items-center shadow-lg py-5 rounded-lg">
              <div className="relative w-[150px] sm:w-[200px] h-[130px] sm:h-[150px]">
                <Image
                  src="/img/online.jpg"
                  objectFit="cover"
                  fill
                  alt="online courses"
                  className="rounded-lg"
                />
              </div>
              <a
                href={
                  selected === "es"
                    ? `/${locale}/online?langCourse=spanish`
                    : `/${locale}/online?langCourse=english`
                }
                className="text-center py-1 sm:py-2 px-5 bg-[#001A70] text-white rounded-md hover:bg-[#9ee701] w-11/12 transition-all duration-300"
              >
                ONLINE
              </a>
            </div>
            <div className="w-full sm:w-5/12 flex flex-col gap-3 justify-center items-center shadow-lg py-5 rounded-lg">
              <div className="relative w-[150px] sm:w-[200px] h-[130px] sm:h-[150px]">
                <Image
                  src="/img/presential.jpg"
                  objectFit="cover"
                  fill
                  alt="presential courses"
                  className="rounded-lg"
                />
              </div>
              <a
                href={
                  selected === "es"
                    ? `/${locale}/sedes/kissimmee?langCourse=spanish`
                    : `/${locale}/sedes`
                }
                className="text-center py-1 sm:py-2 px-5 bg-[#bb29b9] text-white rounded-md hover:bg-[#9ee701] w-11/12 transition-all duration-300"
              >
                PRESENCIAL
              </a>
            </div>
          </div>
        </>
      </Modal.Body>
    </Modal>
  )
}
