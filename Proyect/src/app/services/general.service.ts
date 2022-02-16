import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertService, ConfirmationService } from '@next/nx-controls-common';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient,private confirmationService: ConfirmationService,private alertService: AlertService) { }

  private urlHerokuEmpresarial = 'https://empresarial-b.herokuapp.com/api/v1';

  getEmployees(){
    return this.http.get(this.urlHerokuEmpresarial+"/employees");
  } 
  getEmployeesById(id){
    return this.http.get(this.urlHerokuEmpresarial+"/employees/"+id);
  }
  addEmployee(body:any){
    return this.http.post(this.urlHerokuEmpresarial+"/employees",body);
  }
  deleteEmployee(id:any){
    return this.http.delete(this.urlHerokuEmpresarial+"/employees/"+id);
  }
  updateEmployee(body:any,id:any){
    return this.http.put(this.urlHerokuEmpresarial+"/employees/"+id,body);
  }
  getUserByUserName(user:any){
    return this.http.get(this.urlHerokuEmpresarial+"/user/login?user="+user);
  }
  getUser(){
    return JSON.parse(localStorage.getItem("user"));
  }
  setAlertConfimation(mensaje:any){
    this.confirmationService.confirm({
      message: mensaje,
      lblOkBtn: 'Si',
      lblCancelBtn: 'Cancelar',
      accept: () => {
          console.log('Saved!');
      },
      reject: () => {
          console.log('Canceled!');
      }
    });
  }

  setAlerts(typeAlert:any,mensaje:any){
    switch(typeAlert){
        case 'success':this.alertService.success(mensaje);
        break;
        case 'error':this.alertService.error(mensaje);
        break;
        case 'info':this.alertService.info(mensaje);
        break;
        case 'warn':this.alertService.warn(mensaje);
        break;
        case 'clear':this.alertService.clear();
        break;
    }
  }
}
