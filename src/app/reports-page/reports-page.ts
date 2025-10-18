import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FeatureFlagsService } from '../shared/feature-flags.service';

@Component({
  selector: 'app-reports-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports-page.html',
  styleUrl: './reports-page.css'
})
export class ReportsPage {
  private readonly featureFlags = inject(FeatureFlagsService);
  protected readonly loadedPreviously = this.featureFlags.wasLoaded('reports');
}
