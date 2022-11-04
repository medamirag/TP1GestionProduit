import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produit } from '../modele/produit';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
baseApi=environment.BaseAPI
//"http://localhost:3000"
  constructor(private http:HttpClient) { }

getAll():Observable<Produit[]>{
return this.http.get<Produit[]>(this.baseApi+"/produits")
}

getById(){

}
deleteById(){

}
addProduct(){

}
updateProduct(){

}



}
