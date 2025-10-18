import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>User Profile</h2>
    <p>Id: {{ id }}</p>
    <nav>
      <a [routerLink]="['/user', id, 'youtube']">YouTube feed</a> |
      <a [routerLink]="['/user', id, 'linkedin']">Linkedin feed</a>
    </nav>
  `,
})
export class UserProfile {
  private route = inject(ActivatedRoute);
  readonly id = this.route.snapshot.paramMap.get('id');
}
