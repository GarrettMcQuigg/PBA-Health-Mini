import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConstantService } from '../constant/constant.service';
import { GetAllUsersResponse } from './table.interface';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor(private http: HttpClient, private constantService: ConstantService) {}

  getAllUsers(): Observable<GetAllUsersResponse> {
    return this.http.get<GetAllUsersResponse>(
      this.constantService.SERVER_BASE_URL_WITH_PATH('/getAllUsers')
    );
  }
}
