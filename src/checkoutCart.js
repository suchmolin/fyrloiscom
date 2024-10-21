export async function handleCheckout(data) {
  const resp = await fetch("/api/checkout", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (resp) {
    const response = await resp.json();

    window.location.href = response.data.url;
  } else {
    console.log("Error al enviar los datos");
  }
}
