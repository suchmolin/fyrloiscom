import { data } from "@/data/cursos"

const addCart = async (id, setIsOpen, setCartInfo, setCantCart) => {
  const current = data.find((item) => {
    if (item.id === id) {
      return item
    } else {
      if (item.subCourse?.some((sub) => sub.id === id)) {
        return item.subCourse.find((sub) => sub.id === id)
      }
    }
  })
  let cartInfo = await JSON.parse(localStorage.getItem("cartInfo"))

  if (cartInfo) {
    const index = cartInfo.findIndex((item) => item.id === id)
    if (index === -1) {
      cartInfo.push({ id, cantidad: 1, precio: current.price })
      localStorage.setItem("cartInfo", JSON.stringify(cartInfo))
    }
  } else {
    localStorage.setItem(
      "cartInfo",
      JSON.stringify([{ id, cantidad: 1, precio: current.price }])
    )
    cartInfo = [{ id, cantidad: 1, precio: current.price }]
  }
  setCantCart((prev) => prev + 1)

  setCartInfo(cartInfo)

  setIsOpen(true)
}
export default addCart
