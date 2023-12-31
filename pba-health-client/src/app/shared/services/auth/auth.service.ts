import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
import {
  RegisterRequestBody,
  LoginRequestBody,
  AuthResponse,
} from './auth.interfaces';
import { User } from '../../models';
import { ConstantService } from '../constant/constant.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private constantService: ConstantService,
    private router: Router
  ) {}

  register(requestBody: RegisterRequestBody): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      this.constantService.SERVER_BASE_URL_WITH_PATH('auth/register'),
      requestBody
    );
  }

  login(requestBody: LoginRequestBody): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(
        this.constantService.SERVER_BASE_URL_WITH_PATH('auth/login'),
        requestBody
      )
      .pipe(
        tap(({ user, token }) => {
          this.storeUserAndToken(user, token);
        }),
        shareReplay(1)
      );
  }

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('/auth/login');
  }

  currentUser(): User | null {
    const userString = localStorage.getItem(this.constantService.userKey);
    return userString ? JSON.parse(userString) : null;
  }

  storeUserAndToken(user: User, token: string) {
    if (!user || !token) {
      return;
    }

    localStorage.setItem(this.constantService.userKey, JSON.stringify(user));
    localStorage.setItem(this.constantService.tokenKey, token);
    this.router.navigateByUrl('/');
  }
}
