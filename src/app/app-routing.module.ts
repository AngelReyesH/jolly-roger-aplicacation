import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RootComponent } from './components/root/root.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/home/home.module#HomeModule'
      },
     {
       path: 'login',
       loadChildren: './modules/auth/auth.module#AuthModule'
     }

    ]
  },
  {  path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
