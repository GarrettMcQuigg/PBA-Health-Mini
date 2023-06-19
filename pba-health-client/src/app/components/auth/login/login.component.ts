import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Title } from '@angular/platform-browser';
import { LoginRequestBody } from 'src/app/shared/services/auth/auth.interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loading = false;

  loginRequestBody: LoginRequestBody = {
    username: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private titleService: Title
  ) {
    titleService.setTitle('Login');
  }

  login(): void {
    if (!this.loginRequestBody.username || !this.loginRequestBody.password) {
      throw new Error('Invalid credentials');
    }
    this.loading = true;

    this.authService.login(this.loginRequestBody).subscribe(
      () => {
        this.router.navigateByUrl('/dashboard');
      },
      () => {
        this.loading = false;
      }
    );
  }
}
