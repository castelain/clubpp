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
    JoinAClubComponent
  ]
})
export class CoreModule { }
