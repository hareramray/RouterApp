import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-dashboard',
  standalone: true,
  template: `
    <div class="dashboard basic">
      <h2>Basic Dashboard</h2>
      <p>This is the basic dashboard with essential features.</p>
      <ul>
        <li>Basic Analytics</li>
        <li>Standard Reports</li>
        <li>Email Support</li>
      </ul>
    </div>
  `,
  styles: [`
    .dashboard.basic {
      border: 2px solid blue;
      padding: 20px;
      background-color: #f0f8ff;
    }
  `],
})
export class BasicDashboard {
  constructor() {
    console.log('✅ BasicDashboard component loaded');
  }
}
