import { NextResponse } from "next/server"
import Stripe from "stripe"
import { data as cursosInfo } from "@/data/cursos"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(req, res) {
  const data = await req.json()

  const items = data.map((item) => {
    let curso
    cursosInfo.forEach((cur) => {
      if (cur.id === item.id) {
        curso = cur
      } else {
        if (cur.subCourse?.some((sub) => sub.id === item.id)) {
          curso = cur.subCourse.find((sub) => sub.id === item.id)
        }
      }
    })
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: curso.title,
          images: [
            `https://fyrloiscom.vercel.app/_next/image?url=%2Fimg%2F${curso.img}&w=1920&q=75`, //CAMBIO EN PRODUCCION
          ],
        },
        unit_amount: curso.price * 100,
      },
      quantity: item.cantidad,
    }
  })
  const session = await stripe.checkout.sessions.create({
    success_url: "https://fyrloiscom.vercel.app/es/checkout-success", //CAMBIO EN PRODUCCION
    line_items: items,
    metadata: { data: JSON.stringify(data), date: Date.now() },
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
      description: "Pagina Web Fyr Lois",
    },
  })

  return NextResponse.json({ data: session, message: "datos recibidos" })
}
