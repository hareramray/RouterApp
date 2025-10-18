import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FeatureFlags {
  // Simulating feature flags - in real app, this could come from config or API
  isPremium = true;
  isNewUIEnabled = true;

  constructor() {
    console.log('FeatureFlags service initialized');
  }
}
