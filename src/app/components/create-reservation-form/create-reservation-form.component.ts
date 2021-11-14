import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendarGregorian, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {Restaurant} from '../../Restaurant';
import {Reservation} from '../../Reservation';
import { ReservationServiceService } from 'src/app/services/reservation-service.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-create-reservation-form',
  templateUrl: './create-reservation-form.component.html',
  styleUrls: ['./create-reservation-form.component.css']
})
export class CreateReservationFormComponent implements OnInit {
  customerName: string = "";
  phoneNumber: string = "";
  numOfPeople: number = 0;
  dateModel: NgbDateStruct={year: 2000, month:1, day:1};
  timeModel: NgbTimeStruct={hour: 1, minute:1, second:0};
  hourStep: number = 1;
  minuteStep: number = 15;
  restaurants: Restaurant[]= [];
  selectedRestaurant: number=0;
  errorMsg: string = "";
  successMsg: string = "";
  
  constructor(private reservationService: ReservationServiceService, private restaurantService: RestaurantService) { 
  }

  ngOnInit(): void { 
    this.restaurantService.getAllRestaurant().subscribe(
      restaurants=> this.restaurants= restaurants
    );
    this.resetForm();
  }

  resetForm():void{
    this.customerName="";
    this.phoneNumber="";
    this.numOfPeople =0;
    let c: NgbCalendarGregorian = new NgbCalendarGregorian();
    let today = c.getToday();
    this.dateModel = {year: today.year, month: today.month, day: today.day};
    let now = new Date();
    this.timeModel = {hour: now.getHours(), minute: 0, second: 0};
    this.selectedRestaurant=0;
    this.errorMsg = "";
    this.successMsg = "";
  }

  onSubmit() {
    if(!this.selectedRestaurant){
      this.errorMsg = "Please select a restaurant.";
      return;
    }

    if(!this.customerName){
      this.errorMsg = "Please enter your name.";
      return;
    }

    if(!this.phoneNumber){
      this.errorMsg = "Please enter your phone number.";
      return;
    }

    if(this.numOfPeople<=0){
      this.errorMsg = "The number of people must be larger than 0.";
      return;
    }

    var reservationDate: Date = new Date();
    reservationDate.setFullYear(this.dateModel.year, this.dateModel.month, this.dateModel.day);
    reservationDate.setHours(this.timeModel.hour, this.timeModel.minute, this.timeModel.second);

    let reservation: Reservation ={
      restaurantId: this.selectedRestaurant,
      customerName: this.customerName,
      phoneNumber: this.phoneNumber,
      numOfPeople: this.numOfPeople,
      reservationDateTime: reservationDate,
      createDateTime: new Date()
    };

    console.log(reservation);
    this.createReservation(reservation);
  }

  createReservation(reservation: Reservation){
    this.reservationService.addReservation(reservation).subscribe(
      (result)=> {
        console.log(result)
        this.resetForm()
        this.successMsg = "Reservation made. Your reservation code is "+ result.reservationCode;
      }
    );
  }

}
