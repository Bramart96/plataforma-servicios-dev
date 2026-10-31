import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeSwitch = () => {
  // En el contexto heredado, darkMode=true activa body.dark (tema claro).
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const nextMode = darkMode ? "oscuro" : "claro";

  return (
    <button
      type="button"
      className="od-text flex w-full flex-col items-center gap-1 py-1 text-center cursor-pointer"
      onClick={toggleDarkMode}
      aria-label={`Cambiar a modo ${nextMode}`}
    >
      <span className="text-xl" aria-hidden="true">
        {darkMode ? "🌙" : "☀️"}
      </span>
      <span className="text-sm font-semibold">Modo {nextMode}</span>
    </button>
  );
};

export default ThemeSwitch;
