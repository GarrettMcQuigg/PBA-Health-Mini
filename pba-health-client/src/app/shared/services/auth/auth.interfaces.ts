import { User } from 'src/app/shared/models/user.interface';

export interface AuthResponse {
  user: User;
  token: string;
}

export interface GetAllUsersResponse {
  users: User[];
}

export interface RegisterRequestBody {
  username: string;
  email: string;
  fullName: string;
  password: string;
  confirmPassword: string;
}

export interface LoginRequestBody {
  username: string;
  password: string;
}
