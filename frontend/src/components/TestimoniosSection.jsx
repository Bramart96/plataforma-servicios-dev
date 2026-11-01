import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const testimonios = [
  { id: 1, nombre: "Valentina (Frontend)", texto: "La interfaz de la app es muy intuitiva. Conseguí una entrevista en 3 días." },
  { id: 2, nombre: "Martín (Backend)", texto: "Lo que más valoro es la calidad de los perfiles. ¡Excelente herramienta!" },
  { id: 3, nombre: "Carla (HR Recruiter)", texto: "Filtrar candidatos es rápido y simple. Muy buena experiencia." },
  { id: 4, nombre: "Diego (Fullstack)", texto: "Me ayudó a encontrar un proyecto freelance que encajaba perfecto conmigo." },
  { id: 5, nombre: "Lucía (Tech Lead)", texto: "Pude armar equipo en menos de una semana. Es súper efectiva." },
  { id: 6, nombre: "Andrés (Recruiter)", texto: "Nunca fue tan fácil hacer match con candidatos tan preparados." },
  { id: 7, nombre: "Florencia (Diseñadora UX)", texto: "Me contactaron desde 3 empresas. Estoy muy agradecida." },
  { id: 8, nombre: "María (Fullstack Dev)", texto: "Preferí crear mi perfil acá en vez de LinkedIn. Me contactaron rápido y fue más simple." },
];

const TestimoniosSlider = () => {

  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount =3;

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = testimonios.length - visibleCount;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  }, 10000);

  return () => clearInterval(interval);
}, [testimonios.length, visibleCount]);


  return (
    <section className="od-text py-16 px-4">
      <h2 className="od-accent text-2xl md:text-4xl font-bold text-center mb-4">Testimonios</h2>
      <h3 className="od-muted text-xl text-center mb-6 "> Vos podrias ser el siguiente!</h3>
      <div className="overflow-hidden max-w-5x1 mx-auto">
        <motion.div
          ref={containerRef}
          className="flex gap-6"
          animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ width: `${(testimonios.length / visibleCount) * 100}%` }}
        >
          {testimonios.map((t) => (
            <div
              key={t.id}
              className="od-card min-w-[calc(50%/3)] p-6 rounded-2xl shadow-md"
            >
              <p className="od-text text-lg md:text-xl leading-relaxed mb-4">“{t.texto}”</p>
              <p className="od-accent text-sm md:text-base font-bold text-right">— {t.nombre}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimoniosSlider;
