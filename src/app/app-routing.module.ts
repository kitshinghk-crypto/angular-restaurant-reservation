import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateReservationComponent } from './components/create-reservation/create-reservation.component';
import { ReservationsComponent } from './components/reservations/reservations.component'

const routes: Routes = [
  { path: 'makeReservation', component: CreateReservationComponent, },
  { path: 'listReservation/:restaurantId', component: ReservationsComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
