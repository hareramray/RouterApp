import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { AdminPage } from './admin-page/admin-page';
import { HomePage } from './home-page/home-page';
import { UserProfile } from './user-profile/user-profile';
import { SocialMediaFeed } from './user-profile/social-media-feed/social-media-feed';
import { DashboardComponent } from './dashboard/dashboard';
import { FeatureFlags } from './feature-flags';

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
  // Parameterized routes
  {
    path: 'user/:id',
    component: UserProfile,
  },
  {
    path: 'user/:id/:social-media',
    component: SocialMediaFeed,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'details',
        // Runs inside the route's injection context
        loadComponent: () => {
          const flags = inject(FeatureFlags);
          console.log('Dashboard details route loaded. Premium feature enabled:', flags.isPremium);
          
          // Lazy load different dashboard components based on feature flags
          return flags.isPremium
            ? import('./dashboard/premium-dashboard').then(c => c.PremiumDashboard)
            : import('./dashboard/basic-dashboard').then(c => c.BasicDashboard);
        },
      },
    ],
  },
];


