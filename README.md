# Portafolio — Luis Gustavo Perdomo Márquez (Astro)

Rediseño + refactor completo enfocado en **minimalismo premium**, **velocidad** y una narrativa clara “data‑focused builder”.

## Stack

- **Astro + TypeScript + Tailwind**
- SEO: canonical + OpenGraph + JSON‑LD (Person) + `@astrojs/sitemap`
- Imágenes: `astro:assets` (optimización + `srcset`) cuando las rutas vienen de `src/img/*`

## Ejecutar local

```bash
npm install
npm run dev
```

## Build (GitHub Pages)

Este repo está pensado para publicar desde la carpeta `docs/` (GitHub Pages).

```bash
npm run build
```

- El build se genera en `./docs` (configurado en `astro.config.mjs`).
- Si tu repo fuera “project pages” (ej: `https://usuario.github.io/mi-repo/`), configura:
  - Windows PowerShell:

```powershell
$env:BASE_PATH="/mi-repo/"; npm run build
```

## Dónde editar el contenido (1 solo archivo)

Todo el texto y estructura vive en:

- `src/content/site.ts`

Ahí puedes:
- Cambiar el copy del hero, chips, highlights
- Agregar/quitar proyectos y stacks
- Actualizar links (Live/Repo/Private/NDA)
- Poner tu email real (`site.person.email`)
- Activar el CV cuando lo tengas (`site.cta.cv.available`)

## Cómo agregar proyectos / imágenes

1) Agrega un proyecto en `site.projects` (en `src/content/site.ts`).
2) Para galería (lightbox), añade `images: [...]` con 3–6 items.

### Imágenes optimizadas (recomendado)

Para que Astro optimice automáticamente, usa imágenes dentro de `src/img/` y referencia así:

- `"/src/img/mi-imagen.png"`

El componente `Gallery` detecta rutas `"/src/img/*"` y usa `astro:assets` para generar tamaños responsivos y lazy‑loading.

## Suposiciones (documentadas)

- Email: se deja **vacío** por defecto para no inventar datos. Agrega el tuyo en `src/content/site.ts`.
- CV: botón presente pero en modo placeholder (“Próximamente”). Cuando tengas el PDF, puedes:
  - subirlo a `public/cv.pdf` y cambiar `cta.cv.available` + link, o
  - apuntar a un Drive/Notion.

## Notas de performance

- Sin librerías pesadas de animación.
- Transiciones CSS mínimas.
- Imágenes lazy + optimizadas en galería.

