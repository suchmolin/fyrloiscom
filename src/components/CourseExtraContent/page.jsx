"use client"
import { useLocale } from "next-intl"
import { GoArrowRight } from "react-icons/go"
import { FaCheck } from "react-icons/fa"
import TimeCursos from "@/components/TimeCursos/page"

export default function CourseExtraContent({ data, sections }) {
  const locale = useLocale()
  if (!data) return null

  const show = (key) => !sections || sections.includes(key)
  const {
    recorrido,
    programa,
    metodologia,
    inversion,
    faqCurso,
    time,
    programaAcademico,
  } = data

  return (
    <>
      {show("recorrido") && recorrido && (
        <section className="w-full flex justify-center py-16 bg-white">
          <div className="w-11/12 xl:w-10/12 overflow-hidden rounded-3xl border border-[#e4ebf3] bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_2.9fr]">
              <div className="bg-[#001a70] text-white p-8 lg:p-10 flex flex-col justify-center">
                <p className="text-[#9ee701] text-sm font-bold tracking-[0.16em] uppercase mb-3">
                  {recorrido.eyebrow}
                </p>
                <h2 className="text-3xl xl:text-[2.2rem] font-bold leading-tight mb-4">
                  {recorrido.title}{" "}
                  {recorrido.titleHighlight && (
                    <span className="text-[#9ee701]">
                      {recorrido.titleHighlight}
                    </span>
                  )}
                </h2>
                <p className="text-white/85 text-base xl:text-lg">
                  {recorrido.description}
                </p>
              </div>
              <div className="p-5 lg:p-7 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2.5 items-stretch">
                {recorrido.steps.map((step, index) => (
                  <div
                    key={`${step.age}-${index}`}
                    className="relative rounded-2xl border border-[#e4ebf3] bg-white px-2.5 py-[18px] text-center"
                  >
                    {index < recorrido.steps.length - 1 && (
                      <span className="hidden xl:block absolute -right-[14px] top-[44%] text-[#001a70] text-xl z-10 leading-none">
                        →
                      </span>
                    )}
                    <span className="inline-block rounded-full bg-[#001a70] text-white text-[0.78rem] font-bold px-2 py-1">
                      {step.age}
                    </span>
                    {step.icon && (
                      <div className="text-[2.3rem] leading-none my-[18px]" aria-hidden>
                        {step.icon}
                      </div>
                    )}
                    <strong className="block text-[#001a70] text-base">
                      {step.title}
                    </strong>
                    <small className="block text-[#6c7b90] mt-1.5 text-xs leading-snug">
                      {step.description}
                    </small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {show("programa") && programa && (
        <section className="w-full flex justify-center py-16 bg-gray-100">
          <div className="w-11/12 xl:w-10/12">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <p className="text-[#001a70]/80 text-sm font-bold tracking-[0.16em] uppercase mb-3">
                {programa.eyebrow}
              </p>
              <h2 className="text-3xl xl:text-4xl font-bold text-[#001a70] mb-4 leading-tight">
                {programa.title}
              </h2>
              <p className="text-gray-500 text-base xl:text-lg">
                {programa.description}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
              {programa.items.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-[20px] p-[25px] border border-[#e8edf4]"
                >
                  {item.icon && (
                    <div className="text-[2rem] leading-none mb-2.5" aria-hidden>
                      {item.icon}
                    </div>
                  )}
                  <h3 className="text-[#001a70] font-bold text-xl mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-[#66778d] text-[0.92rem] leading-relaxed m-0">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {show("metodologia") && metodologia && (
        <section className="w-full flex justify-center py-16 bg-white">
          <div className="w-11/12 xl:w-10/12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl bg-gradient-to-br from-[#9ee701] to-[#cdea80] p-8 min-h-[320px] flex items-end dropShadow3">
              <div className="bg-white rounded-2xl p-6 max-w-md">
                <p className="text-[#001a70] font-bold text-xl xl:text-2xl leading-snug mb-3">
                  “{metodologia.quote}”
                </p>
                <p className="text-gray-500 text-sm xl:text-base">
                  {metodologia.quoteSupport}
                </p>
              </div>
            </div>
            <div>
              <p className="text-[#001a70]/80 text-sm font-bold tracking-[0.16em] uppercase mb-3">
                {metodologia.eyebrow}
              </p>
              <h2 className="text-3xl xl:text-4xl font-bold text-[#001a70] mb-4 leading-tight">
                {metodologia.title}
              </h2>
              <p className="text-gray-600 mb-6 text-base xl:text-lg">
                {metodologia.description}
              </p>
              <div className="flex flex-col gap-4 mb-8">
                {metodologia.checks.map((check) => (
                  <div key={check.title} className="flex gap-3 items-start">
                    <span className="mt-0.5 w-7 h-7 rounded-full bg-[#e8f8c8] text-[#001a70] flex items-center justify-center shrink-0">
                      <FaCheck className="text-xs" />
                    </span>
                    <div>
                      <p className="font-bold text-[#001a70]">{check.title}</p>
                      <p className="text-gray-500 text-sm">{check.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href={`/${locale}/contactUs`}
                className="dropShadow3 pr-1 pl-4 py-1 bg-white/80 rounded-full inline-flex gap-3 justify-between items-center hover:bg-white transition-all duration-300 w-fit text-black"
              >
                {locale === "es" ? "Conocer una sede" : "Visit a campus"}
                <span className="p-2 rounded-full bg-[#9ee701]">
                  <GoArrowRight className="text-gray-800" />
                </span>
              </a>
            </div>
          </div>
        </section>
      )}

      {show("programaAcademico") && programaAcademico && (
        <section className="w-full flex justify-center py-16 bg-[#f4f8fc]">
          <div className="w-11/12 xl:w-10/12">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <p className="text-[#001a70]/80 text-sm font-bold tracking-[0.16em] uppercase mb-3">
                {programaAcademico.eyebrow}
              </p>
              <h2 className="text-3xl xl:text-4xl font-bold text-[#001a70] leading-tight">
                {programaAcademico.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {programaAcademico.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[20px] bg-white border border-[#e5ebf3] p-6"
                >
                  <span className="block text-[#607187] text-sm mb-1">
                    {metric.label}
                  </span>
                  <strong className="block text-[1.65rem] text-[#001a70] font-bold leading-tight mb-2">
                    {metric.value}
                  </strong>
                  <p className="text-[#607187] text-sm m-0 leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {show("time") && time && !programaAcademico && (
        <div className="w-full flex justify-center">
          <TimeCursos data={time} fondoBlanco={data.difBlanco2} />
        </div>
      )}

      {show("inversion") && inversion && (
        <section className="w-full flex justify-center py-16 bg-gray-100">
          <div className="w-11/12 xl:w-10/12 rounded-3xl bg-[#001a70] text-white p-8 lg:p-12 dropShadow3 flex flex-col lg:flex-row gap-8 lg:items-center lg:justify-between">
            <div className="lg:max-w-2xl">
              <p className="text-[#9ee701] text-sm font-bold tracking-[0.16em] uppercase mb-3">
                {inversion.eyebrow}
              </p>
              <h2 className="text-3xl xl:text-4xl font-bold mb-5 leading-tight">
                {inversion.title}
              </h2>
              <p className="text-5xl xl:text-6xl font-[latoblack] leading-none mb-2">
                {inversion.price}{" "}
                <span className="text-base xl:text-lg font-bold opacity-80">
                  {inversion.priceLabel}
                </span>
              </p>
              <p className="text-white/70 text-sm mt-3">{inversion.note}</p>
            </div>
            <div className="bg-[#9ee701] text-[#001a70] rounded-2xl p-6 lg:p-8 text-center min-w-[240px]">
              <p className="font-bold text-sm mb-2">{inversion.discountLabel}</p>
              <p className="text-2xl xl:text-3xl font-bold mb-5">
                {inversion.discount}
              </p>
              <a
                href={`/${locale}/contactUs`}
                className="inline-flex items-center justify-center gap-2 bg-[#001a70] text-white rounded-full px-5 py-3 font-bold hover:scale-[1.02] transition-all duration-300"
              >
                {inversion.cta}
                <GoArrowRight />
              </a>
            </div>
          </div>
        </section>
      )}

      {show("faqCurso") && faqCurso && (
        <section className="w-full flex justify-center py-16 bg-white">
          <div className="w-11/12 xl:w-10/12 max-w-4xl">
            <div className="text-center mb-10">
              <p className="text-[#001a70]/80 text-sm font-bold tracking-[0.16em] uppercase mb-3">
                {faqCurso.eyebrow}
              </p>
              <h2 className="text-3xl xl:text-4xl font-bold text-[#001a70]">
                {faqCurso.title}
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {faqCurso.items.map((item) => (
                <details
                  key={item.ask}
                  className="group bg-gray-50 rounded-2xl border border-gray-100 px-5 py-4"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#001a70]">
                    <span className="text-base sm:text-lg">{item.ask}</span>
                    <span className="transition group-open:rotate-180 bg-[#9ee701] rounded-full p-2 group-open:bg-[#001A70] group-open:text-white shrink-0">
                      <svg
                        fill="none"
                        height="20"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="20"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-600 pr-8">{item.ans}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
