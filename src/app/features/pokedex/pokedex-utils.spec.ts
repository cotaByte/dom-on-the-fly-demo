import {
  filterAndSortPokemon,
  paginatePokemon,
  parsePokemonId,
  type PokemonListItem,
} from './pokedex-utils';

const pokemon: PokemonListItem[] = [
  { id: 1, name: 'bulbasaur' },
  { id: 4, name: 'charmander' },
  { id: 7, name: 'squirtle' },
  { id: 25, name: 'pikachu' },
];

describe('Pokédex data', () => {
  it('reads the stable numeric ID from a PokéAPI resource URL', () => {
    expect(parsePokemonId('https://pokeapi.co/api/v2/pokemon/25/')).toBe(25);
  });

  it('searches all loaded Pokémon by name or number', () => {
    expect(filterAndSortPokemon(pokemon, 'PIKA', 'number').map((item) => item.id)).toEqual([25]);
    expect(filterAndSortPokemon(pokemon, '4', 'number').map((item) => item.id)).toEqual([4]);
  });

  it('sorts before applying the requested page', () => {
    const alphabetical = filterAndSortPokemon(pokemon, '', 'name');
    expect(paginatePokemon(alphabetical, 2, 2).map((item) => item.name)).toEqual([
      'pikachu',
      'squirtle',
    ]);
  });
});
