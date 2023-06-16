import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { RegisterRequestBody } from 'src/app/shared/services/auth/auth.interfaces';

import { Title } from '@angular/platform-browser';

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
    // protected validationService: ValidationService,
    private titleService: Title,
  ) {}

  register(): void {
    if (!this.formIsValid()) {
      throw new Error('Invalid Entries');
    }

    this.authService.register(this.registerRequestBody).subscribe(
      () => {
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }

  formIsValid(): boolean {
    // if (
    //   !this.usernameIsValid() ||
    //   !this.fullNameIsValid() ||
    //   !this.emailIsValid() ||
    //   !this.passwordIsValid() ||
    //   !this.confirmPasswordIsValid()
    // ) {
    //   return false;
    // }

    return true;
  }
}
