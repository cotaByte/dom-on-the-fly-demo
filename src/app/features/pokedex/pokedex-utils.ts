export interface PokemonListItem {
  id: number;
  name: string;
}
export type PokemonSort = 'number' | 'name';

export function parsePokemonId(url: string): number {
  const match = url.match(/\/pokemon\/(\d+)\/?$/);
  return match ? Number(match[1]) : 0;
}

export function filterAndSortPokemon(
  items: PokemonListItem[],
  query: string,
  sort: PokemonSort,
): PokemonListItem[] {
  const search = query.trim().toLowerCase();
  const filtered = items.filter(
    (item) => !search || item.name.includes(search) || String(item.id) === search,
  );
  return [...filtered].sort(
    sort === 'name' ? (a, b) => a.name.localeCompare(b.name) : (a, b) => a.id - b.id,
  );
}

export function paginatePokemon(
  items: PokemonListItem[],
  page: number,
  pageSize: number,
): PokemonListItem[] {
  return items.slice((Math.max(1, page) - 1) * pageSize, Math.max(1, page) * pageSize);
}
