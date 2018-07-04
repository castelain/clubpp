import { Component } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Observable, Observer, observable } from 'rxjs';

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

  // 动态验证输入的标签是否是以逗号分隔的
  tagsAsyncValidator = (control) => Observable.create((observer) => {
    setTimeout(() => {
      if ((control.value.split(',')).length < 2 && (control.value.split('，')).length < 2) {
        observer.next({ error: true, noCommas: true});
      } else {
        observer.next(null);
      }
      observer.complete();
    }, 1000);
  })

  // 动态验证输入的地址是否是以逗号分隔的
  addressAsyncValidator = (control) => Observable.create((observer) => {
    setTimeout(() => {
      if ((control.value.split(',')).length < 2 && (control.value.split('，')).length < 2) {
        observer.next({ error: true, noCommas: true});
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
      created_time: [ null, [ Validators.required ] ],
      member_number: [ '', [ Validators.required ] ],
      tags : [ '', [ Validators.required ], [ this.tagsAsyncValidator ] ],
      addresses: ['', [ Validators.required ], [ this.addressAsyncValidator ]],
      bio  : ['', [ Validators.required ]]
    });
  }
}
