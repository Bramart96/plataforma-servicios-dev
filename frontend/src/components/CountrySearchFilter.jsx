import { useMemo, useState } from "react";

const COUNTRIES = [
  "Argentina", "Brasil", "Chile", "Colombia", "México", "Perú", "Uruguay",
  "Venezuela", "Estados Unidos", "Canadá", "Costa Rica", "Panamá",
  "Ecuador", "Bolivia", "Paraguay", "Guatemala", "Honduras",
  "El Salvador", "Nicaragua", "Cuba", "República Dominicana", "Puerto Rico",
];

const CountrySearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = useMemo(() => {
    const query = searchTerm.trim().toLocaleLowerCase("es");
    return query
      ? COUNTRIES.filter((country) => country.toLocaleLowerCase("es").includes(query))
      : COUNTRIES;
  }, [searchTerm]);

  return (
    <div className="od-card mx-auto w-full max-w-md rounded-2xl p-6 shadow-lg">
      <div className="relative mb-5 flex items-center">
        <svg
          className="od-muted pointer-events-none absolute left-4 h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>

        <input
          type="text"
          placeholder="Buscar país…"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="od-profile od-text w-full rounded-xl py-4 pl-12 pr-10 text-sm outline-none placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
          aria-label="Buscar países"
        />

        {searchTerm && (
          <button
            type="button"
            onClick={() => setSearchTerm("")}
            className="od-muted od-hover-surface absolute right-3 rounded-full p-1.5"
            aria-label="Limpiar búsqueda"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      <div className="od-profile min-h-[200px] max-h-[300px] overflow-y-auto rounded-xl p-2">
        {filteredCountries.length > 0 ? (
          <ul className="space-y-1">
            {filteredCountries.map((country) => (
              <li
                key={country}
                onClick={() => console.log(`País seleccionado: ${country}`)}
                className="cursor-pointer rounded-lg border border-transparent px-4 py-3 font-medium transition-colors hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-400"
              >
                {country}
              </li>
            ))}
          </ul>
        ) : (
          <p className="od-muted py-10 text-center text-sm">
            No se encontraron países
          </p>
        )}
      </div>

      <div className="od-muted od-border mt-4 border-t pt-4 text-center text-sm">
        {filteredCountries.length} de {COUNTRIES.length} países
      </div>
    </div>
  );
};

export default CountrySearchFilter;
