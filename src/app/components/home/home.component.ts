import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: GeneralService,private router:Router) { }
  title:any;
  user=this.service.getUser();

  leftContent = [
    { description: 'Inicio', isTitle: true },
    { description: 'Empleados', route: 'home/empleados/'+(this.user ? this.user.id : "0")+""},
    { description: 'Tic Tac Toe',route: 'home/game/'+(this.user ? this.user.id : "0")+""},
    { description: 'none', isTitle: false },
    { description: 'none', isTitle: false},
    { description: 'Cerrar Sesion', route: '/login'}
  ];

  mainContent = [{}];


  ngOnInit() {
    this.title="Inicio";
   
  }
  

 
   

 }

