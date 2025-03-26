export const data = [
  /*PROMO POR NIVEL *****************************************/
  {
    id: "financiado-level",
    titulo: "FINANCIADO",
    tiempoUnitario: "3 Meses",
    tiempoTotal: "1 Nivel",
    descuento: false,
    sindescuento: "Price $960.00",
    precioAnterior: false,
    precioPromo: 240,
    financiado: {
      descripcion: "3 Cuotas de $240",
      descripcion2: "+ inscripcion $240",
      boton: "COMPRAR",
    },
    detalles: [
      "3 Meses",
      "1 Nivel",
      "Promo Financiado por nivel, 3 cuotas: $240.00$",
    ],
    img: "financiadonivel.png",
  },
  {
    id: "recomendado-level",
    titulo: "RECOMENDADO",
    tiempoUnitario: "3 Meses",
    tiempoTotal: "1 Nivel",
    descuento: 25,
    precioAnterior: 960,
    precioPromo: 720,
    destacar: true,
    detalles: ["3 Meses", "1 Nivel", "Promo DELUXE por nivel"],
    img: "recomendadonivel.png",
  },
  {
    id: "deluxe-level",
    titulo: "Un Nivel",
    tiempoUnitario: "3 Meses",
    tiempoTotal: "1 Nivel",
    descuento: false,
    sindescuento: "Precio Regular",
    precioAnterior: false,
    precioPromo: 960,
    detalles: ["3 Meses", "1 Nivel", "Promo por nivel"],

    img: "extranivel.png",

    img: "1modulo.png",
  },
  /*PROMO POR LAPSO ******************************************/
  {
    id: "essential-modulo",
    titulo: "FINANCIADO",
    tiempoUnitario: "3 Meses",
    tiempoTotal: "1 Módulo",
    descuento: false,
    sindescuento: "Price $960.00",
    precioAnterior: false,
    precioPromo: 240,
    financiado: {
      descripcion: "3 Cuotas de $240",
      descripcion2: "+ inscripcion $240",
      boton: "COMPRAR",
    },
    detalles: [
      "3 Meses",
      "1 Módulo",
      "Promo Financiado por módulo, 4 cuotas: $240.00$",
    ],
    img: "financiadomodulo.png",
  },
  {
    id: "recomendado-modulo",
    titulo: "RECOMENDADO",
    tiempoUnitario: "3 Meses",
    tiempoTotal: "1 Módulo",
    descuento: 25,
    precioAnterior: 960,
    precioPromo: 720,
    detalles: ["3 Meses", "1 Módulo", "Promo Recomendado por Módulo"],
    destacar: true,
    img: "recomendadomodulo.png",
  },
  {
    id: "deluxe-modulo",
    titulo: "DELUXE",
    tiempoUnitario: "6 Meses",
    tiempoTotal: "2 Módulos",
    descuento: 40,
    precioAnterior: 1600,
    precioPromo: 960,
    detalles: ["6 Meses", "2 Módulos", "Promo Deluxe por Módulo"],
    img: "deluxemodulo.png",
  },
  {
    id: "un-modulo",
    titulo: "Módulo",
    tiempoUnitario: "3 Meses",
    tiempoTotal: "1 Módulo",
    descuento: false,
    sindescuento: "Precio Regular",
    precioAnterior: false,
    precioPromo: 800,
    detalles: ["3 Meses", "1 Módulos", "Promo Nivel por Módulo"],
    img: "1modulo.png",
  },

  /*PROMO POR HORA ******************************************/
  {
    id: "essential-hora",
    titulo: "ESSENTIAL",
    tiempoUnitario: "16 Horas",
    tiempoTotal: "Profesor Exclusivo",
    descuento: 10,
    precioAnterior: 640,
    precioPromo: 576,
    detalles: ["16 horas", "Profesor Exclusivo", "Promo ESSENTIAL por hora"],
    img: "essentialhora.png",
  },
  {
    id: "recomendado-hora",
    titulo: "RECOMENDADO",
    tiempoUnitario: "24 Horas",
    tiempoTotal: "Profesor Exclusivo",
    descuento: 15,
    precioAnterior: 960,
    precioPromo: 816,
    detalles: ["24 horas", "Profesor Exclusivo", "Promo RECOMENDADO por hora"],
    img: "recomendadohora.png",
  },
  {
    id: "deluxe-hora",
    titulo: "DELUXE",
    tiempoUnitario: "48 Horas",
    tiempoTotal: "Profesor Exclusivo",
    descuento: 20,
    precioAnterior: 1920,
    destacar: true,
    precioPromo: 1536,
    detalles: ["48 horas", "Profesor Exclusivo", "Promo DELUXE por hora"],
    img: "deluxehora.png",
  },
];
