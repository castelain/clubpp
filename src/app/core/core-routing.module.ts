import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HelpComponent } from './help/help.component';
import { JoinAClubComponent } from './join-a-club/join-a-club.component';
import { CreateAClubComponent } from './create-a-club/create-a-club.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { EditAClubComponent } from './edit-a-club/edit-a-club.component';


const coreRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'help',
        component: HelpComponent
      }
    ]
  },
  {
    path: 'home',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'join-a-club',
    component: JoinAClubComponent
  },
  {
    path: 'create-a-club',
    component: CreateAClubComponent
  },
  {
    path: 'update-user',
    component: UpdateUserComponent
  },
  {
    path: 'edit-a-club',
    component: EditAClubComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(coreRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule { }
