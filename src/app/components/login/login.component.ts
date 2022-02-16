import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: GeneralService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    localStorage.removeItem("user");
  }
  
  login(data: NgForm){
 if(data.value.user !== null && data.value.password !== null){
  this.service.getUserByUserName(data.value.user).subscribe((response:any) => {
    console.log(response);
    if((data.value.user==response.userName || data.value.user==response.email)&&Md5.hashStr(data.value.password)==response.password){
      console.log("Login Exitoso");
      localStorage.setItem("user",JSON.stringify(response));
      this.router.navigate(['/home'])
    }else{
      alert("La Combinacion de usuario y password son Incorrectas!");

    }
});
 }
  }

}
