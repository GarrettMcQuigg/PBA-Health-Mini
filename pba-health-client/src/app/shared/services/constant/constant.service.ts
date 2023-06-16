import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstantService {
  constructor() {}

  // Local Storage Keys
  userKey = 'user';
  tokenKey = 'token';

  SERVER_BASE_URL(): string {
    return `http://localhost:3000/`;
  }

  SERVER_BASE_URL_WITH_PATH(path: string): string {
    return `${this.SERVER_BASE_URL()}${path}/`;
  }
}
