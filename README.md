# Debian — Sitio de presentación

Sitio web de presentación de Debian creado con Next.js App Router, React,
TypeScript y Tailwind CSS. Reúne información del proyecto, noticias oficiales
y enlaces para elegir y descargar imágenes de Debian desde sus servidores.

## Funcionalidades

- **Página de inicio:** hero con artwork de Debian, información de la comunidad,
  carrusel de imágenes y noticias recientes del proyecto.
- **Noticias oficiales:** obtiene los anuncios del feed de Debian News, muestra
  los tres más recientes y almacena la respuesta en caché durante una hora.
- **Descargas:** permite seleccionar la rama, arquitectura e instalador. Netinst
  está disponible para las arquitecturas incluidas en el selector; las imágenes
  Live están disponibles para amd64.
- **Resolución de imágenes:** encuentra la imagen Stable vigente en el manifiesto
  oficial `SHA512SUMS`; para Testing utiliza las imágenes semanales. Las ISO se
  descargan directamente desde los servidores de Debian.
- **Ramas de publicación:** páginas con información de Stable y Testing en
  `/releases`.
- **Búsqueda:** conecta con el buscador oficial de Debian y envía el idioma
  seleccionado.
- **Tema e idioma:** controles para cambiar entre tema claro y oscuro y escoger
  el idioma. La preferencia de idioma puede seguir el idioma del navegador o
  guardarse manualmente en el almacenamiento local.
- **Localización:** admite árabe, búlgaro, catalán, chino simplificado y
  tradicional, croata, checo, danés, neerlandés, inglés, finés, francés,
  gallego, alemán, griego, húngaro, indonesio, italiano, japonés, coreano,
  noruego bokmål, persa, polaco, portugués, rumano, ruso, eslovaco, español,
  sueco, turco, ucraniano y vietnamita. También actualiza el idioma y la
  dirección de escritura de la página, incluido RTL para árabe y persa.
- **Navegación accesible:** incluye controles de carrusel, foco visible y
  transiciones que respetan la preferencia del sistema para reducir el
  movimiento.
- **Identidad del sitio:** incluye metadatos de página y el favicon con la marca
  de Debian.

## Requisitos

- Node.js 20.9 o posterior.
- npm.

## Desarrollo local

Clona el repositorio y ejecuta:

```bash
npm ci
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Compilación y ejecución

```bash
npm run build
npm run start
```

El servidor de producción se inicia en el puerto `3000` de forma predeterminada.

## Despliegue en Vercel

Importa el repositorio en Vercel y conserva los valores detectados para Next.js.
La raíz del proyecto es `./`; no se requieren variables de entorno ni una
configuración de salida estática. Vercel puede compilar la aplicación con los
comandos predeterminados de Next.js.

La aplicación necesita un entorno que admita rutas de servidor y revalidación
incremental para cargar las noticias y resolver las imágenes de descarga. En
Vercel, estas funcionalidades se admiten de forma nativa. Tras el despliegue,
comprueba `/`, `/download`, `/releases` y `/api/download`.

## Rutas principales

| Ruta | Descripción |
| --- | --- |
| `/` | Página de inicio, comunidad y noticias |
| `/download` | Selector de imágenes y recursos de descarga |
| `/releases` | Información sobre las ramas de publicación |
| `/api/download` | Resuelve los datos de la imagen según la selección |

La API de descarga recibe `branch`, `architecture` y `media`. Por ejemplo:

```text
/api/download?branch=stable&architecture=amd64&media=netinst
```

Devuelve el nombre y la URL oficial de la imagen; no actúa como proxy ni aloja
los archivos ISO. Las selecciones no válidas producen un error HTTP.

## Estructura del proyecto

```text
app/
  api/download/route.ts   Resolución de imágenes de Debian
  download/page.tsx       Página de descargas
  releases/page.tsx       Página de ramas de publicación
  icon.svg                Favicon
  layout.tsx              Layout y metadatos globales
  page.tsx                Página de inicio
  globals.css             Estilos globales y transición de navegación
components/
  community.tsx           Carrusel y enlaces de la comunidad
  download-resources.tsx  Enlaces oficiales para obtener Debian
  download-selector.tsx   Selector de imágenes
  footer.tsx              Pie de página
  header.tsx              Navegación, búsqueda, idioma y tema
  hero.tsx                Hero y estadísticas
  news.tsx                Tarjetas de noticias
  releases.tsx            Información de las ramas
lib/
  debian-news.ts          Lectura y validación del feed de noticias
  download.ts             Tipos y validación de opciones de descarga
  i18n.tsx                Idiomas, detección y preferencias
```

## Tecnologías

- [Next.js](https://nextjs.org/) con App Router
- [React](https://react.dev/) y [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) para
  procesar el feed RDF/XML de noticias
- [Lucide](https://lucide.dev/) para iconos
