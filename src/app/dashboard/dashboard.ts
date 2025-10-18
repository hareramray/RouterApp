import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureFlags } from '../feature-flags';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-container">
      <div class="dashboard-header">
        <h1>Dashboard Hub</h1>
        <p class="subtitle">Main dashboard container with lazy-loaded components</p>
      </div>

      <div class="dashboard-info">
        <div class="info-card">
          <h3>Current Plan</h3>
          <p class="plan" [ngClass]="{ premium: isPremium, basic: !isPremium }">
            {{ isPremium ? '💎 Premium' : '📘 Basic' }}
          </p>
        </div>

        <div class="info-card">
          <h3>New UI</h3>
          <p class="status" [ngClass]="{ enabled: isNewUIEnabled, disabled: !isNewUIEnabled }">
            {{ isNewUIEnabled ? '✅ Enabled' : '❌ Disabled' }}
          </p>
        </div>
      </div>

      <div class="dashboard-content">
        <h2>Welcome to {{ isPremium ? 'Premium' : 'Basic' }} Dashboard</h2>
        <p>This dashboard component demonstrates lazy loading with injection context.</p>
        <p class="note">
          ℹ️ The actual dashboard content (Premium or Basic) is lazy-loaded based on your feature flags!
        </p>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      font-family: Arial, sans-serif;
    }

    .dashboard-header {
      text-align: center;
      margin-bottom: 30px;
      border-bottom: 3px solid #007bff;
      padding-bottom: 20px;
    }

    .dashboard-header h1 {
      margin: 0;
      color: #333;
      font-size: 2.5em;
    }

    .subtitle {
      color: #666;
      margin-top: 10px;
      font-size: 1.1em;
    }

    .dashboard-info {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }

    .info-card {
      background: #f5f5f5;
      border-left: 4px solid #007bff;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .info-card h3 {
      margin: 0 0 10px 0;
      color: #333;
    }

    .plan {
      font-size: 1.5em;
      font-weight: bold;
      margin: 0;
    }

    .plan.premium {
      color: #ffc107;
    }

    .plan.basic {
      color: #007bff;
    }

    .status {
      font-size: 1.3em;
      margin: 0;
    }

    .status.enabled {
      color: #28a745;
    }

    .status.disabled {
      color: #dc3545;
    }

    .dashboard-content {
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .dashboard-content h2 {
      margin-top: 0;
      color: #333;
    }

    .note {
      background: #fff3cd;
      border-left: 4px solid #ffc107;
      padding: 15px;
      border-radius: 4px;
      margin-top: 15px;
      color: #856404;
    }
  `],
})
export class DashboardComponent implements OnInit {
  isPremium = false;
  isNewUIEnabled = true;

  constructor(private featureFlags: FeatureFlags) {}

  ngOnInit() {
    console.log('✅ Dashboard (Container) component loaded');
    this.isPremium = this.featureFlags.isPremium;
    this.isNewUIEnabled = this.featureFlags.isNewUIEnabled;
  }
}
