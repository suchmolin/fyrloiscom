import { MdOutlineShoppingCart } from "react-icons/md"

export default function CartButtonPage({ cantCart, setIsOpen, isOpen }) {
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="relative p-2 rounded-full flex items-center justify-center bg-[#9ee701] cursor-pointer hover:shadow-lg w-fit"
    >
      <MdOutlineShoppingCart className="text-2xl" />
      {cantCart > 0 && (
        <span className="absolute -top-1 -right-3 bg-red-500 text-white rounded-full px-2 py-1 text-xs flex items-center justify-center">
          {cantCart}
        </span>
      )}
    </div>
  )
}
