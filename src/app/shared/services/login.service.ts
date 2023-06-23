import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Url = environment.root;
  paymentTypeId:number | any;
  public onSelectRoles: BehaviorSubject<any> = new BehaviorSubject<any>('');
  private headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private httpClient: HttpClient) { }

  Login(UserName: any, Password:any) {
    return this.httpClient.get(`${this.Url}/admin/adminlogin?UserName=${UserName}&Password=${Password}`);
  }
  setter(paymentTypeId: any) {
    this.paymentTypeId = paymentTypeId;
  }
  getter() {
    return this.paymentTypeId;
  }
}
