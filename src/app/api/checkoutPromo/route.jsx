import { NextResponse } from "next/server"
import Stripe from "stripe"
import { data as dataPromos } from "@/data/promociones"

export async function POST(req, res) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const data = await req.json()

  const items = data.map((item) => {
    const prom = dataPromos.find((promo) => promo.id === item.id)

    const detalles = `${prom.detalles.join(", ")}, ${item.curso || ""}`
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: prom.titulo,
          description: detalles,
          images: [
            `https://fyrlois.com./img/${prom.img}`, //CAMBIO EN PRODUCCION
          ],
        },
        unit_amount: item.precio * 100,
      },
      quantity: item.cantidad,
    }
  })

  const session = await stripe.checkout.sessions.create({
    success_url: "https://fyrlois.com/es/checkout-success", //CAMBIO EN PRODUCCION
    line_items: items,
    metadata: { data: JSON.stringify(data), date: Date.now(), promocion: true },
    mode: "payment",
    custom_fields: [
      {
        key: "telphoneNumber",
        label: {
          type: "custom",
          custom: "Número de teléfono",
        },
        type: "numeric",
      },
    ],
    payment_intent_data: {
      description: "Pagina Web Fyr Lois PROMOCION",
    },
  })

  return NextResponse.json({ data: session, message: "datos recibidos" })
}
