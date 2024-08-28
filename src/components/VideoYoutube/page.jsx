export default function VideoYoutube({ href }) {
  return (
    <iframe
      className="aspect-video w-full rounded-lg"
      src={href}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  )
}
