
import { useState } from "react";
import { useCarrito } from "@/contexts/CarritoContext";

export default function CardsCarrito() {
  const {
  carrito,
  contracts,
  setContracts,
  eliminar,
  setMostrarCarrito
} = useCarrito();

  // Mostrar solamente desarrolladores sin contratar
  const devsSinContratar = carrito.filter(
    (dev) => !contracts.some(
      (contract) => contract.dev === dev.name
    )
  );

  // Estados del formulario de contratación
  const [selectedDev, setSelectedDev] = useState(null);
  const [form, setForm] = useState({
    salario: "",
    lenguaje: "",
    horas: ""
  });

  // Seleccionar desarrollador para contratar
  const handleAccept = (dev) => {
    setSelectedDev(dev);
  };

  // Actualizar campos del formulario
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Registrar contrato y actualizar carrito
  const handleSubmit = () => {
    if (!selectedDev) return;

    const newContract = {
      dev: selectedDev.name,
      ...form
    };

    // Registrar el contrato globalmente
    setContracts((prev) => [...prev, newContract]);

    // Quitar del carrito al desarrollador contratado
    eliminar(selectedDev.name);
    setMostrarCarrito(false);

    // Limpiar formulario
    setSelectedDev(null);
    setForm({
      salario: "",
      lenguaje: "",
      horas: ""
    });
  };

  return (
    <div className="w-full p-5 bg-[#090F1C] font-sans text-white">

      {/* TARJETAS DE DESARROLLADORES */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

        {devsSinContratar.map(({ id, name, img }) => (
          <div
            key={id}
            className="
              bg-[#152238]
              border border-[#334155]
              rounded-2xl
              shadow-lg
              p-6
              flex flex-col
              items-center
              transition-colors
              hover:border-[#7C3AED]
            "
>
            <img
              src={img}
              alt={name}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />

            <h2 className="text-2xl font-bold text-center text-white mb-6">
              {name}
            </h2>

            <div className="flex justify-around gap-3 w-full">

              {/* QUITAR DEL CARRITO */}

              {/* QUITAR DEL CARRITO */}
              <button
                type="button"
                onClick={() => {
                  eliminar(name);
                  setMostrarCarrito(false);
                }}
                className="
                  px-4 py-2
                  rounded-lg
                  border border-[#334155]
                  bg-[#233B5E]
                  text-white font-semibold
                  transition-colors duration-200
                  hover:bg-[#315382]
                "
              >
                Quitar del carrito
              </button>



              {/* CONTRATAR DESARROLLADOR */}
              <button
                type="button"
                onClick={() => handleAccept({ id, name, img })}
                className="
                  px-4 py-2
                  rounded-lg
                  bg-[#7C3AED]
                  text-white font-semibold
                  shadow
                  transition-colors duration-200
                  hover:bg-[#6D28D9]
                "
              >
                Contratar
              </button>


            </div>
          </div>
        ))}

      </div>

      {/* MODAL DE CONTRATACIÓN */}
      {selectedDev && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          <div className="bg-zinc-800 p-6 rounded-2xl w-80 shadow-xl">

            <h2 className="text-xl font-bold text-[rgb(175,252,65)] mb-4">
              Contrato laboral
            </h2>

            <p className="mb-2">
              Para:{" "}
              <span className="font-semibold">
                {selectedDev.name}
              </span>
            </p>

            <input
              name="salario"
              placeholder="Salario ofrecido"
              value={form.salario}
              onChange={handleChange}
              className="w-full p-2 mb-2 rounded bg-zinc-700 text-white"
            />

            <input
              name="lenguaje"
              placeholder="Lenguaje requerido"
              value={form.lenguaje}
              onChange={handleChange}
              className="w-full p-2 mb-2 rounded bg-zinc-700 text-white"
            />

            <input
              name="horas"
              placeholder="Horas de trabajo"
              value={form.horas}
              onChange={handleChange}
              className="w-full p-2 mb-4 rounded bg-zinc-700 text-white"
            />

            <div className="flex justify-end gap-2">

              <button
                type="button"
                onClick={() => setSelectedDev(null)}
                className="text-sm text-gray-300 hover:underline"
              >
                Cancelar
              </button>

              <button
                type="button"
                onClick={handleSubmit}
                className="bg-[rgb(199,125,255)] hover:bg-violet-400 text-black px-3 py-1 rounded-xl text-sm"
              >
                Enviar contrato
              </button>

            </div>
          </div>
        </div>
      )}

      {/* HISTORIAL DE CONTRATOS */}
      {contracts.length > 0 && (
        <div className="mt-10 max-w-2xl mx-auto">

          <h3 className="text-lg font-semibold mb-3 text-[rgb(175,252,65)]">
            Contratos enviados
          </h3>

          <ul className="space-y-2">
            {contracts.map((contract, index) => (
              <li
                key={index}
                className="bg-zinc-800 p-4 rounded-xl text-sm text-white shadow"
              >
                <strong>{contract.dev}</strong>
                {" — 💵 "}{contract.salario}
                {" | 💻 "}{contract.lenguaje}
                {" | ⏰ "}{contract.horas}
              </li>
            ))}
          </ul>

        </div>
      )}

    </div>
  );
}
