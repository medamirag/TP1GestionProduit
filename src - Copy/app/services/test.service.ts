import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TestService {

  constructor(private httpClient:HttpClient) { }
//https://moduscreate.com/blog/how-to-mock-data-in-angular-applications/

  addUser():Observable<any>{
    
    return this.httpClient.post<any>("http://localhost:3000/users",{
      "id": 12354,
      "name": "Andrew Owen",
      "age": 26,
      "eyeColor": "blue"
    })
  }
}
