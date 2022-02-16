import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private service: GeneralService,private router:Router) { }

  player:any;
  player1:any;
  player2:any;
  texto:any;
  reset:any;
  ngOnInit() {
    var user=this.service.getUser();
    if(user.perfil=="empleado"){
      this.router.navigate(["/home"]);
      this.service.setAlerts("warn","su perfil no tiene permisos");
    }
    this.player={x0y0:"",x1y0:"",x2y0:"",x0y1:"",x1y1:"",x2y1:"",x0y2:"",x1y2:"",x2y2:""};

  }
  resetGame(){
    this.player={x0y0:"",x1y0:"",x2y0:"",x0y1:"",x1y1:"",x2y1:"",x0y2:"",x1y2:"",x2y2:""};
    this.player1=null;
    this.player2=null;
    this.reset=false;
    this.texto="";
  }
  setNamesPlayers(data:NgForm){
   if((data.value.p1 && data.value.p2)&&data.value.p1!=data.value.p2){
    this.player1={name:data.value.p1,turno:true,ficha:"X"};
    this.player2={name:data.value.p2,turno:false,ficha:"O"};
    data.reset();
    this.getTexto("El juego inicia con el Juagador "+this.player1.name+" su ficha es: "+this.player1.ficha);
   }else{
     if(data.value.p1==data.value.p2){
      this.getTexto("Debe asignar un nombre Diferente para cada Jugador, Gracias")
     }else{
      this.getTexto("Debe asignar un nombre para cada Jugador, Gracias");
     }
    
   }
  }
  newValue(cordenadas:any){
    if(this.player1.turno){
      this.player[cordenadas]="X";
      this.player2.turno=true;
      this.player1.turno=false;
    this.getTexto("Turno del Juagador "+this.player2.name+" su ficha es: "+this.player2.ficha);
    this.verificarPlayers("X",this.player1);
    }else if(this.player2.turno){
      this.player[cordenadas]="O";
      this.player2.turno=false;
      this.player1.turno=true;
      this.getTexto("Turno del Juagador "+this.player1.name+" su ficha es: "+this.player1.ficha);
      this.verificarPlayers("O",this.player2);
    
  }

   
  }

  verificarPlayers(value:any,jugador:any){
    if(this.player.x0y0==value&&this.player.x1y0==value&&this.player.x2y0==value){
      this.getTexto("El GANADOR del juego es "+jugador.name+" con la ficha "+jugador.ficha);
      this.blockTable();
    }else if(this.player.x0y0==value&&this.player.x0y1==value&&this.player.x0y2==value){
      this.getTexto("El GANADOR del juego es "+jugador.name+" con la ficha "+jugador.ficha);
      this.blockTable();
    }else if(this.player.x1y0==value&&this.player.x1y1==value&&this.player.x1y2==value){
      this.getTexto("El GANADOR del juego es "+jugador.name+" con la ficha "+jugador.ficha);
      this.blockTable();
    }else if(this.player.x2y0==value&&this.player.x2y1==value&&this.player.x2y2==value){
      this.getTexto("El GANADOR del juego es "+jugador.name+" con la ficha "+jugador.ficha);
      this.blockTable();
    }else if(this.player.x0y1==value&&this.player.x1y1==value&&this.player.x2y1==value){
      this.getTexto("El GANADOR del juego es "+jugador.name+" con la ficha "+jugador.ficha);
      this.blockTable();
    }else if(this.player.x0y2==value&&this.player.x1y2==value&&this.player.x2y2==value){
      this.getTexto("El GANADOR del juego es "+jugador.name+" con la ficha "+jugador.ficha);
      this.blockTable();
    }else if(this.player.x0y0==value&&this.player.x1y1==value&&this.player.x2y2==value){
      this.getTexto("El GANADOR del juego es "+jugador.name+" con la ficha "+jugador.ficha);
      this.blockTable();
    }else if(this.player.x2y0==value&&this.player.x1y1==value&&this.player.x0y2==value){
      this.getTexto("El GANADOR del juego es "+jugador.name+" con la ficha "+jugador.ficha);
      this.blockTable();
    }else if(this.player.x0y0&&this.player.x1y0&&this.player.x2y0&&
      this.player.x0y1&&this.player.x1y1&&this.player.x2y1&&
      this.player.x0y2&&this.player.x1y2&&this.player.x2y2){
    this.getTexto("Juego EMPATADO NADI GANO");
    this.blockTable();
    }
  }

  blockTable(){
    this.reset=true;
    this.player1.turno=false;
    this.player2.turno=false;
  }
  
  getTexto(texto:any){
  this.texto=texto;
  }

}