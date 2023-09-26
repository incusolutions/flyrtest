import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardsDestinationsComponent } from './components/cards-destinations/cards-destinations.component';
import { MenumobileComponent } from './components/menumobile/menumobile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    HomeBannerComponent,
    CardsComponent,
    CardsDestinationsComponent,
    MenumobileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
