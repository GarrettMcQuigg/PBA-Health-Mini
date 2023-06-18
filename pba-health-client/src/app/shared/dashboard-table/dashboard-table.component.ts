import { Component, Input } from '@angular/core';
import { User } from '../models';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.css'],
})
export class DashboardTableComponent {
  userDisplayedColumns: string[] = ['username', 'email', 'fullname'];

  @Input() users!: User[];

  constructor() {}
}
