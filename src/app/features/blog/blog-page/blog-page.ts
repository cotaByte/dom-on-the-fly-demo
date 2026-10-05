import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { articles } from '../articles';

@Component({
  imports: [RouterLink],
  selector: 'app-blog-page',
  styleUrl: './blog-page.scss',
  templateUrl: './blog-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPage {
  protected readonly featured = articles[0];
  protected readonly moreArticles = articles.slice(1);
}
