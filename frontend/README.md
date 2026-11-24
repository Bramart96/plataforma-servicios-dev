# OriginDev | Interfaz web

Desarrollé la interfaz de OriginDev con **Next.js 15, React 19 y Tailwind CSS 4**. Organicé la página de inicio en secciones y componentes reutilizables para presentar perfiles de desarrolladores.

## Funcionalidades implementadas

- Presentación y navegación de la página de inicio.
- Carrusel de tarjetas de desarrolladores con controles de desplazamiento.
- Selección de perfiles mediante el carrito y estado compartido con React Context.
- Secciones de testimonios, formulario de usuario y contacto.
- Enlace de consultas técnicas a [GitHub Issues](https://github.com/Bramart96/plataforma-servicios-dev/issues).

Las tarjetas muestran perfiles definidos en el propio frontend. No las presento como registros obtenidos desde una API.

## Estructura

```text
src/pages/           Páginas de Next.js
src/components/      Componentes de interfaz
src/contexts/        Estado compartido
src/styles/          Estilos de presentación
public/              Recursos estáticos
```

## Ejecución

Desde `frontend/`:

```bash
npm install
npm run dev
```

Abro `http://localhost:3000` para visualizar la aplicación local.

[Documentación general del proyecto](../README.md).
