import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PokedexPage } from './pokedex-page';

describe('Pokédex page', () => {
  it('shows Pokémon loaded from PokéAPI', async () => {
    await TestBed.configureTestingModule({
      imports: [PokedexPage],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    const fixture = TestBed.createComponent(PokedexPage);
    fixture.detectChanges();
    TestBed.tick();
    const request = TestBed.inject(HttpTestingController).expectOne(
      'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0',
    );
    request.flush({
      count: 151,
      next: null,
      previous: null,
      results: [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }],
    });
    await fixture.whenStable();
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Bulbasaur');
    TestBed.inject(HttpTestingController).verify();
  });

  it('offers a retry after PokéAPI fails', async () => {
    await TestBed.configureTestingModule({
      imports: [PokedexPage],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    const fixture = TestBed.createComponent(PokedexPage);
    fixture.detectChanges();
    TestBed.tick();
    const http = TestBed.inject(HttpTestingController);
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';
    http
      .expectOne(url)
      .flush({ message: 'Unavailable' }, { status: 503, statusText: 'Service Unavailable' });
    await fixture.whenStable();
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    expect(host.textContent).toContain('No se pudo cargar la Pokédex');
    const retry = Array.from(host.querySelectorAll('button')).find((button) =>
      button.textContent?.includes('Reintentar'),
    )!;
    retry.click();
    TestBed.tick();
    http.expectOne(url).flush({
      count: 151,
      next: null,
      previous: null,
      results: [{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }],
    });
    await fixture.whenStable();
    fixture.detectChanges();

    expect(host.textContent).toContain('Bulbasaur');
    http.verify();
  });
});
