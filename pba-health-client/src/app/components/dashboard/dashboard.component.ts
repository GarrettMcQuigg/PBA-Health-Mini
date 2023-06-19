import { Component } from '@angular/core';
import { User } from 'src/app/shared/models';
import { Title } from '@angular/platform-browser';
import { DashboardService } from 'src/app/shared/services/dashboard-data/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  users!: User[];

  constructor(
    private dashboardService: DashboardService,
    private titleService: Title
  ) {
    titleService.setTitle('PBA Health Dashboard');
    this.dashboardService.getAllUsers().subscribe((res) => {
      this.users = res;
    });
  }
}
