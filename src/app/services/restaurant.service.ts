import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Restaurant } from '../Restaurant';
import { Reservation } from '../Reservation';
import {ReservationWithInfo} from '../ReservationWithInfo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiUrl = 'http://localhost:8080/restaurant/';
  constructor(private http: HttpClient) { }

  getAllRestaurant():Observable<Restaurant[]>{
    let url = this.apiUrl+"getInfo/";
    return this.http.get<Restaurant[]>(url, httpOptions).pipe(catchError(this.errorHandler));
  }

  getReservationByRestaurantId(restaurantId: number): Observable<Reservation[]>{
    let url = this.apiUrl+"getAllReservation/"+restaurantId;
    return this.http.get<Reservation[]>(url, httpOptions).pipe(catchError(this.errorHandler));
  }

  getReservationWithInfo(restaurantId: number): Observable<ReservationWithInfo>{
    let url = this.apiUrl+"getAllReservationAndInfo/"+restaurantId;
    return this.http.get<ReservationWithInfo>(url, httpOptions).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      console.error(error);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
