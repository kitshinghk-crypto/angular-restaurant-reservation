import { Component, OnInit } from '@angular/core';
import { ReservationWithInfo } from '../../ReservationWithInfo';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  restaurantId: number=0;
  reservationWithInfo:ReservationWithInfo = { restaurantId: 1, name:"", reservation:[]};

  constructor(private restaurantService:RestaurantService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id:string = this.route.snapshot.paramMap.get('restaurantId')||"";
    this.restaurantId = Number.parseInt(id);
    this.restaurantService.getReservationWithInfo(this.restaurantId).subscribe(
      reservationWithInfo=> this.reservationWithInfo = reservationWithInfo
    );
  }

}
