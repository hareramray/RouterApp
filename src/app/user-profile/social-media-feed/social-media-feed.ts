import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-social-media-feed',
  standalone: true,
  template: `
    <h2>Social Media Feed</h2>
    <p>User: {{ id }}</p>
    <p>Social: {{ social }}</p>
  `,
})
export class SocialMediaFeed {
  private route = inject(ActivatedRoute);
  readonly id = this.route.snapshot.paramMap.get('id');
  readonly social = this.route.snapshot.paramMap.get('social-media');
}
