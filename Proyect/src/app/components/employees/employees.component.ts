import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(private service: GeneralService,private router:Router) { }
  arrayEmployes:any;
  employeeUpdate:any;
  ngOnInit() {
    this.employeeUpdate=null;
    var user=this.service.getUser();
    if(user.perfil=="jugador"){
      this.router.navigate(["/home"]);
      this.service.setAlerts("warn","su perfil no tiene permisos");

    }else{
      this.getEmployees();
    }
    
  }

  getEmployees(){
    this.service.getEmployees().subscribe((response:any)=>{this.arrayEmployes=response;});
  }
  AddEmployee(data:NgForm){
    if(this.employeeUpdate==null){
      if(data.value.brm!=null&&data.value.name!=null&&data.value.photo&&data.value.post!=null){
        this.service.addEmployee({"brm":data.value.brm,"name":data.value.name,"photo":data.value.photo,"post":data.value.post}).subscribe((response:any)=>{
          if(response.id){
          this.service.setAlerts("success","Se agrego con exito!");
          data.reset();
          this.getEmployees();
          }
        })
      }
    }else{
      if(data.value.brm!=null&&data.value.name!=null&&data.value.photo&&data.value.post!=null){
        this.service.updateEmployee({"brm":data.value.brm,"name":data.value.name,"photo":data.value.photo,"post":data.value.post},this.employeeUpdate.id).subscribe((response:any)=>{
          if(response.id){
            this.service.setAlerts("success","se Actualizo con exito");
          data.reset();
          this.getEmployees();
          }
        })
      }
    }
  }
  delete(id){
    this.service.deleteEmployee(id).subscribe((response:any)=>{
      if(response.deleted==true){
        this.service.setAlerts("success","se Elimino con exito");

      this.getEmployees();
      }
    })
  }
  update(id){
    this.service.getEmployeesById(id).subscribe((employee:any)=>{
      this.employeeUpdate=employee;
    })
  }
}

