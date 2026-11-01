import { useState } from "react";

const accordionData = [
  {
    title: "Nuestra Misión",
    content:
      "Somos una empresa comprometida con la excelencia, enfocados en brindar soluciones innovadoras que generen un impacto positivo en nuestros clientes y en la comunidad.",
  },
  {
    title: "Nuestra Visión",
    content:
      "Ser reconocidos como líderes en nuestro sector, distinguidos por nuestra capacidad de innovación y por las relaciones duraderas que construimos con nuestros clientes.",
  },
  {
    title: "Nuestros Valores",
    content:
      "Integridad, pasión por lo que hacemos, trabajo en equipo y mejora continua son los principios que guían cada una de nuestras acciones.",
  },
  {
    title: "Qué Nos Diferencia",
    content:
      "Nuestro enfoque personalizado, la calidad de nuestros servicios y nuestro compromiso con resultados medibles nos distingue en el mercado.",
  },
];

const About = () => {
  const [isMainOpen, setIsMainOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleMainAccordion = () => {
    setIsMainOpen((wasOpen) => !wasOpen);
    setActiveIndex(null);
  };

  const toggleSubAccordion = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="mx-auto w-full max-w-5xl px-2 py-4 sm:px-4" aria-label="Sobre nosotros">
      <div className="od-card overflow-hidden rounded-2xl shadow-xl">
        <button
          type="button"
          className="od-text od-hover-surface flex w-full items-center justify-between gap-3 px-5 py-5 text-left text-lg font-semibold transition-colors sm:px-7"
          onClick={toggleMainAccordion}
          aria-expanded={isMainOpen}
          aria-controls="od-about-details"
        >
          <span>¿Querés saber más de nosotros?</span>
          <span className="od-accent text-2xl" aria-hidden="true">
            {isMainOpen ? "−" : "+"}
          </span>
        </button>

        {isMainOpen && (
          <div id="od-about-details" className="border-t od-border">
            {accordionData.map((item, index) => (
              <div key={item.title} className="border-b od-border last:border-b-0">
                <button
                  type="button"
                  className="od-text od-hover-surface flex w-full items-center justify-between gap-3 px-5 py-4 text-left font-medium transition-colors sm:px-7"
                  onClick={() => toggleSubAccordion(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`od-about-panel-${index}`}
                >
                  <span>{item.title}</span>
                  <span className="od-accent text-xl font-bold" aria-hidden="true">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                {activeIndex === index && (
                  <div
                    id={`od-about-panel-${index}`}
                    className="od-profile px-5 py-5 leading-relaxed sm:px-7"
                  >
                    <p className="od-muted">{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
