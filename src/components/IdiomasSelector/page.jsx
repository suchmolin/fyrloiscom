import { Dropdown } from "flowbite-react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import ModalIdiomas from "../ModalIdiomas"
import { Button } from "flowbite-react"
import { useState } from "react"

export default function IdiomasSelector() {
  const t = useTranslations("navbarMenu")
  const [openModal, setOpenModal] = useState(false)
  const [selected, setSelected] = useState("")

  return (
    <>
      <Dropdown label={t("dropDown")} inline>
        <Dropdown.Header className="w-[240px]">
          <span className="block text-sm text-[#000b7a]">{t("ddTitle")}</span>
        </Dropdown.Header>
        <Dropdown.Item
          className="flex gap-3 ml-2"
          onClick={() => {
            setOpenModal(true)
            setSelected("es")
          }}
        >
          <Image src="/img/spanish.png" width={20} height={20} alt="spanish" />
          {"   "}
          {t("ddItem1")}
        </Dropdown.Item>
        <Dropdown.Item
          className="flex gap-3 ml-2"
          onClick={() => {
            setOpenModal(true)
            setSelected("en")
          }}
        >
          {" "}
          <Image
            src="/img/united-states.png"
            width={20}
            height={20}
            alt="spanish"
          />
          {t("ddItem2")}
        </Dropdown.Item>
      </Dropdown>
      <ModalIdiomas
        openModal={openModal}
        setOpenModal={setOpenModal}
        selected={selected}
      />
    </>
  )
}
