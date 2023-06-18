import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  options = {
    timeOut: 2000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
  };

  constructor(private toastr: ToastrService) {}

  success(message: string, title?: string) {
    if (!title) {
      title = '🎉';
    }
    this.toastr.success(message, title, this.options);
  }

  error(message: string, title?: string) {
    this.toastr.error(message, title, this.options);
  }

  warning(message: string, title?: string) {
    this.toastr.warning(message, title, this.options);
  }

  info(message: string, title?: string) {
    this.toastr.info(message, title, this.options);
  }
}
