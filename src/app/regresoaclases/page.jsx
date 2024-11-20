"use client";
import DescEtapasAE from "@/components/anoEscComps/DescEtapasAE/page";
import EtapasAE from "@/components/anoEscComps/EtapasAE/page";
import HeaderAE from "@/components/anoEscComps/HeaderAE/page";
import AdaptadoAE from "@/components/anoEscComps/AdaptadoAE/page";
import SocialMenuAE from "@/components/anoEscComps/SocialMenuAE/page";
import HorariosAE from "@/components/anoEscComps/HorariosAE/page";
import DifAE from "@/components/anoEscComps/DifAE/page";
import ContactanosAE from "@/components/anoEscComps/ContactanosAE/page";
import FooterAE from "@/components/anoEscComps/FooterAE/page";

export default function RegresoaClasesPage() {
  return (
    <main className="font-[Eastman] ">
      <HeaderAE />
      <EtapasAE />
      <DescEtapasAE />
      <AdaptadoAE />
      <HorariosAE />
      <DifAE />
      <ContactanosAE />
      <SocialMenuAE />
      <FooterAE />
      {/*
       */}
    </main>
  );
}
