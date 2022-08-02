import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { CardsComponent } from './cards/cards.component';
import { DominopComponent } from './dominop/dominop.component';
import { RamipComponent } from './ramip/ramip.component';
import { Sba3Component } from './sba3/sba3.component';
import { DominoContComponent } from './domino-cont/domino-cont.component';
import { RamiContComponent } from './rami-cont/rami-cont.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    CardsComponent,
    DominopComponent,
    RamipComponent,
    Sba3Component,
    DominoContComponent,
    RamiContComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
