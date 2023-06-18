import { Component } from '@angular/core';
import { User } from 'src/app/shared/models';
import { DashboardService } from 'src/app/shared/services/dashboard-data/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  users!: User[];

  constructor(private dashboardService: DashboardService) {
    this.dashboardService.getAllUsers().subscribe((res) => {
      this.users = res;
      console.log(this.users);
    });
  }
}
