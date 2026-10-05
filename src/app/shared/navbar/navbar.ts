import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {}
