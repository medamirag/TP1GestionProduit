import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../modele/produit';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.scss']
})
export class DetailProduitComponent implements OnInit {

  constructor(private route:ActivatedRoute ) { }
  produit:Produit={id: 0, image: "", nom: "", prix: 0, quantite:0 }


  ngOnInit(): void {
    let id=this.route.snapshot.params['id']
    console.log(id);
    this.produit=this.products[id]
  }
  products: Produit[] = [
    { id: 0, image: "assets/images/image1.jpg", nom: "apple", prix: 0.158, quantite: 10.359 },
    { id: 1, image: "assets/images/image1.jpg", nom: "apple", prix: 0.158, quantite: 10.359 },
    { id: 2, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pink-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1645572315935", nom: "iphone", prix: 1, quantite: 20 },
    { id: 3, image: "", nom: "C", prix: 2, quantite: 0 },
    { id: 4, image: "./assets/images/image1.jpg", nom: "D", prix: 300.2, quantite: 40.856 },
  ]


}
