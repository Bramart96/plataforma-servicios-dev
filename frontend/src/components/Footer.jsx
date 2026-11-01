import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

const footerGroups = [
  {
    title: "Legal",
    items: [
      "Privacidad",
      "Términos y Condiciones",
      "Normas de la Comunidad",
      "Política de Cookies",
      "Propiedad Intelectual",
    ],
  },
  {
    title: "Empleos",
    items: [
      "Portal de Empleos",
      "Demandas de Devs",
      "Ofertas de Recluters",
      "Mis Postulaciones",
      "Oportunidades en tu Radar",
      "Eventos y Ferias Laborales",
    ],
  },
  {
    title: "Herramientas",
    items: [
      "Cargar CV o Portfolio",
      "Recursos de formación",
      "Simulador de Entrevistas",
      "Calculadora de Stack ideal",
      "Analizador de perfil",
      "Tips para destacar en el mundo tech",
    ],
  },
];

const Footer = () => {
  return (
    <footer id="contacto" className="od-navbar scroll-mt-[128px] px-5 py-10 sm:px-7">
      <div className="mx-auto max-w-7xl">
        {/* No se inventa un correo: el canal disponible es Issues del proyecto. */}
        <div className="flex flex-col gap-3 border-b od-border pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="od-text text-2xl font-bold">Contacto</h2>
            <p className="od-muted mt-2 text-sm">
              Para consultas técnicas o sugerencias sobre OriginDev, podés escribirnos en GitHub.
            </p>
          </div>
          <a
            href="https://github.com/Bramart96/plataforma-servicios-dev/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="od-button inline-flex w-fit items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold"
          >
            Abrir consulta en GitHub
          </a>
        </div>

        <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-start">
            <img src="/img/logo_proyect.png" alt="OriginDev" className="mb-3 h-20 w-20 object-contain" />
            <p className="od-accent text-2xl font-bold">OriginDev</p>
            <div className="od-muted mt-4 flex gap-4 text-2xl" aria-label="Redes sociales (enlaces pendientes)">
              <FaFacebook aria-hidden="true" />
              <FaInstagram aria-hidden="true" />
              <FaLinkedin aria-hidden="true" />
              <FaTwitter aria-hidden="true" />
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="od-accent mb-4 text-lg font-bold">{group.title}</h3>
              <ul className="od-muted space-y-2 text-sm">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="od-muted grid gap-5 border-t od-border py-7 text-sm md:grid-cols-[140px_1fr]">
          <div>
            <div className="flex items-center gap-3 text-2xl" aria-label="Plataformas móviles">
              <FaGooglePlay aria-hidden="true" />
              <FaApple aria-hidden="true" />
            </div>
            <span className="mt-3 block font-mono text-xs">npm install app</span>
          </div>
          <div className="space-y-3 leading-relaxed">
            <p>
              ¿Sos programador o reclutador? Esta app es para vos. Si estás buscando tu próximo
              desafío profesional, querés sumar talento tech a tu equipo, o simplemente explorar
              oportunidades en el mundo del desarrollo, esta plataforma es tu punto de partida.
              Con cientos de matches laborales concretados, creamos un espacio pensado para
              conectar personas con propósito.
            </p>
            <p>
              Sabemos que hoy el trabajo también se construye online, y que la primera impresión
              importa tanto como el código limpio. En esta app, diseñamos una experiencia ágil,
              inclusiva y enfocada 100% en el ámbito laboral tech, donde podés encontrar desde tu
              próxima pasantía hasta el developer senior que encaje perfecto en tu equipo.
            </p>
            <p>
              No importa si estás dando tus primeros pasos o si llevás años en la industria: acá
              vas a encontrar personas que entienden tu lenguaje (sí, ese que tiene variables y
              deadlines). ¿Querés sumar experiencia? ¿Buscar nuevos talentos? ¿Explorar sin
              compromiso? Este es tu lugar. Esta app no es solo un tablero de ofertas: es una
              comunidad dinámica donde se crean conexiones, proyectos y nuevas oportunidades todos
              los días.
            </p>
          </div>
        </div>

        <div className="od-muted flex flex-col justify-between gap-4 border-t od-border pt-6 text-xs md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} OriginDev. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {[
              { href: "/terms", text: "Términos y condiciones" },
              { href: "/privacy", text: "Privacidad" },
              { href: "/security", text: "Seguridad" },
              { href: "/cookie", text: "Declaración de Cookies" },
            ].map(({ href, text }) => (
              <a key={href} href={href} className="od-nav-link hover:underline">
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
