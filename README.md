# DOM on the Fly — Demo

Aplicación Angular con tres escenarios para probar en el futuro la librería **DOM on the Fly**. Esta primera versión funciona por sí sola: todavía no incorpora el chat ni llamadas a un LLM.

## Ponerla en marcha

```bash
nvm use
npm ci
npm start
```

Abre `http://localhost:4200`. La versión de Node está fijada en `.nvmrc`.

## Pantallas

- **Blog** (`/blog`): portada y tres artículos largos (`/blog/:slug`), útiles para probar elementos insertados y acciones de desplazamiento.
- **Pokédex** (`/pokedex`): carga los primeros 151 Pokémon desde [PokéAPI](https://pokeapi.co/), permite buscar, ordenar y paginar, y consulta el detalle al seleccionar una fila. Necesita conexión para los datos y las imágenes.
- **Mission Control** (`/mission-control`): tablero ficticio con indicadores, telemetría ilustrativa y un checklist interactivo.

Las tres pantallas comparten navbar y sistema visual. Los tokens de color, tipografía, superficies y movimiento están en `src/styles/`. Los estilos propios de la composición de cada pantalla permanecen junto a su componente SCSS.

Cada pantalla incluye atributos `data-domfly-page` y `data-domfly-anchor` en zonas estables. Son puntos de inserción para la futura librería; no tienen comportamiento en la demo actual.

## Comprobación

```bash
npm test -- --watch=false
npm run build
```

El proyecto usa Angular 22, componentes standalone, rutas diferidas, estado con signals, `httpResource` para PokéAPI y Vitest.
