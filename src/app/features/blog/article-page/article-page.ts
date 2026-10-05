import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { articles } from '../articles';

@Component({
  imports: [RouterLink],
  selector: 'app-article-page',
  styleUrl: './article-page.scss',
  templateUrl: './article-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlePage {
  private readonly route = inject(ActivatedRoute);
  private readonly slug = toSignal(this.route.paramMap.pipe(map((params) => params.get('slug'))), {
    initialValue: this.route.snapshot.paramMap.get('slug'),
  });
  protected readonly article = computed(() => articles.find((item) => item.slug === this.slug()));
}
