import { Component, OnInit } from '@angular/core';
import { ReservationServiceService } from 'src/app/services/reservation-service.service';
import {Reservation} from '../../Reservation';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent implements OnInit {

  constructor(private reservationService: ReservationServiceService) { }

  ngOnInit(): void {
  }

}
