import { Injectable } from '@angular/core';
//import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  //toast message configurations
  type = 'success';
  preventDuplicates = true;
  newestOnTop = false;

  /* constructor(private toastr: ToastrService) {

  }
  toastr_test() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  showToast(type, message, title) {
    const options = {
      tapToDismiss: false,
      closeButton: false,
      progressBar: true,
      progressAnimation: 'decreasing',
      positionClass: 'toast-top-right',

    };
    // `newestOnTop` and `preventDuplicates` options must be set on global config
    this.toastr.toastrConfig.newestOnTop = this.newestOnTop;
    this.toastr.toastrConfig.preventDuplicates = this.preventDuplicates;

    this.toastr[type](message, title, options);
  }

  showSuccess(message, title) {
    this.toastr.success(message, title)
  }

  showError(message, title) {
    this.toastr.error(message, title)
  }

  showInfo(message, title) {
    this.toastr.info(message, title)
  }

  showWarning(message, title) {
    this.toastr.warning(message, title)
  } */

}
