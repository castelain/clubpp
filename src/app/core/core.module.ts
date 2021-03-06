import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CoreRoutingModule } from './core-routing.module';
import { HelpComponent } from './help/help.component';
import { RegisterComponent } from './register/register.component';
import { JoinAClubComponent } from './join-a-club/join-a-club.component';
import { BackTopComponent } from './back-top/back-top.component';
import { CreateAClubComponent } from './create-a-club/create-a-club.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ImgUploadComponent } from './img-upload/img-upload.component';
import { EditAClubComponent } from './edit-a-club/edit-a-club.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    CoreRoutingModule
  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    HelpComponent,
    RegisterComponent,
    JoinAClubComponent,
    BackTopComponent,
    CreateAClubComponent,
    UpdateUserComponent,
    ImgUploadComponent,
    EditAClubComponent
  ]
})
export class CoreModule { }
