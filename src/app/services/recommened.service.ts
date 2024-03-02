import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecommenedService {

  private baseUrl = 'https://t2shopbackendapi.000webhostapp.com/api/recommened/'

  constructor(private http:HttpClient) { }

  public add(form){
    return this.http.post(this.baseUrl+'add',form);
  }
  public getRecommend(user_id){
    return this.http.post(this.baseUrl+'getrecommened?user_id='+user_id,null);
  }
  
  public getCategory(form){
    return this.http.post(this.baseUrl+"showCate",form);
  }
 
}
