import { Component, OnInit } from '@angular/core';
import { Produit } from '../modele/produit';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.scss']
})
export class ListeProduitsComponent implements OnInit {
//https://github.com/medamirag/TP1GestionProduit
  products: Produit[] = [
    { id: 0, image: "assets/images/image1.jpg", nom: "apple", prix: 0.158, quantite: 10.359 },
    { id: 1, image: "assets/images/image1.jpg", nom: "apple", prix: 0.158, quantite: 10.359 },
    { id: 2, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pink-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1645572315935", nom: "iphone", prix: 1, quantite: 20 },
    { id: 3, image: "", nom: "C", prix: 2, quantite: 0 },
    { id: 4, image: "./assets/images/image1.jpg", nom: "D", prix: 300.2, quantite: 40.856 },
  ]
  productsOrigine=this.products
  isVisible: boolean = true;
  nomSaisie:string=""
// test:string="";
// test2:String="" => Interface : à ne pas utiliser;

chercher(){
   this.products = this.productsOrigine
// console.log(this.products);

  this.products=this.products.filter(produit=>
    produit.nom.toUpperCase().includes(this.nomSaisie.toUpperCase()))
  
}
afficher() {
this.isVisible=!this.isVisible
    // if (this.isVisible) {
    //   this.isVisible = false
    // }
    // else {
    //   this.isVisible = true
    // }
  }


  constructor() { }
  ngOnInit(): void {
  }

}
