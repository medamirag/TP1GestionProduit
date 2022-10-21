import { Component, OnInit } from '@angular/core';
import { Produit } from '../modele/produit';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.scss']
})
export class ListeProduitsComponent implements OnInit {

products:Produit[] = [
  {id:1,image:"assets/images/image1.jpg",nom:"apple",prix:0.158,quantite:10.359},
  {id:2,image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pink-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1645572315935",nom:"iphone",prix:1,quantite:20},
  {id:3,image:"",nom:"C",prix:2,quantite:0},
  {id:4,image:"./assets/images/image1.jpg",nom:"D",prix:300.2,quantite:40.856},
]
tempoProducts : Produit[]=this.products
  constructor(private testService:TestService) { }
  showImage:boolean=true
  mot:string=""
  chercher(){
this.products=this.tempoProducts
this.products=this.products.filter(product=>product.nom.includes(this.mot))
  }
  changeVisibility(){
this.showImage=!this.showImage
  }
  ngOnInit(): void {
    this.testService.addUser().subscribe(data=>console.log(data))
  }

}
