import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemComponent } from './components/item/item.component';
import { CreateReservationComponent } from './components/create-reservation/create-reservation.component';
import { CreateReservationFormComponent } from './components/create-reservation-form/create-reservation-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReservationsComponent } from './components/reservations/reservations.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemListComponent,
    ItemComponent,
    CreateReservationComponent,
    CreateReservationFormComponent,
    ReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
