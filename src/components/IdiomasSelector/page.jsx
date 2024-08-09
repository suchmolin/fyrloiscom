import { Dropdown } from "flowbite-react"
import Image from "next/image"

export default function IdiomasSelector() {
  return (
    <Dropdown label="Idiomas" inline>
      <Dropdown.Item className="flex gap-2 mr-4">
        <Image src="/img/spanish.png" width={20} height={20} alt="spanish" />
        {"   "}
        Español
      </Dropdown.Item>
      <Dropdown.Item className="flex gap-2 mr-4">
        {" "}
        <Image
          src="/img/united-states.png"
          width={20}
          height={20}
          alt="spanish"
        />
        Inglés
      </Dropdown.Item>
    </Dropdown>
  )
}
