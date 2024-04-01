import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCustomersService {
  url="http://localhost:3000/customers"
  constructor( private http:HttpClient) { }

  getCustomerssData(){
    return this.http.get(this.url)
  }


}
