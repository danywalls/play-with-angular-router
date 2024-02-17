import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_TOKENS } from '../../route-token';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly router = inject(Router);
  public acceptTerms(value: boolean) {
    if (value) {
      this.router.navigate([ROUTE_TOKENS.ABOUT]);
    }
  }
}
