import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from 'src/app/components/home/home.component';


import { FrameworkModule } from '@next/nx-core';
import { CommonsModule } from '@next/nx-controls-common';

const config = {
  usernameLabel: 'Usuario / Email',
  usernamePlaceholder: 'Usuario / Email',
  endpoint: '/api',
  application: 'BANREGIO',
  applicationTitle: 'Login'
};


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FrameworkModule.forRoot(config),
    CommonsModule.forRoot()
  ]
})
export class HomeModule { }
