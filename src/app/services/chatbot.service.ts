import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private baseUrl = "https://t2shopbackendapi.000webhostapp.com/api/chatbot/"; 
  constructor(private http:HttpClient) { }
  public addMessage(form){
    return this.http.post(this.baseUrl+"addMessage",form);
  }
  public checkProduct(form){
    return this.http.post(this.baseUrl+"checkProduct",form);
  }
}
