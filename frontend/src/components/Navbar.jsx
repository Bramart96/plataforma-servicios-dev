import { useCallback, useEffect, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { useCarrito } from "@/contexts/CarritoContext";
import CountrySearchFilter from "./CountrySearchFilter";
import About from "./About";
import Link from "next/link";

import CardsCarrito from "./CardsCarrito";

const Navbar = () => {
  /* Contexto compartido del carrito */
  const { mostrarCarrito, setMostrarCarrito, carrito, limpiar } = useCarrito();

  const toggleCarrito = () => {
    if (menuOpen) setMenuOpen(false);
    if (searchOpen) setSearchOpen(false);
    if (userOpen) setUserOpen(false);
    if (aboutOpen) setAboutOpen(false);
    setMostrarCarrito((prev) => !prev);
  };

  /*  DETECCION SCROLL - NAVBAR  */
  const [scrolled, setScrolled] = useState(false);
  /* Paleta unificada mediante variables CSS */
  const [isSmallScreen, setisSmallScreen] = useState(false);
  const darkModeItemsList = "od-text";
  const darkModeBg = "od-surface";
  const darkModeSep = "od-border";
  const darkModeHoverItems = "od-nav-link";
  const hoverBgColor = "od-hover-surface";
  const darkModeScroll = scrolled ? "od-navbar shadow-md" : "od-navbar";

  /*  ABOUT  */
  const [aboutOpen, setAboutOpen] = useState(false);
  const handleAboutClick = () => {
    setMenuOpen(false);
    setSearchOpen(false);
    setUserOpen(false);
    setMostrarCarrito(false);
    setAboutOpen((prev) => !prev);
  };

  /*  MENU HAMBURGUESA   */
  const [menuOpen, setMenuOpen] = useState(false);
  const HandleMenuOpen = () => {
    setSearchOpen(false);
    setUserOpen(false);
    setAboutOpen(false);
    setMostrarCarrito(false);
    setMenuOpen((prev) => !prev);
  };
  /*  BUSQUEDA  */
  const [searchOpen, setSearchOpen] = useState(false);
  const handleSearchClick = () => {
    setMenuOpen(false);
    setUserOpen(false);
    setAboutOpen(false);
    setMostrarCarrito(false);
    setSearchOpen((prev) => !prev);
  };
  /*  MENU DE USUARIO  */
  const [userOpen, setUserOpen] = useState(false);
  const handleUserClick = () => {
    const shouldOpen = !userOpen;
    setMenuOpen(false);
    setSearchOpen(false);
    setAboutOpen(false);
    setMostrarCarrito(false);
    setUserOpen(shouldOpen);
  };

  // Cierra solo los paneles; no elimina productos ni registra acciones.
  const closePanels = useCallback(() => {
    setMenuOpen(false);
    setSearchOpen(false);
    setUserOpen(false);
    setAboutOpen(false);
    setMostrarCarrito(false);
  }, [setMostrarCarrito]);
  /*MEDIA QUERY < 1400 BREAKPOINT */
  useEffect(() => {
    const handleResize = () => {
      setisSmallScreen(window.innerWidth < 1400);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Cerrar paneles cuando se desplaza la página */
  useEffect(() => {
    const handlePageScroll = () => {
      setScrolled(window.scrollY > 50);
      closePanels();
    };

    window.addEventListener("scroll", handlePageScroll, { passive: true });
    return () => window.removeEventListener("scroll", handlePageScroll);
  }, [closePanels]);

  return (
    <>
      <div
        className={`
                w-full h-[120px] sticky top-0 z-50 flex items-center
                justify-between px-5 transition-all
                duration-400
                ${darkModeScroll}`}
        onMouseLeave={closePanels}
      >
        {/*LOGO*/}
        {!isSmallScreen ? (
          <div className="flex flex-col items-center justify-center gap-1 shrink-0 pr-4">
            <img src="/img/logo_proyect.png" alt="Logo" className="w-15" />
            <span className="od-accent font-semibold whitespace-nowrap text-xl">
              OriginDev
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-1 shrink-0 pr-4">
            <img src="/img/logo_proyect.png" alt="Logo" className="w-10" />
            <span className="od-accent font-semibold whitespace-nowrap text-lg">
              OriginDev
            </span>
          </div>
        )}

        {/* NAV-ITEMS */}
        {!isSmallScreen && (
          <nav aria-label="Navegación principal">
            <ul className="flex font-semibold flex-wrap justify-center items-center gap-7 whitespace-nowrap text-lg">
              {[
                { label: "Developers", id: "devs" },
                { label: "Testimonios", id: "testimonios" },
                { label: "Contacto", id: "contacto" },
              ].map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className={darkModeHoverItems}>
                    {section.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={handleAboutClick}
                  className={`${darkModeHoverItems} cursor-pointer`}
                  aria-expanded={aboutOpen}
                >
                  Sobre nosotros
                </button>
              </li>
            </ul>
          </nav>
        )}
        {/* ICONOS Y MENU */}
        <div className="flex items-center justify-center gap-6 shrink-0 space-y-[-1]">

          {/*LUPA*/}
          <button
            type="button"
            onClick={handleSearchClick}
            aria-label="Abrir o cerrar buscador"
            aria-expanded={searchOpen}
            className="hover:scale-110 transition-transform relative"
          >
            <img
              src="/img/lens_logo.png"
              alt="Buscar"
              className="w-7 cursor-pointer"
            />
          </button>

          {/*CARRITO*/}
          <div className="relative">
            <button
              type="button"
              onClick={toggleCarrito}
              aria-label="Abrir o cerrar carrito"
              aria-expanded={mostrarCarrito}
              className="hover:scale-110 transition-transform relative"
            >
              <img
                src="/img/carrito_logo.png"
                alt="Carrito"
                className="w-8 pt-1.5 cursor-pointer"
              />
            </button>
            {carrito.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-700 text-white text-xs font-bold min-w-5 h-5 px-1 rounded-full flex items-center justify-center">
                {carrito.length}
              </span>
            )}
          </div>
          {/*USUARIO*/}
          <div className="relative">
            <button
              type="button"
              onClick={handleUserClick}
              aria-label="Abrir o cerrar menú de usuario"
              aria-expanded={userOpen}
              className="hover:scale-110 transition-transform"
            >
              <img
                  src="/img/user_logo.png"
                  alt="User"
                  className="w-7 mt-1 cursor-pointer"
                />
            </button>
            {userOpen && (
              <div
                className={`${darkModeBg} absolute top-[50px] right-0 w-50 rounded-lg py-2 z-50 text-sm`}
              >
                {/* TRIANGULO */}
                <div className="absolute -top-3 right-5 w-4 h-5 z-[-1]">
                  <div
                    className={`w-4 h-4 ${darkModeBg} rotate-45 transform origin-bottom-left`}
                  ></div>
                </div>
                <div
                  className={`flex justify-center gap-10 ${darkModeBg} border-b ${darkModeSep} pt-1 pb-2 space-y-[-1]`}
                >
                  {/* TEMA ICON */}
                  <ThemeSwitch />
                  {/* MENSAJES */}
                  <button className="hover:scale-110 transition-transform">
                    <img
                      src="/img/logo_message.png"
                      alt="tema oscuro"
                      className="w-8"
                    />
                  </button>
                </div>
                {/*TEXTO*/}
                <ul className="flex flex-col text-center">
                  <li
                    className={`px-4 py-2 font-semibold cursor-pointer transition-colors ${darkModeItemsList} ${hoverBgColor} ${darkModeHoverItems} `}
                  >
                    <Link href="/FormUser" onClick={() => setUserOpen(false)}>
                      Login
                    </Link>
                  </li>
                  <li className="px-4 py-2 text-red-600 font-semibold cursor-pointer hover:bg-red-200  transition-colors">
                    Salir
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* BOTON HAMBURGUESA */}
          {isSmallScreen && (
            <button
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={HandleMenuOpen}
              type="button"
              className={`${darkModeItemsList} text-3xl pl-1 cursor-pointer`}
            >
              {menuOpen ? "✖" : "☰"}
            </button>
          )}
        </div>
        {/* MENU HAMBURGUESA - PANTALLAS PEQUEÑAS */}
        {isSmallScreen && menuOpen && (
          <div
            className={`${darkModeBg} absolute top-[120px] left-0 w-full py-4 shadow-xl z-50`}
          >
            <ul className="w-full text-lg">
              {[
                { label: "Developers", id: "devs" },
                { label: "Testimonios", id: "testimonios" },
                { label: "Contacto", id: "contacto" },
              ].map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-center w-full p-3 ${darkModeHoverItems} ${hoverBgColor}`}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={handleAboutClick}
                  className={`block text-center w-full p-3 ${darkModeHoverItems} ${hoverBgColor} cursor-pointer`}
                >
                  Sobre nosotros
                </button>
              </li>
            </ul>
          </div>
        )}
        {/* ABOUT: mismo panel en escritorio y móvil */}
        {aboutOpen && (
          <div
            className={`${darkModeBg} absolute top-[120px] left-0 w-full p-4 flex items-center gap-2 shadow-xl z-50`}
          >
            <About />
            <button
              type="button"
              onClick={handleAboutClick}
              className={`${darkModeItemsList} text-xl cursor-pointer`}
              aria-label="Cerrar Sobre nosotros"
            >
              ✖
            </button>
          </div>
        )}
        {/* BUSCADOR - LUPA  */}
        {searchOpen && (
          <div
            className={`${darkModeBg} absolute top-[120px] left-0 w-full p-4 flex items-center gap-2`}
          >
            <CountrySearchFilter />
            <button
              type="button"
              onClick={handleSearchClick}
              className={`${darkModeItemsList} text-xl cursor-pointer`}
              aria-label="Cerrar buscador"
            >
              ✖
            </button>
          </div>
        )}
        {/* CARRITO */}
        {mostrarCarrito && (
          <div className="fixed top-[122px] inset-x-3 flex justify-center">
            <div
              className={`${darkModeBg} od-text w-[80%] max-w-5xl max-h-[80vh] overflow-y-auto rounded-xl shadow-2xl`}
            >
              <button
                type="button"
                className="od-accent flex justify-center p-2 w-full cursor-pointer transition hover:underline"
                onClick={() => {
                  limpiar();
                  setMostrarCarrito(false);
                }}
              >
                Limpiar carrito
              </button>
              {carrito.length === 0 ? (
                <p className="od-text text-center py-4">🛒 Carrito vacío</p>
              ) : (
                <CardsCarrito />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
