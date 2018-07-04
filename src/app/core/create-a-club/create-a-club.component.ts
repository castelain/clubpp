import { Component } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-create-a-club',
  templateUrl: './create-a-club.component.html',

  styleUrls: ['./create-a-club.component.css']
})
export class CreateAClubComponent {
  validateForm: FormGroup;
  submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[ key ].markAsDirty();
      this.validateForm.controls[ key ].updateValueAndValidity();
    }
    console.log(value);
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[ key ].markAsPristine();
      this.validateForm.controls[ key ].updateValueAndValidity();
    }
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  }

  clubnameAsyncValidator = (control: FormControl) => Observable.create((observer: Observer<ValidationErrors>) => {
    setTimeout(() => {
      if (control.value === 'xxx-club') {
        observer.next({ error: true, duplicated: true });
      } else {
        observer.next(null);
      }
      observer.complete();
    }, 1000);
  })

  confirmValidator = (control: FormControl): { [ s: string ]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
  }

  // 动态验证用户输入的昵称是否有效
  nicknameAsyncValidator = (control) => Observable.create((observer) => {
    setTimeout(() => {
      // 如果该昵称在数据库中不存在，则提示用户该昵称无效
      if (control.value !== 'jasmine') {
        observer.next({ error: true, invalid: true });
      } else {
        observer.next(null);
      }
      observer.complete();
    }, 1000);
  })

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      clubname: [ 'xxx-club is a duplicated club name', [ Validators.required ], [ this.clubnameAsyncValidator ] ],
      master  : [ 'jasmine is a valid nickname of master', [ Validators.required ], [ this.nicknameAsyncValidator] ],
      created_time: [ null ],
      member_number: [ '', [ Validators.required ] ],
      tags : [ '', [ Validators.required ] ],
      addresses: ['', [ Validators.required ]],
      bio  : ['', [ Validators.required ]]
    });
  }
}
