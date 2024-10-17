export default function VideoYoutube({ href }) {
  return (
    <iframe
      className="aspect-video w-full rounded-lg"
      src={href}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  )
}
