# OriginDev | Plataforma de servicios para desarrolladores

Desarrollé un proyecto Full Stack orientado a presentar perfiles de desarrolladores y explorar servicios tecnológicos. Organicé el trabajo en dos aplicaciones: una interfaz con **Next.js y React** y una API con **Node.js, Express y MongoDB**.

## Lo que implementé

**Frontend (`frontend/`)**

- Construí una página de inicio con presentación, navegación, tarjetas de desarrolladores, testimonios y contacto.
- Incorporé un carrusel de perfiles navegable y un carrito de selección mediante contexto de React.
- Diseñé una interfaz adaptable con Tailwind CSS, estilos propios y animaciones.
- Agregué vistas para formulario de usuario y carrito.
- Enlacé el contacto técnico con [GitHub Issues](https://github.com/Bramart96/plataforma-servicios-dev/issues).

**Backend (`backend/`)**

- Organicé una API REST con Express, controladores, servicios, modelos, rutas y middlewares.
- Definí rutas de registro e inicio de sesión (`/auth/register` y `/auth/login`).
- Incorporé rutas de consulta, modificación y eliminación de usuarios bajo `/users`, con validación de entradas y middleware de autenticación según el endpoint.
- Utilicé Mongoose para la conexión y el modelado de datos en MongoDB.

## Tecnologías

JavaScript · React 19 · Next.js 15 · Tailwind CSS 4 · Node.js · Express 5 · MongoDB · Mongoose · JWT · Git y GitHub.

## Organización

```text
frontend/
  src/pages/          Páginas de la interfaz
  src/components/     Componentes reutilizables
  src/contexts/       Estado compartido del carrito
backend/
  src/app.js          Aplicación y rutas Express
  src/controllers/    Controladores de autenticación y usuarios
  src/routers/        Endpoints HTTP
  src/middlewares/    Validaciones y autenticación
  src/models/         Modelos de datos
  src/db/             Conexión a MongoDB
```

## Ejecución local

**Interfaz:** desde la carpeta `frontend/`, instalo dependencias y ejecuto el servidor de desarrollo:

```bash
npm install
npm run dev
```

**API:** desde `backend/`, instalo las dependencias y ejecuto Express:

```bash
npm install
npm run dev
```

Para una conexión propia con MongoDB configuro la variable `DB_URI` en el entorno local; no incluyo credenciales personales en la documentación. Si ejecuto frontend y API al mismo tiempo, les asigno puertos distintos mediante la configuración local.

## Alcance

Presento este repositorio como un ejercicio de arquitectura frontend/backend y desarrollo de interfaces. Las tarjetas de la página utilizan datos definidos en el propio frontend; la presencia de rutas de autenticación no implica que exista un flujo completo de cuentas integrado con todas las pantallas.
