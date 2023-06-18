import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { RegisterRequestBody } from 'src/app/shared/services/auth/auth.interfaces';

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  loading = false;

  registerRequestBody: RegisterRequestBody = {
    username: '',
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
  };

  constructor(
    private authService: AuthService,
    private titleService: Title,
    private router: Router
  ) {}

  register(): void {
    if (!this.formIsValid()) {
      throw new Error('Invalid Entries');
    }
    this.authService.register(this.registerRequestBody).subscribe(
      () => {
        this.router.navigateByUrl('/dashboard');
      },
      () => {
        this.loading = false;
      }
    );
  }

  formIsValid(): boolean {
    // if (
    // //   !this.usernameIsValid() ||
    // //   !this.emailIsValid() ||
    // //   !this.fullNameIsValid() ||
    // //   !this.passwordIsValid() ||
    // //   !this.confirmPasswordIsValid()
    // ) {
    //   return false;
    // }

    return true;
  }
}
