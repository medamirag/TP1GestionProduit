import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { RouterModule } from '@angular/router';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeProduitsComponent,
    DetailProduitComponent,
    NotfoundComponent,
    AcceuilComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
