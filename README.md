# Debian Landing Page

Landing page modular construida con Next.js App Router, React, TypeScript y Tailwind CSS.

La interfaz está localizada de forma íntegramente local, sin selector de idioma
ni servicios externos. Detecta automáticamente los idiomas preferidos del
navegador al cargar la página, admite los idiomas configurados en
`lib/i18n.tsx` y usa inglés como alternativa para idiomas no disponibles. El
atributo `lang` y la dirección de escritura se actualizan automáticamente
(incluido RTL para árabe y persa).

Idiomas disponibles: `ar`, `bg`, `ca`, `zh-CN`, `zh-TW`, `hr`, `cs`, `da`,
`nl`, `en`, `fi`, `fr`, `gl`, `de`, `el`, `hu`, `id`, `it`, `ja`, `ko`, `nb`,
`fa`, `pl`, `pt`, `ro`, `ru`, `sk`, `es`, `sv`, `tr`, `uk` y `vi`.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Producción

```bash
npm run build
npm run start
```

## Estructura

- `app/`: ruta principal, metadatos y estilos globales.
- `components/`: navegación, hero, selector de descarga, características, versiones, comunidad, pie de página y modal.
- `lib/download.ts`: tipos y reglas para formar el nombre de la imagen según la selección.
- `lib/i18n.tsx`: detección de idioma, traducciones locales y fechas de noticias.

El diálogo de descarga es una simulación de interfaz; no descarga imágenes ISO reales.
