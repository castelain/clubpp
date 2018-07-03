import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-join-a-club',
  templateUrl: './join-a-club.component.html',

  styleUrls: ['./join-a-club.component.css']
})
export class JoinAClubComponent implements OnInit {
  validateForm: FormGroup;

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

  constructor(private fb: FormBuilder) {
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

  // 动态验证用户输入的社团名称是否有效
  clubnameAsyncValidator = (control) => Observable.create((observer) => {
    setTimeout(() => {
      // 如果该社团名称在数据库中不存在，则提示用户该社团名称无效
      if (control.value !== 'xxx-club') {
        observer.next({ error: true, invalid: true });
      } else {
        observer.next(null);
      }
      observer.complete();
    }, 1000);
  })

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      nickname         : [ 'jasmine is a valid nickname', [ Validators.required ], [this.nicknameAsyncValidator] ],
      clubname         : [ 'xxx-club is a valid clubname', [ Validators.required], [this.clubnameAsyncValidator] ],
      extra            : [ '' ]
    });
  }
}
