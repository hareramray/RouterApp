import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FeatureFlagsService {
  private readonly enabled = new Set(['reports']);
  private readonly loaded = new Set<string>();

  isEnabled(feature: string): boolean {
    return this.enabled.has(feature);
  }

  markLoaded(feature: string): void {
    this.loaded.add(feature);
  }

  wasLoaded(feature: string): boolean {
    return this.loaded.has(feature);
  }
}
