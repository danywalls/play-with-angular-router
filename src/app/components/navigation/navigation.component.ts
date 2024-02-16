import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ROUTE_TOKENS } from '../../route-token';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, JsonPipe],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  public readonly navigation = ROUTE_TOKENS;
}
