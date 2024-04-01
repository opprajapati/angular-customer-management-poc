import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCustomersImagesService {

  constructor(private http:HttpClient) { }

  getAllImage(){
    return this.http.get("https://api.pexels.com/v1/")
  }

}
