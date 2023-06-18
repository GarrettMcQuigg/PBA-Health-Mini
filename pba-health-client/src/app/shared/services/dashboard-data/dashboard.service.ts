import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConstantService } from '../constant/constant.service';
import { GetAllUsersResponse } from './dashboard.interface';
import { User } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(
    private http: HttpClient,
    private constantService: ConstantService
  ) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(
      this.constantService.SERVER_BASE_URL_WITH_PATH('getAllUsers')
    );
  }
}
