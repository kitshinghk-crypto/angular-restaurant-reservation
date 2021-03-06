import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from 'src/app/Reservation';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Reservation = {restaurantId:0, customerName:"", phoneNumber:"", reservationDateTime: new Date(), 
  createDateTime: new Date(), numOfPeople:1};
  datestring:string = "";
  timestring:string ="";

  constructor() { }

  ngOnInit(): void {
    console.log(this.item);
    this.datestring = (new Date(this.item.reservationDateTime)).toLocaleDateString("en-DE");
    this.timestring = (new Date(this.item.reservationDateTime)).toLocaleTimeString("en-DE");
  }

}
