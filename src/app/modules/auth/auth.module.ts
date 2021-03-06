import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationComponent } from 'src/app/components/authentication/authentication.component';
import { AuthRoutingModule } from './auth-routing.module';

import { FrameworkModule } from '@next/nx-core';

const config = {
  usernameLabel: 'Usuario / Email',
  usernamePlaceholder: 'usuaio o email',
  endpoint: '',
  application: 'BANREGIO',
  applicationTitle: 'Login '
};


@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FrameworkModule.forRoot(config)
  ]
})
export class AuthModule { }
