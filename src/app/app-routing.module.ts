import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:"listeproduit",component:ListeProduitsComponent},
  {path:"listeproduit/:id",component:DetailProduitComponent},
  {path:"**",component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
