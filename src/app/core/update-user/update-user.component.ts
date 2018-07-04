import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      nickname         : [ 'jasmine is a duplicated nickname', [ Validators.required ] , [ this.nicknameAsyncValidator ] ],
      name             : [ null, [ Validators.required] ],
      password         : [ null, [ Validators.required ] ],
      checkPassword    : [ null, [ Validators.required, this.confirmationValidator ] ],
      email            : [ null, [ Validators.email ] ],
      day_of_birth     : [ null, [ Validators.required ] ],
      academy          : [ null, [ Validators.required ] ],
      major            : [ null, [ Validators.required ] ],
      gender           : [ 'male', Validators.required ],
      phoneNumberPrefix: [ '+86' ],
      phoneNumber      : [ null, [ Validators.required ] ],
      month_of_enrollment: [ null, [ Validators.required ] ],
      bio              : [ null, [ Validators.required ] ],
      agree            : [ false ]
    });
  }

  submitForm(): void {
    for (const i of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
  }

  // 动态验证用户输入的昵称是否重名
  nicknameAsyncValidator = (control) => Observable.create((observer) => {
    setTimeout(() => {
      // 如果该昵称已被注册，则提示用户
      if (control.value === 'jasmine') {
        observer.next({ error: true, duplicated: true });
      } else {
        observer.next(null);
      }
      observer.complete();
    }, 1000);
  })

}
