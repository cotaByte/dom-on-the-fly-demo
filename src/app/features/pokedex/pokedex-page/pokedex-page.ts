import { httpResource } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import {
  filterAndSortPokemon,
  paginatePokemon,
  parsePokemonId,
  type PokemonSort,
} from '../pokedex-utils';

interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
}
interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { slot: number; type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  sprites: { other?: { 'official-artwork'?: { front_default?: string | null } } };
}

@Component({
  imports: [],
  selector: 'app-pokedex-page',
  styleUrl: './pokedex-page.scss',
  templateUrl: './pokedex-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokedexPage {
  protected readonly pageSize = 20;
  protected readonly search = signal('');
  protected readonly sort = signal<PokemonSort>('number');
  protected readonly page = signal(1);
  protected readonly selectedId = signal<number | null>(null);
  protected readonly list = httpResource<PokemonListResponse>(
    () => 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0',
  );
  protected readonly detail = httpResource<PokemonDetail>(() => {
    const id = this.selectedId();
    return id ? `https://pokeapi.co/api/v2/pokemon/${id}/` : undefined;
  });
  protected readonly items = computed(() =>
    this.list.hasValue()
      ? this.list
          .value()
          .results.map((item) => ({ id: parsePokemonId(item.url), name: item.name }))
          .filter((item) => item.id > 0)
      : [],
  );
  protected readonly filtered = computed(() =>
    filterAndSortPokemon(this.items(), this.search(), this.sort()),
  );
  protected readonly pageCount = computed(() =>
    Math.max(1, Math.ceil(this.filtered().length / this.pageSize)),
  );
  protected readonly visible = computed(() =>
    paginatePokemon(this.filtered(), this.page(), this.pageSize),
  );

  protected updateSearch(value: string): void {
    this.search.set(value);
    this.page.set(1);
  }
  protected updateSort(value: string): void {
    this.sort.set(value === 'name' ? 'name' : 'number');
    this.page.set(1);
  }
  protected selectPokemon(id: number): void {
    this.selectedId.set(id);
  }
  protected closeDetails(): void {
    this.selectedId.set(null);
  }
  protected nextPage(): void {
    this.page.update((page) => Math.min(page + 1, this.pageCount()));
  }
  protected previousPage(): void {
    this.page.update((page) => Math.max(1, page - 1));
  }
  protected displayName(name: string): string {
    return name.replace(
      /(^|-)([a-z])/g,
      (_match, separator: string, letter: string) =>
        `${separator === '-' ? ' ' : ''}${letter.toUpperCase()}`,
    );
  }
  protected spriteUrl(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
}
