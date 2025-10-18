import { Component } from '@angular/core';

@Component({
  selector: 'app-premium-dashboard',
  standalone: true,
  template: `
    <div class="dashboard premium">
      <h2>Premium Dashboard</h2>
      <p>This is the premium dashboard with advanced features.</p>
      <ul>
        <li>Advanced Analytics</li>
        <li>Custom Reports</li>
        <li>Real-time Monitoring</li>
        <li>Priority Support</li>
      </ul>
    </div>
  `,
  styles: [`
    .dashboard.premium {
      border: 2px solid gold;
      padding: 20px;
      background-color: #fffef5;
    }
  `],
})
export class PremiumDashboard {
  constructor() {
    console.log('✅ PremiumDashboard component loaded');
  }
}
