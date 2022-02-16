import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@next/nx-core';
import { EmployeesComponent } from './components/employees/employees.component';
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { RootComponent } from './components/root/root.component';
import { LoginComponent }from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './modules/home/home.module';
import { HomeRoutingModule } from './modules/home/home-routing.module';

const routes: Routes = [ 
  {
       path: 'login',
       component: LoginComponent
     },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      
     {
      path: 'empleados/:id',
      component: EmployeesComponent
    },
    {
      path: 'game/:id',
      component: GameComponent
    }
    ]
  },
  
  
  {  path: '**', redirectTo: 'login',pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,HttpClientModule,HomeModule]
})
export class AppRoutingModule { }
