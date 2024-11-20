import { Resend } from "resend"

export async function POST(req, res) {
  const data = await req.json()
  const { personal, answer, result } = data

  const resend = new Resend(process.env.RESEND_SECRET_KEY)

  const respuesta = await resend.emails.send({
    from: "info@fyrlois.com",
    to: "info@fyrlois.com",
    subject: `Test de nivelacion Pagina web - ${personal.name}`,
    html: `
            <html>
              <head>
              </head>
              <body>
                <h1>${personal.name} ha completado el test de nivelacion en la Pagina Web de FyrLois</h1>
                <p>Correo: ${personal.email}</p>
                <p>Ciudad: ${personal.city}</p>
                <p>Telefono: ${personal.cel}</p>
                <p>Fecha de nacimiento: ${personal.date}</p>
                <br />
                <h2>Resultado: ${result} / ${answer.length}</h2>
                
                
              </body>
            </html>
      `,
  })
  await resend.emails.send({
    from: "info@fyrlois.com",
    to: personal.email,
    subject: `Test de nivelacion Pagina web Fyr Lois - ${personal.name}`,
    html: `
            <html>
              <head>
              </head>
              <body>
                <h1>${personal.name} ha completado el test de nivelacion en la Pagina Web de FyrLois</h1>
                
                <h2>Resultado: ${result} / ${answer.length}</h2>
                <p>Pronto sera contactado por nuestros agentes de atención al cliente para brindarle la información necesaria.</p>
                
              </body>
            </html>
      `,
  })
  return respuesta
}
