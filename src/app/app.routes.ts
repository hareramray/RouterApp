import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AdminPage } from './admin-page/admin-page';
import { HomePage } from './home-page/home-page';
import { UserProfile } from './user-profile/user-profile';
import { SocialMediaFeed } from './user-profile/social-media-feed/social-media-feed';
import { FeatureFlagsService } from './shared/feature-flags.service';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'admin',
    component: AdminPage,
  },
  {
    path: 'admin1',
    component: AdminPage,
  },
  {
    path: 'reports',
    canMatch: [() => inject(FeatureFlagsService).isEnabled('reports')],
    loadComponent: () => {
      const featureFlags = inject(FeatureFlagsService);
      featureFlags.markLoaded('reports');
      return import('./reports-page/reports-page').then((m) => m.ReportsPage);
    },
  },
  // Parameterized routes
  {
    path: 'user/:id',
    component: UserProfile,
  },
  {
    path: 'user/:id/:social-media',
    component: SocialMediaFeed,
  },
];


