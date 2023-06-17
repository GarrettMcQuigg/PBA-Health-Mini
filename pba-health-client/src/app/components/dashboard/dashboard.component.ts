import { Component } from '@angular/core';
import { User } from 'src/app/shared/models';
import { ObservableInput } from 'rxjs';
import { GetAllUsersResponse } from 'src/app/shared/services/table-data/table.interface';
import { TableService } from 'src/app/shared/services/table-data/table.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  users!: User[];
  constructor(private tableService: TableService) {
    const requests: [ObservableInput<GetAllUsersResponse>] = [
      this.tableService.getAllUsers(),
    ];
  }
}
