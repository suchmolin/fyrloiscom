import { Button, Dropdown, Popover } from "flowbite-react"

import Image from "next/legacy/image"
import { FaWhatsapp } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { LiaLinkedin } from "react-icons/lia"
import { LiaFacebookSquare } from "react-icons/lia"
import { FaPhoneAlt } from "react-icons/fa"
import { FaMapMarkerAlt } from "react-icons/fa"

export default function FooterAE() {
  const data = [
    {
      titulo: "Caracas (CCCT)",
      img: "/img/AE/ccctmap.png",
      direccion:
        "Centro Ciudad Comercial Tamanaco (CCCT), Sector Yarey, lopcal PB 005",
      redir:
        "https://www.google.com/maps/place/Centro+Ciudad+Comercial+Tamanaco+-+CCCT/@10.4851878,-66.8577643,17z/data=!3m1!4b1!4m6!3m5!1s0x8c2a58562d6be2f7:0x68c1b72d71c1d7d6!8m2!3d10.4851825!4d-66.8551894!16s%2Fg%2F11b60rx05d?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      titulo: "Caracas (UCAB)",
      img: "/img/AE/ucabmap.png",
      direccion: "Ucab Montalbán, módulo 1, piso 5, oficina A1-53.",
      redir:
        "https://www.google.com/maps/place/Universidad+Cat%C3%B3lica+Andr%C3%A9s+Bello/@10.4648228,-66.9793932,16.25z/data=!4m10!1m2!2m1!1sUCAB!3m6!1s0x8c2a5ff4fca985bf:0x43cb2d8100a63708!8m2!3d10.4641419!4d-66.9764402!15sCgRVQ0FCWgYiBHVjYWKSARJwcml2YXRlX3VuaXZlcnNpdHmaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUnhhSFJZVnpSM1JSQULgAQA!16zL20vMGg3NTN6?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      titulo: "Caracas (Prados del Este)",
      img: "/img/AE/pdemap.png",
      direccion:
        "Centro Comercial Galerías Prados del Este, Mezzanina, local M2",
      redir:
        "https://www.google.com/maps/place/Centro+Comercial+Galer%C3%ADas+Prados+del+Este/@10.4492514,-66.8949345,15z/data=!4m10!1m2!2m1!1scentro+comercial+prados+del+este+fyrlois!3m6!1s0x8c2af7986c74cf3f:0x35c3de38e2550b20!8m2!3d10.4496787!4d-66.880684!15sCihjZW50cm8gY29tZXJjaWFsIHByYWRvcyBkZWwgZXN0ZSBmeXJsb2lzWioiKGNlbnRybyBjb21lcmNpYWwgcHJhZG9zIGRlbCBlc3RlIGZ5cmxvaXOSAQ9zaG9wcGluZ19jZW50ZXLgAQA!16s%2Fg%2F11rxnxs923?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      titulo: "Maturín",
      img: "/img/AE/maturinmap.png",
      direccion: "Centro Comercial Servimas Monterrey, piso 1, oficina 08.",
      redir:
        "https://www.google.com/maps/place/Centro+Comercial+Servimas/@9.8025324,-63.2080666,17z/data=!3m1!4b1!4m6!3m5!1s0x8c333f000d7326e9:0xcd01792c8eabc90!8m2!3d9.8025271!4d-63.2054917!16s%2Fg%2F11ld456s2l?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      titulo: "Puerto Ordaz",
      img: "/img/AE/pozmap.png",
      direccion: "Centro Comercial Naraya, piso 1, Local 123.",
      redir:
        "https://www.google.com/maps/search/centro+comercial+nayara+fyrlois/@8.2934764,-62.7311253,17z?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      titulo: "Barquisimeto",
      img: "/img/AE/bqtomap.png",
      direccion:
        "Av Terepaima, Multicentro Empresarial Crystal Plaza, Torre B, 1er piso, Local 1-B",
      redir:
        "https://www.google.com/maps/place/Multicentro+Empresarial+Crystal+Plaza/@10.0569426,-69.3060525,15z/data=!4m10!1m2!2m1!1scristal+plaza+barquisimeto+fyrlois!3m6!1s0x8e875d619e25a677:0x1fdab15b4f3e90e1!8m2!3d10.061309!4d-69.2842712!15sCiJjcmlzdGFsIHBsYXphIGJhcnF1aXNpbWV0byBmeXJsb2lzWiQiImNyaXN0YWwgcGxhemEgYmFycXVpc2ltZXRvIGZ5cmxvaXOSARdub25fcHJvZml0X29yZ2FuaXphdGlvbpoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VRdGMxOURZWE5uUlJBQuABAA!16s%2Fg%2F11j23_gsgx?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D",
    },
  ]
  const content = (img, direccion) => (
    <div className="w-[250px]">
      <div className="p-1 relative w-[250px] h-[200px]">
        <Image src={img} objectFit="cover" layout="fill" alt="CCCT" />
      </div>
      <p className="p-2">{direccion}</p>
    </div>
  )
  return (
    <>
      <div className="w-full min-h-[250px] flex flex-col sm:flex-row bg-[#f0f0f1] px-10 xl:px-20 py-16">
        <div className="w-3/12 hidden lg:block">
          <Image
            className="hover:scale-105 transition-all duration-300 cursor-pointer"
            src="/img/1.png"
            alt="Fyr Lois"
            width={190}
            height={80}
          />
        </div>
        <div className="w-3/12 lg:w-2/12 pb-5 sm:pb-0">
          <h2 className="font-[EastmanBold] mb-3">Navegación</h2>
          <ul className="text-sm flex flex-col gap-3">
            <li className="hover:text-[#00b7a] hover:font-bold transition-all duration-300">
              <a href="#">Inicio</a>
            </li>
            <li className="hover:text-[#00b7a] hover:font-bold transition-all duration-300">
              <a href="#horarios">Horarios</a>
            </li>
            <li className="hover:text-[#00b7a] hover:font-bold transition-all duration-300">
              <a href="#conocenos">Conócenos</a>
            </li>
            <li className="hover:text-[#00b7a] hover:font-bold transition-all duration-300">
              <a href="#contacto">Contáctanos</a>
            </li>
          </ul>
        </div>
        <div className="w-11/12 sm:w-6/12 lg:w-4/12 pb-5 sm:pb-0">
          <h2 className="font-[EastmanBold] mb-3">Contáctanos</h2>
          <p className="flex gap-2 items-center mb-2">
            <FaPhoneAlt className=" text-[#000b7a]" /> 0212 959 3681
          </p>
          <p className="flex gap-2 items-center">
            <FaMapMarkerAlt className=" text-[#000b7a]" />
            Centro Ciudad Comercial Tamanaco <br /> (CCCT), Sector Yarey, local
            PB 005
          </p>
        </div>
        <div className="w-3/12 pb-5 sm:pb-0">
          <h2 className="font-[EastmanBold] mb-3">Dirección</h2>
          <div className="bg-[#cdea80] w-fit py-2 px-4 rounded-md hover:font-bold transition-all duration-300">
            <Dropdown inline label="Sedes" dismissOnClick={false}>
              {data.map((item, i) => (
                <Dropdown.Item
                  onClick={() => window.open(item.redir, "_blank")}
                  key={i}
                  className="p-0"
                >
                  <Popover
                    content={content(item.img, item.direccion)}
                    trigger="hover"
                    placement="left"
                  >
                    <Button
                      color="light"
                      className="border-none bg-transparent w-full h-full"
                    >
                      {item.titulo}
                    </Button>
                  </Popover>
                </Dropdown.Item>
              ))}
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[70px] flex  flex-col-reverse sm:flex-row justify-between items-center bg-[#f0f0f1] px-4 sm:px-20 pb-24 sm:pb-0">
        <p className="text-sm">© 2024 Fyr Lois. All Right Reserved.</p>
        <div className="flex gap-4 text-2xl items-center">
          <a
            href="https://wa.me/584242760113"
            aria-label="Whatsapp"
            className="hover:scale-110 hover:text-green-500 transition-all duration-300"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/fyrloisgrancaracas/?hl=en"
            aria-label="Instagram"
            className="hover:scale-110 hover:text-orange-400 transition-all duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/fyr-lois-language-institute"
            aria-label="Linkedin"
            className="hover:scale-110 hover:text-blue-400 transition-all duration-300"
          >
            <LiaLinkedin className="text-3xl" />
          </a>
          <a
            href="https://www.facebook.com/fyrlois.oficial"
            aria-label="Facebook"
            className="hover:scale-110 hover:text-blue-500 transition-all duration-300"
          >
            <LiaFacebookSquare className="text-3xl" />
          </a>
        </div>
      </div>
    </>
  )
}
