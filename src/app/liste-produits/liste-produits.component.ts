import { Component, OnInit } from '@angular/core';
import { Produit } from '../modele/produit';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.scss']
})
export class ListeProduitsComponent implements OnInit {
//https://github.com/medamirag/TP1GestionProduit
  products: Produit[] =[]
  productsOrigine=this.products
  isVisible: boolean = true;
  nomSaisie:string="";
  constructor(private serviceProduit:ProductsService) { }
  ngOnInit(): void {
    this.serviceProduit.getAll().subscribe(data=>{
      this.products=data;
    })
  }

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


  
}
