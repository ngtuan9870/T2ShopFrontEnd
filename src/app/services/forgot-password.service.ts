import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  private baseUrl = 'https://t2shopbackendapi.000webhostapp.com/api/auth/forgotPassword/';

  constructor(private http:HttpClient) { }

  sendEmail(){

  }

}
