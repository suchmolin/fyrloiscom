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
  return respuesta
}
