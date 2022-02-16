import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/models/User';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: GeneralService,private router:Router) { }
  title:any;
  user =this.service.getUser();
  leftContent = [
    { description: 'Inicio', isTitle: true },
    { description: 'Empleados', route: this.router.navigate(['/home/empleados',{id:this.user.id}])},
    //{ description: 'Empleados', route:'home/empleados/'+(this.user ? this.user.id : "none")},
    { description: 'Tic Tac Toe',route:  this.router.navigate(['/home/game',{id:this.user.id}])},
    //{ description: 'Tic Tac Toe',route: 'home/game/'+(this.user ? this.user.id : "none")},
    { description: 'none', isTitle: false },
    { description: 'none', isTitle: false},
    { description: 'Cerrar Sesion', route: '/login'}
  ];

  mainContent = [{}];

ngOnInit() {
    this.title="Inicio";
   
  }
  
  

 
   

 }

