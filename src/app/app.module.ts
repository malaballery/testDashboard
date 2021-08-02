import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { VentesTotalesComponent } from './ventes-totales/ventes-totales.component';
import { NombresCommandesComponent } from './nombres-commandes/nombres-commandes.component';
import { ValeurMoyenneCommandesComponent } from './valeur-moyenne-commandes/valeur-moyenne-commandes.component';
import { NombreVisitesComponent } from './nombre-visites/nombre-visites.component';
import { TauxClientsRecurrentsComponent } from './taux-clients-recurrents/taux-clients-recurrents.component';
import { NombreNouveauxClientsComponent } from './nombre-nouveaux-clients/nombre-nouveaux-clients.component';
import { TauxConversionComponent } from './taux-conversion/taux-conversion.component';
import { NombrePaniersComponent } from './nombre-paniers/nombre-paniers.component';
import { TotalVenteParProduitComponent } from './total-vente-par-produit/total-vente-par-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    FourOhFourComponent,
    VentesTotalesComponent,
    NombresCommandesComponent,
    ValeurMoyenneCommandesComponent,
    NombreVisitesComponent,
    TauxClientsRecurrentsComponent,
    NombreNouveauxClientsComponent,
    TauxConversionComponent,
    NombrePaniersComponent,
    TotalVenteParProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
